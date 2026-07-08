# 💜 RegionMarker - The Ultimate `#region` Formatting Extension

---

## ✨ Description

**RegionMarker** provides the definitive solution for visually structuring and organizing your code blocks within Visual Studio Code. Designed specifically for software engineers and game developers working with extensive architectures—whether you are writing massive C# gameplay scripts, structuring complex C++ engine subsystems, or keeping JS/TS files impeccably tidy—this extension ensures your `#region` and `#endregion` directives are beautifully formatted and instantly recognizable.

The plugin enhances your workflow by allowing you to completely customize the aesthetic of your collapsible code sections, bringing clarity and a clean hierarchy directly into your favorite VSC-based code editor.

📦 **Marketplace:** [Link to Marketplace]

## 🌟 Features

🔍 **Enhanced Visual Hierarchy:**
Robust highlighting for your `#region` directives, making it substantially easier to read and navigate massive codebases. It visually separates your logic blocks so you can find what you need at a glance.

🎨 **Advanced Customization:**
Intelligent aesthetic control built right into VSCode. Tailor the background and foreground colors to perfectly match your workspace, whether you prefer a minimalist "Japandi" style, a high-contrast dark theme, or subtle glassmorphism hues.

🌍 **Universal Language Support:**
Fully compatible with any language that utilizes standard region folding conventions (including C#, C++, C, JS/TS, and more). Whether you are developing for Unity, Unreal Engine, or custom IoT microcontrollers, your regions will remain beautifully formatted.

⚡ **Zero Performance Overhead:**
Lightweight and optimized for speed, ensuring your editor remains perfectly responsive even when handling files with tens of thousands of lines of code.

## 🛠️ Work In Progress (WIP)

🔮 **Dynamic Region Folding:** Integration of custom shortcut commands to collapse or expand specific color-coded regions simultaneously, keeping your workspace as clean as possible!

## 🚀 Installation

1. Launch **VSCode**.
2. Go to the Extensions view (`View > Extensions`).
3. Search for **"Region Marker"** or **RegionMarker**.
4. Install the plugin.
5. Reload VSCode.
6. `🎉 Enjoy! :)`

## ⚙️ Instructions

### 🌈 Adjust Workspace Settings

⚡ **The Fast Way (Visual):**
1. Go to your VSCode settings (UI).
2. Search for **RegionMarker**.
3. Freely adjust the `regionmarker.background` color to your preference.
4. Freely adjust the `regionmarker.foreground` color to your preference.

🛠️ **The Perfect Way (JSON):**
1. Open your `settings.json` (Workspace or Global settings).
2. Apply your custom hex colors within the `workbench.colorCustomizations` block.
```json
"workbench.colorCustomizations": {
    "regionmarker.background": "#ff3b9833",
    "regionmarker.foreground": "#ff3b98ff"
}