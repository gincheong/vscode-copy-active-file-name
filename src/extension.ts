import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('copy-active-file-name.copyFileNameNoExt', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const document = editor.document;
      const fileName = path.basename(document.fileName, path.extname(document.fileName));

      vscode.env.clipboard.writeText(fileName).then(() => {
        vscode.window.showInformationMessage(`Copied file name: ${fileName}`);
      });
    } else {
      vscode.window.showWarningMessage('No active editor found');
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
