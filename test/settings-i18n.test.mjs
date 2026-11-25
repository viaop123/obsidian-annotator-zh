// The settings tab keeps English source strings as stable keys. A missing
// translation must fall back to that source text, and template placeholders
// must not consume Obsidian template words such as {{title}}.
import test from 'node:test';
import assert from 'node:assert/strict';
import { settingsText } from '../src/settings-i18n.ts';

test('settings headings and controls are translated', () => {
    assert.equal(settingsText('Highlight colours'), '高亮颜色');
    assert.equal(settingsText('Sidebar'), '侧边栏');
    assert.equal(settingsText('Text recognition'), '文字识别');
    assert.equal(settingsText('Check'), '检查');
});

test('settings translations fill named values', () => {
    assert.equal(settingsText('On this device, {size}.', { size: '1.2 MB' }), '已在此设备上，1.2 MB。');
    assert.equal(
        settingsText('{name}: drag to your bookmarks bar', { name: '在 Annotator 中标注' }),
        '在 Annotator 中标注：拖到浏览器书签栏'
    );
});

test('missing translations and template words fall back without loss', () => {
    assert.equal(settingsText('A setting added upstream'), 'A setting added upstream');
    assert.equal(
        settingsText('A note starts with {{title}} and uses a {size} field.', { title: 'wrong', size: 'small' }),
        'A note starts with {{title}} and uses a small field.'
    );
});
