# The problem with HOCs

If you are developing with React, it's pretty sure you already used higher order components.
The most common example is probably the redux's `connect` function.

```js
class ExampleComponent extends Component {
  // ...
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
```

The `connect` function is a higher order function, which takes a component as an argument and returns a new component.

#### To better understand how HOCs are working and what are the problems with it, let's implement a couple of HOCs.
