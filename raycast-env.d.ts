/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-gradient` command */
  export type CreateGradient = ExtensionPreferences & {}
  /** Preferences accessible in the `preview-gradient` command */
  export type PreviewGradient = ExtensionPreferences & {}
  /** Preferences accessible in the `random-gradient` command */
  export type RandomGradient = ExtensionPreferences & {}
  /** Preferences accessible in the `saved-gradients` command */
  export type SavedGradients = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-gradient` command */
  export type CreateGradient = {}
  /** Arguments passed to the `preview-gradient` command */
  export type PreviewGradient = {}
  /** Arguments passed to the `random-gradient` command */
  export type RandomGradient = {}
  /** Arguments passed to the `saved-gradients` command */
  export type SavedGradients = {}
}

