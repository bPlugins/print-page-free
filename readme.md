# Print Page Block — Print Full Page or Specific Section

![Print Page Banner](https://ps.w.org/print-page/assets/banner-772x250.png)

[![WordPress Support](https://img.shields.io/badge/WordPress-6.5+-blue.svg?style=flat-square&logo=wordpress)](https://wordpress.org/plugins/print-page/)
[![PHP Support](https://img.shields.io/badge/PHP-7.1+-777bb4.svg?style=flat-square&logo=php)](https://wordpress.org/plugins/print-page/)
[![GPLv3 License](https://img.shields.io/badge/License-GPLv3-green.svg?style=flat-square)](https://wordpress.org/plugins/print-page/)
[![Stable Version](https://img.shields.io/badge/Version-1.3.0-blue.svg?style=flat-square)](https://wordpress.org/plugins/print-page/)

**Print Page Block** is a lightweight, high-performance, and fully responsive Gutenberg block and shortcode plugin for WordPress. It allows your website visitors to print the entire page or only a specific section (defined by custom CSS selectors) with a single click.

---

## 🚀 Key Features

### 💎 Core Functionality (Free)
Everything you need to add a seamless print button to your website:
- **Print Full Page:** Instantly trigger the browser's native print dialog for the entire webpage.
- **Print Specific Section:** Print only a designated element using a CSS selector (e.g. `#content`, `.article-body`) for a clean, content-focused layout.
- **10 Button Variants:** Choose from pre-designed button styles including Outline, Rounded Pill, Retro, Brutalist, 3D Effect, and more.
- **Predefined Icons:** Add clean print icons next to your button text from a selection of built-in icons.
- **Full Color Customization:** Configure text, background, border, and hover colors directly inside the Gutenberg Block Editor.
- **Universal Shortcode API:** Embed print buttons anywhere on your site using simple shortcodes.
- **Uninstall Data Cleanup:** Toggle database cleaning options to wipe custom posts and plugin settings when the plugin is deleted.

### 👑 Premium Power (Pro)
Unlock advanced styling and layout control:
- **Print in Modal Popup:** Display the selected section inside a clean modal popup window before trigger-printing.
- **Page Orientation Controls:** Set and force portrait or landscape layouts in the browser print dialog.
- **Remove Specific Elements:** Exclude unwanted elements (e.g., ads, sidebars, social share icons) using comma-separated CSS selectors.
- **Custom Icon Upload:** Upload and display your own SVG or image asset as the print button icon.
- **Show/Hide Text Toggle:** Toggle button text visibility to display clean icon-only print buttons.
- **Advanced Typography:** Customize Google Fonts, letter-spacing, line-height, and font-weight.
- **Responsive Spacing:** Adjust desktop, tablet, and mobile spacing independently.

---

## 🧩 Gutenberg Blocks Reference

The plugin registers a modern Gutenberg block:

| Block Title | Block Name (Slug) | Description |
| :--- | :--- | :--- |
| **Print Page** | `ppb/print-page` | Adds a customizable print button with full design and print layout controls. |

---

## 🗂 Custom Post Types (CPTs)

To separate configurations cleanly, the plugin registers a custom post type:
1. **`print_page` (Print Page Button):** Manages saved block configurations and buttons, allowing them to be loaded anywhere via shortcodes.

---

## 🔌 Developer Shortcodes API

Embed any saved print button configuration anywhere on your site:
```markdown
[print_page id="123"]
```
*Code Reference:* Defined in [ShortCode.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/ShortCode.php).

---

## 🛠 Technical Stack & Libraries

- **Frontend JS/React:** React is used to drive the custom Gutenberg block interfaces, custom sidebars, and admin dashboard fields.
- **Print Styling Engine:** Pure CSS print style injects `@page` attributes and `@media print` directives dynamically.
- **Build System:** Gulp handles packaging and ZIP compilation, while Webpack via `@wordpress/scripts` handles block transpilation and code splitting.
- **bpl-tools (Shared Utility):** A shared utility library providing admin dashboard components and common Gutenberg editor controls.
  - **Source/GitHub:** [bPlugins/bpl-tools](https://github.com/bPlugins/bpl-tools)
  - **License:** GPL-2.0-or-later
  - **External Services:** It may connect to bPlugins, WordPress.org, and Freemius services for product data and checkout functionality. See [External Requests details](https://github.com/bPlugins/bpl-tools#external-requests--why-they-are-made).

---

## 💻 Developer Guide

### Directory Layout

- **`/src`**: Active React components, SCSS styling, and Webpack entry files.
  - **`/Components`**: Gutenberg block edit/save templates and settings panels.
  - **`/bplugins-admin`**: React components and layouts for the backend plugin settings page.
  - **`/utils`**: Common helper functions and button variant styles.
- **`/includes`**: Core PHP controllers, namespace loaders, and class managers.
  - [core.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/core.php): Main plugin bootstrapper and loader.
  - [Init.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/Init.php): Registers block types and custom post types.
  - [AdminMenu.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/AdminMenu.php): Creates submenu page for Help & Demos and renders the settings dashboard wrapper.
  - [Enqueue.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/Enqueue.php): Enqueues editor blocks scripts and dashboard style assets.
  - [ShortCode.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/ShortCode.php): Handles shortcode rendering.
  - [CustomColumn.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/CustomColumn.php): Appends a quick copy-to-clipboard shortcode column in the print CPT admin table.
  - [Ajax.php](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/includes/Ajax.php): Processes backend AJAX actions securely.
- **`/build`**: Compiled and bundled files (automatically generated via Webpack).
- **`plugin.php`**: The main executable and plugin bootstrapper.
- **`uninstall.php`**: Database cleaning script executed on plugin deletion.

### Development Workflow

1. Install development dependencies:
   ```bash
   npm install
   ```
2. Start development hot-rebuild mode:
   ```bash
   npm start
   ```
3. Compile minified assets for release:
   ```bash
   npm run build
   ```
4. Package plugin into a clean distribution ZIP file:
   ```bash
   npm run make-zip
   ```

### Data Flow & Lifecycle
1. **Editor Side:** Block configurations are configured via React panels in `/src/Components` and stored as serialized block attribute comments in the post content database.
2. **PHP Frontend Rendering:** When a shortcode or block renders, the server parses the attributes and outputs a DOM container with a `data-attributes` JSON string.
3. **JS Initialization:** On DOMContentLoaded, the frontend script [view.js](file:///c:/Users/Shamim%20bPlugins/Local%20Sites/free-plugins-dev/app/public/wp-content/plugins/print-page/src/view.js) parses `data-attributes`, mounts the React component, and injects dynamic `<style>` elements into the document header to customize browser `@page` sizes, margins, orientation, and hidden elements.
4. **Trigger Printing:** When clicked, it calls `window.print()` using native print hooks, clean-up operations, or modal isolation to ensure a clean page representation.

---
*Developed with ❤️ by [bPlugins](https://bplugins.com)*
