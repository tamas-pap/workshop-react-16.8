# New lifecycle methods

###  _getDerivedStateFromProps_

```js
class Example extends Component {
  static getDerivedStateFromProps(props, state) {
    // ...
  }
}
```

The new static `getDerivedStateFromProps` lifecycle is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or `null` to indicate that the new props do not require any state updates.

Together with `componentDidUpdate`, this new lifecycle should cover all use cases for the legacy `componentWillReceiveProps`.

### _getSnapshotBeforeUpdate_

```js
class Example extends Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
```

The new `getSnapshotBeforeUpdate` lifecycle is called right before mutations are made (e.g. before the DOM is updated). The return value for this lifecycle will be passed as the third parameter to `componentDidUpdate`.

(This lifecycle isn’t often needed, but can be useful in cases like manually preserving scroll position during rerenders.)

#### Next, let's see how to replace the deprecated methods with better alternatives.
