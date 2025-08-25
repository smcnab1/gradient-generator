# Gradient Generator

A minimalist, local-first Raycast extension for crafting gradients. Create a gradient, preview it in a large panel, copy ready-to-use snippets (CSS, SwiftUI, Tailwind arbitrary value), generate random gradients, and save your favorites locally.

## Key Features

* Create linear, radial, or conic gradients (with angle for linear)
* Large preview and gradient metadata
* Copy snippets: CSS, SwiftUI, Tailwind arbitrary value
* Random gradient generator (2–3 stops)
* Saved gradients list with quick preview and delete
* Local storage only (no network calls)

## Commands

* **Create Gradient**: Form to define type, colors, and angle; pushes to Preview
* **Preview Gradient**: Detail view with large preview, metadata, and copy actions (CSS, SwiftUI, Tailwind)
* **Random Gradient**: Generates a random 2–3 stop gradient and shows Preview
* **Saved Gradients**: List of saved gradients with color tags; open Preview; delete

## Frequently Asked Questions

**Do I need an internet connection?**

No. The extension works completely offline with no network calls required.

**Can I export my gradients?**

Yes. You can copy CSS, SwiftUI, and Tailwind arbitrary value snippets directly from the preview panel.

**Are my saved gradients synced?**

All gradients are stored locally in Raycast's storage. They're not synced across devices right now.

**How does the random generator work?**

It creates gradients with 2–3 color stops using random colors and positions, perfect for inspiration and quick mockups.

## Troubleshooting

**I can't see my saved gradients.**

Make sure you've actually saved gradients using the save button in the preview panel. Check that the filter isn't set incorrectly.

**The preview isn't showing.**

Try refreshing the extension or restarting Raycast. The preview requires the gradient data to be properly formatted.

**Copy actions aren't working.**

Ensure you're using the latest version of Raycast. The copy functionality depends on Raycast's clipboard API.