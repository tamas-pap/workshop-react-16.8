# Anti-pattern: Unconditionally copying props to state

A common misconception is that `getDerivedStateFromProps` and `componentWillReceiveProps` are only called when props change. These lifecycles are called any time a parent component rerenders, regardless of whether the props are different from before.

Because of this,  unconditionally overriding state using will cause state updates to be lost.

Let’s consider an example to demonstrate the problem. Here is a `EmailInput` component that mirrors an `email` prop in state:

```js
class EmailInput extends Component {
  state = { email: this.props.email };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    // Do not do this.
    this.setState({ email: nextProps.email });
  }
}
```

At first, this component might look okay. State is initialized to the value specified by props and updated when we type into the `<input>`. But if our component’s parent rerenders, anything we’ve typed into the `<input>` will be lost!

#### Let's see a demo.
