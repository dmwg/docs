# Markdown

The `Markdown` component can be used for making [Markdown](https://en.wikipedia.org/wiki/Markdown) text formatted (eg: turning `**text**` into **text**).


## Notes

Keep in mind Discord's Markdown implementation is non-standard (mostly by not featuring all Markdown features). Specific non-standard changes in the component:
 - No links (`[text shown](https://example.com)`)
 - No tables

Additionally, the component *does* support some features not present in normal Discord messages:
 - Lists (`- example item`)
 - Headers (`# header`)


## Getting Component

You can get the component via it's display name, `Markdown`.
<br>

<code-group>
<code-block title="GooseMod" active>
<code-group>
<code-block title="ESM" active>
```js
import { findByDisplayName } from '@goosemod/webpack';
const Markdown = findByDisplayName('Markdown');
```
</code-block>

<code-block title="CJS">
```js
const { findByDisplayName } = require('@goosemod/webpack');
const Markdown = findByDisplayName('Markdown');
```
</code-block>
</code-group>
</code-block>

<code-block title="Powercord (v2)">
```js
const { getModuleByDisplayName } = require('powercord/webpack');
const Markdown = getModuleByDisplayName('Markdown', false);
```
</code-block>

<code-block title="BetterDiscord">
```js
// This uses BD's built-in API, you may be using a library which has it's own Webpack API
const { findByDisplayName } = BdApi;
const Markdown = findByDisplayName('Markdown');
```
</code-block>

<code-block title="Vizality">
<code-group>
<code-block title="ESM" active>
```js
import { getModuleByDisplayName } from '@vizality/webpack';
const Markdown = getModuleByDisplayName('Markdown');
```
</code-block>

<code-block title="CJS">
```js
const { getModuleByDisplayName } = require('@vizality/webpack');
const Markdown = getModuleByDisplayName('Markdown');
```
</code-block>
</code-group>
</code-block>

</code-group>
</code-block>

## Usage
<br>

<code-group>
<code-block title="JS" active>
```js
const markdownText = '***Wow!*** *Markdown* formatting is **very** __neat__.';

React.createElement(Markdown, {
  className: 'my-markdown-container'
}, markdownText);
```
</code-block>

<code-block title="JSX">
```jsx
<Markdown className="my-markdown-container">
  ***Wow!*** *Markdown* formatting is **very** __neat__.
</Markdown>
```
</code-block>
</code-group>