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

/mod_specific.webpack.displayname Markdown

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