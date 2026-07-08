"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activate = void 0;
const vscode = require("vscode");
// this method is called when vs code is activated
function activate(context) {
    console.log('decorator sample is activated');
    let timeout = undefined;
    const regionLineDecorationType = vscode.window.createTextEditorDecorationType({
        isWholeLine: true,
        fontWeight: "bold",
        color: {
            id: 'regionmarker.foreground'
        },
        backgroundColor: {
            id: 'regionmarker.background'
        }
    });

    const endregionLineDecorationType = vscode.window.createTextEditorDecorationType({
        isWholeLine: true,
        fontWeight: "bold",
        color: {
            id: 'regionmarker.foreground'
        },
    });

    let activeEditor = vscode.window.activeTextEditor;

    function updateDecorations() {
        if (!activeEditor) {
            return;
        }
        const regEx = /(#region)|(#endregion)/g;
        //const regEx = /^(#region)((.|\n)*)(#endregion)/g;
        const text = activeEditor.document.getText();
        const regionLine = [];
        const endregionLine = [];
        let match;
        while ((match = regEx.exec(text))) {
            const startPos = activeEditor.document.positionAt(match.index);
            const decoration = {
                range: new vscode.Range(startPos, startPos)
            };

            if (match[0] == "#endregion") {
                endregionLine.push(decoration);
            } else {
                regionLine.push(decoration);
            }
        }
        activeEditor.setDecorations(regionLineDecorationType, regionLine);
        activeEditor.setDecorations(endregionLineDecorationType, endregionLine);
    }

    function triggerUpdateDecorations() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(updateDecorations, 0);
    }
    if (activeEditor) {
        triggerUpdateDecorations();
    }
    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map