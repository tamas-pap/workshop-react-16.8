# React memo
Class components can bail out from rendering when their input props are the same using `PureComponent` or `shouldComponentUpdate`. Now you can do the same with function components by wrapping them in `React.memo`.

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* only rerenders if props change */
});
```
