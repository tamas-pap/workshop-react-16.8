# Initializing state

This example shows a component with `setState` calls inside of `componentWillMount`:

```js
// Before
class ExampleComponent extends React.Component {
  state = {};

  componentWillMount() {
    this.setState({
      currentColor: this.props.defaultColor,
      palette: 'rgb',
    });
  }
}
```

The simplest refactor for this type of component is to move state initialization to the constructor or to a property initializer, like so:

```js
// After
class ExampleComponent extends React.Component {
  state = {
    currentColor: this.props.defaultColor,
    palette: 'rgb',
  };
}
```

#### This was easy. Let's move on.
