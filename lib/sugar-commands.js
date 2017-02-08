'use babel';

import {CompositeDisposable} from 'atom';
import * as Sugar from 'sugar';
require('sugar-inflections');
require('sugar-language');

let commands = [
	'camelize',
	'capitalize',
	'compact',
	'dasherize',
	'decodeBase64',
	'encodeBase64',
	'escapeHTML',
	'escapeURL',
	'hankaku',
	'hiragana',
	'humanize',
	'katakana',
	'parameterize',
	'pluralize',
	'reverse',
	'singularize',
	'spacify',
	'titleize',
	'trim',
	'trimLeft',
	'trimRight',
	'underscore',
	'unescapeHTML',
	'unescapeURL',
	'zenkaku',
];

export default {
	subscriptions: null,
	activate() {
		this.subscriptions = new CompositeDisposable();
		for (let command of commands) {
			let cmd = {};
			cmd['sugar-command:' + command] = () => this.do(command);
			this.subscriptions.add(atom.commands.add('atom-workspace', cmd));
			this.subscriptions.add(atom.menu.add([{
				label: 'Packages',
				submenu: [{
					label: 'Sugar Commands',
					submenu: [{
						label: command,
						command: 'sugar-command:' + command,
					}],
				}],
			}]));
			this.subscriptions.add(atom.contextMenu.add({
				'atom-text-editor': [{
					label: 'Sugar Commands',
					submenu: [{
						label: command,
						command: 'sugar-command:' + command,
					}],
				}],
			}));
		}
	},
	deactivate() {
		this.modalPanel.destroy();
		this.subscriptions.dispose();
		this.sugarCommandsView.destroy();
	},
	do(command) {
		let editor = atom.workspace.getActiveTextEditor();
		if (!editor) { return; }
		let selection = new Sugar.String(editor.getSelectedText());
		if (!selection) { return; }
		editor.insertText(selection[command]().raw);
	},
};
