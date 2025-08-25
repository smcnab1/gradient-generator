import {
  Action,
  ActionPanel,
  Alert,
  confirmAlert,
  Detail,
  Form,
  Icon,
  Keyboard,
  Toast,
  showToast,
  useNavigation,
  getPreferenceValues,
} from '@raycast/api';
import { useLocalStorage } from '@raycast/utils';
import React, { useMemo, useState, useEffect } from 'react';
import { Gradient } from './types';
import {
  pngDataUri,
  toCss,
  toSwiftUI,
  toTailwind,
  randomHex,
} from './lib/grad';

type Props = Partial<Gradient> & {
  additionalActions?: React.ReactNode;
  isRandomGradient?: boolean;
  onGenerateRandom?: (stopCount?: 2 | 3) => void;
};

type Preferences = {
  tailwindOutputMode: 'utility' | 'css';
};

const ensureDefaults = (g?: Props): Gradient => ({
  type: g?.type ?? 'linear',
  angle: g?.angle ?? 90,
  stops: g?.stops ?? ['#ff0000', '#00ff00'],
  label: g?.label,
});

export default function PreviewGradient(props: Props) {
  const {
    additionalActions,
    isRandomGradient,
    onGenerateRandom,
    ...gradientProps
  } = props;
  const initial = ensureDefaults(gradientProps);
  const [gradient, setGradient] = useState<Gradient>(initial);

  // Get Tailwind output mode from preferences
  const preferences = getPreferenceValues<Preferences>();
  const tailwindMode = preferences.tailwindOutputMode === 'utility';

  // Sync internal state with props changes
  useEffect(() => {
    if (
      gradientProps.type ||
      gradientProps.angle !== undefined ||
      gradientProps.stops
    ) {
      const newGradient = ensureDefaults(gradientProps);
      setGradient(newGradient);
    }
  }, [gradientProps.type, gradientProps.angle, gradientProps.stops]);

  const { value: saved = [], setValue: setSaved } = useLocalStorage<Gradient[]>(
    'saved-gradients',
    [],
  );

  const hasEnoughStops = gradient.stops.length >= 2;

  // Prefer PNG for Raycast markdown reliability
  const png = useMemo(() => pngDataUri(gradient, 800, 480), [gradient]);
  const css = useMemo(() => toCss(gradient), [gradient]);
  const swift = useMemo(() => toSwiftUI(gradient), [gradient]);

  // Tailwind output based on preference
  const tailwindOutput = useMemo(() => {
    if (tailwindMode) {
      return toTailwind(gradient);
    } else {
      // Raw CSS output for Tailwind section
      return toCss(gradient);
    }
  }, [gradient, tailwindMode]);

  const markdown = `# Gradient Preview\n\n![Gradient](${png})\n\n## CSS\n\n\`\`\`css\n${css}\n\`\`\`\n\n## SwiftUI\n\n\`\`\`swift\n${swift}\n\`\`\`\n\n## Tailwind\n\n\`\`\`${tailwindMode ? 'txt' : 'css'}\n${tailwindOutput}\n\`\`\``;

  const onSave = async () => {
    const next = [...saved, gradient];
    await setSaved(next);
    await showToast({ style: Toast.Style.Success, title: 'Saved Gradient' });
  };

  const onAddStop = () => {
    setGradient((g) => ({ ...g, stops: [...g.stops, randomHex()] }));
  };

  const onRename = async (newLabel: string) => {
    const trimmedLabel = newLabel.trim();
    if (!trimmedLabel) {
      await showToast({
        style: Toast.Style.Failure,
        title: 'Label cannot be empty',
      });
      return;
    }

    // Find the gradient in saved list to update it
    const savedIndex = saved.findIndex(
      (g) =>
        g.type === gradient.type &&
        g.angle === gradient.angle &&
        JSON.stringify(g.stops) === JSON.stringify(gradient.stops),
    );

    if (savedIndex !== -1) {
      // Check for name collisions
      const existingIndex = saved.findIndex(
        (g, i) => i !== savedIndex && g.label === trimmedLabel,
      );
      if (existingIndex !== -1) {
        const ok = await confirmAlert({
          title: 'Name Already Exists',
          message: `A gradient with the label "${trimmedLabel}" already exists. Do you want to overwrite it?`,
          primaryAction: {
            title: 'Overwrite',
            style: Alert.ActionStyle.Destructive,
          },
          dismissAction: { title: 'Cancel' },
        });
        if (!ok) return;
      }

      const next = [...saved];
      next[savedIndex] = { ...next[savedIndex], label: trimmedLabel };
      await setSaved(next);
      await showToast({
        style: Toast.Style.Success,
        title: 'Gradient renamed',
      });
    }
  };

  return (
    <Detail
      markdown={markdown}
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.TagList title="Type / Angle">
            <Detail.Metadata.TagList.Item text={gradient.type} />
            {gradient.type === 'linear' ? (
              <Detail.Metadata.TagList.Item text={`${gradient.angle}°`} />
            ) : null}
          </Detail.Metadata.TagList>
          <Detail.Metadata.TagList title="Stops">
            {gradient.stops.map((c, idx) => (
              <Detail.Metadata.TagList.Item
                key={`${idx}-${c}`}
                text={c}
                color={c}
              />
            ))}
          </Detail.Metadata.TagList>
          {!hasEnoughStops ? (
            <Detail.Metadata.Label
              title="Note"
              text="At least two color stops are required."
            />
          ) : null}
          <Detail.Metadata.Separator />
          <Detail.Metadata.Label title="Size" text="800 × 480" />
          <Detail.Metadata.Separator />
          <Detail.Metadata.Label 
            title="Tailwind Output" 
            text={tailwindMode ? "Utility Classes" : "Raw CSS"}
          />
        </Detail.Metadata>
      }
      actions={
        <ActionPanel>
          <>
            {additionalActions}
            {isRandomGradient && onGenerateRandom && (
              <ActionPanel.Section title="Generate New Gradient">
                <Action
                  icon={Icon.ArrowClockwise}
                  title="Random (2 Stops)"
                  onAction={() => onGenerateRandom(2)}
                  shortcut={
                    { modifiers: ['cmd'], key: '2' } as Keyboard.Shortcut
                  }
                />
                <Action
                  icon={Icon.ArrowClockwise}
                  title="Random (3 Stops)"
                  onAction={() => onGenerateRandom(3)}
                  shortcut={
                    { modifiers: ['cmd'], key: '3' } as Keyboard.Shortcut
                  }
                />
                <Action
                  icon={Icon.ArrowClockwise}
                  title="Random (Any)"
                  onAction={() => onGenerateRandom()}
                  shortcut={
                    { modifiers: ['cmd'], key: 'r' } as Keyboard.Shortcut
                  }
                />
              </ActionPanel.Section>
            )}
            <Action
              icon={Icon.Plus}
              title="Add Color Stop"
              onAction={onAddStop}
              shortcut={
                { modifiers: ['cmd', 'shift'], key: 'n' } as Keyboard.Shortcut
              }
            />
            <Action
              icon={Icon.Folder}
              title="Save Gradient"
              onAction={onSave}
            />
            <Action.Push
              icon={Icon.TextCursor}
              title="Save With Label"
              shortcut={{ modifiers: ['cmd'], key: 'l' } as Keyboard.Shortcut}
              target={
                <LabelGradient
                  initial={gradient}
                  onSave={async (g) => {
                    const next = [...saved, g];
                    await setSaved(next);
                    await showToast({
                      style: Toast.Style.Success,
                      title: 'Saved with Label',
                    });
                  }}
                />
              }
            />
            {saved.some(
              (g) =>
                g.type === gradient.type &&
                g.angle === gradient.angle &&
                JSON.stringify(g.stops) === JSON.stringify(gradient.stops),
            ) && (
              <Action.Push
                icon={Icon.Text}
                title="Rename Gradient"
                shortcut={{ modifiers: ['cmd'], key: 'r' } as Keyboard.Shortcut}
                target={
                  <QuickRenameForm
                    initialLabel={gradient.label}
                    onSubmit={onRename}
                  />
                }
              />
            )}
            {hasEnoughStops && (
              <>
                <ActionPanel.Section title="Copy">
                  <Action.CopyToClipboard
                    title="Copy CSS"
                    content={css}
                    shortcut={
                      {
                        modifiers: ['cmd', 'shift'],
                        key: 'c',
                      } as Keyboard.Shortcut
                    }
                  />
                  <Action.CopyToClipboard
                    title="Copy SwiftUI"
                    content={swift}
                    shortcut={
                      {
                        modifiers: ['cmd', 'shift'],
                        key: 's',
                      } as Keyboard.Shortcut
                    }
                  />
                  <Action.CopyToClipboard
                    title="Copy Tailwind"
                    content={tailwindOutput}
                    shortcut={
                      {
                        modifiers: ['cmd', 'shift'],
                        key: 't',
                      } as Keyboard.Shortcut
                    }
                  />
                </ActionPanel.Section>
                <ActionPanel.Section title="Paste into Active App">
                  <Action.Paste
                    title="Paste CSS"
                    content={css}
                    shortcut={
                      { modifiers: ['cmd', 'opt'], key: 'c' } as Keyboard.Shortcut
                    }
                  />
                  <Action.Paste
                    title="Paste SwiftUI"
                    content={swift}
                    shortcut={
                      { modifiers: ['cmd', 'opt'], key: 's' } as Keyboard.Shortcut
                    }
                  />
                  <Action.Paste
                    title="Paste Tailwind"
                    content={tailwindOutput}
                    shortcut={
                      { modifiers: ['cmd', 'opt'], key: 't' } as Keyboard.Shortcut
                    }
                  />
                </ActionPanel.Section>
              </>
            )}
          </>
        </ActionPanel>
      }
    />
  );
}

type LabelGradientProps = {
  initial: Gradient;
  onSave: (g: Gradient) => Promise<void>;
};

function LabelGradient({ initial, onSave }: LabelGradientProps) {
  const { pop } = useNavigation();
  const [label, setLabel] = useState<string>('');
  return (
    <Form
      actions={
        <ActionPanel>
          <Action
            title="Save"
            icon={Icon.Folder}
            onAction={async () => {
              await onSave({ ...initial, label: label.trim() || undefined });
              pop();
            }}
          />
          <Action title="Cancel" icon={Icon.Xmark} onAction={pop} />
        </ActionPanel>
      }
    >
      <Form.Description text="Set a label for this gradient (optional)." />
      <Form.TextField
        id="label"
        title="Label"
        value={label}
        onChange={setLabel}
        placeholder="e.g. Sunset, Brand Accent"
      />
    </Form>
  );
}

type QuickRenameFormProps = {
  initialLabel?: string;
  onSubmit: (label: string) => Promise<void>;
};

function QuickRenameForm({ initialLabel, onSubmit }: QuickRenameFormProps) {
  const { pop } = useNavigation();
  const [label, setLabel] = useState<string>(initialLabel ?? '');
  return (
    <Form
      actions={
        <ActionPanel>
          <Action
            title="Rename"
            icon={Icon.Text}
            onAction={async () => {
              await onSubmit(label);
              pop();
            }}
          />
          <Action title="Cancel" icon={Icon.Xmark} onAction={pop} />
        </ActionPanel>
      }
    >
      <Form.Description text="Rename this gradient." />
      <Form.TextField
        id="label"
        title="New Label"
        value={label}
        onChange={setLabel}
        placeholder="e.g. Sunset, Brand Accent"
      />
    </Form>
  );
}
