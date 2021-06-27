# Button

The `Button` component is used throughout Discord for button inputs.


## Notes

`Button` has two unique props for setting some classes:
 - `color`: sets the (background) color of the button, these classes can be accessed in an object under `Button.Colors`
 - `size`: sets the size (usually padding) of the button, these classes can be accessed in an object under `Button.Sizes`


## Getting Component

You can get the component via it's display name, `ButtonDropdown`.
<br>

<code-group>
<code-block title="GooseMod" active>
<code-group>
<code-block title="ESM" active>
```js
import { findByDisplayName } from '@goosemod/webpack';
const Markdown = findByDisplayName('ButtonDropdown');
```
</code-block>

<code-block title="CJS">
```js
const { findByDisplayName } = require('@goosemod/webpack');
const Markdown = findByDisplayName('ButtonDropdown');
```
</code-block>
</code-group>
</code-block>

<code-block title="Powercord (v2)">
```js
const { getModuleByDisplayName } = require('powercord/webpack');
const Markdown = getModuleByDisplayName('ButtonDropdown', false);
```
</code-block>

<code-block title="BetterDiscord">
```js
// This uses BD's built-in API, you may be using a library which has it's own Webpack API
const { findByDisplayName } = BdApi;
const Markdown = findByDisplayName('ButtonDropdown');
```
</code-block>

<code-block title="Vizality">
<code-group>
<code-block title="ESM" active>
```js
import { getModuleByDisplayName } from '@vizality/webpack';
const Markdown = getModuleByDisplayName('ButtonDropdown');
```
</code-block>

<code-block title="CJS">
```js
const { getModuleByDisplayName } = require('@vizality/webpack');
const Markdown = getModuleByDisplayName('ButtonDropdown');
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
React.createElement(Button, {
  color: Button.Colors.BRAND,
  size: Button.Sizes.SMALL,

  className: 'my-button',

  disabled: false,

  onClick: () => alert(1)
}, 'My Button');
```
</code-block>

<code-block title="JSX">
```jsx
<Button
  color=Button.Colors.BRAND
  size=Button.Sizes.SMALL

  className="my-button"

  disabled=false
  onClick=() => alert(1)
>
  My Button
</Button>
```
</code-block>
</code-group>
