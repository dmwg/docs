# Button

The `Button` component is used throughout Discord for button inputs.


## Notes

`Button` has two unique props for setting some classes:
 - `color`: sets the (background) color of the button, these classes can be accessed in an object under `Button.Colors`
 - `size`: sets the size (usually padding) of the button, these classes can be accessed in an object under `Button.Sizes`


## Getting Component

You can get the component via it's display name, `DropdownButton`.
<br>

/mod_specific.webpack.displayname DropdownButton

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
