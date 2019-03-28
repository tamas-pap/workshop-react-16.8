# Updating state based on props

Here is an example of a component that uses the legacy `componentWillReceiveProps` lifecycle to update `state` based on new `props` values:

```js
// Before
class ExampleComponent extends Component {
  state = {
    isScrollingDown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.currentRow !== nextProps.currentRow) {
      this.setState({
        isScrollingDown:
          nextProps.currentRow > this.props.currentRow,
      });
    }
  }
}
```

Although the above code is not problematic in itself, the `componentWillReceiveProps` lifecycle is often mis-used in ways that do present problems. Because of this, the method will be deprecated.

The recommended way to update `state` in response to `props` changes is with the new static `getDerivedStateFromProps` lifecycle. (That lifecycle is called when a component is created and each time it receives new props):

```js
// After
class ExampleComponent extends React.Component {
  // Initialize state in constructor,
  // Or with a property initializer.
  state = {
    isScrollingDown: false,
    lastRow: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
}
```

You may notice in the example above that `props.currentRow` is mirrored in state (as `state.lastRow`). This enables `getDerivedStateFromProps` to access the previous props value in the same way as is done in `componentWillReceiveProps`.

As we will see later we actually need to keep `props` and `state` in sync in very rare situations. We will discuss better alternatives shortly.

#### The takeaway from here is to use _getDerivedStateFromProps_ if you need to update state based on prop changes. Finally let's see a very common pattern of using _componentWillReceivedProps_ and an alternative for it.
