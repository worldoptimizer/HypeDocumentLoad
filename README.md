# Hype Document Load

## Overview
The Hype Document Load extension is a very simple extension designed for Tumult Hype, enabling animators to easily manage and handle document load events within their Hype projects. This extension provides a streamlined way to execute functions when a Hype document is fully loaded, enhancing the interactivity and responsiveness of Hype animations and applications.

## Features
- **Automatic Event Handling**: The extension automatically attaches to the HypeDocumentLoad event, ensuring that your custom functions are called precisely when the Hype document finishes loading.
- **Easy Integration**: Simply including the extension in your project allows you to start using its features without complex setup.
- **Function Invocation**: The extension checks for a corresponding function in `hypeDocument.functions()` and executes it if present, allowing for a modular and organized approach to scripting.

## Usage
To use the Hype Document Load extension in your Tumult Hype project:
1. **Include the Extension**: Add the Hype Document Load JavaScript file to your project.
2. **Define Your Function**: The resource panel define `HypeDocumentLoad`.
3. **Automatic Execution**: On document load, your `HypeDocumentLoad` function will be automatically executed.

Example Hype Function:
```javascript
function HypeDocumentLoad(hypeDocument, element, event) {
    // Your custom code here
};
```

## Installation
1. Download the `HypeDocumentLoad.min.js` file from the repository.
2. Include the script in the head of your HTML or as an external JavaScript file in your Hype project.

## Version History
- 1.0.0: Initial release

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
