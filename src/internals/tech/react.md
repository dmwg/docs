# React

[React](https://reactjs.org) is a JavaScript library for building user interfaces. It is component-based, meaning parts are often self-contained. It is also based on a virtual DOM system, so sometimes has similar syntax to HTML.

Discord uses React components throughout it's app. An example of this is the button component, used for essentially all buttons throughout the app. Components are usually in their own Webpack module using a display name. Another common was is a Webpack module with several exports, where you can get it by using the display name as a property of the parent object.