# Anti-pattern: Erasing state when props change

Continuing the previous example, we could avoid accidentally erasing state by only updating it when `props.email` changes:

```js
class EmailInput extends Component {
  state = {
    email: this.props.email
  };

  componentWillReceiveProps(nextProps) {
    // Any time props.email changes, update state.
    if (nextProps.email !== this.props.email) {
      this.setState({
        email: nextProps.email
      });
    }
  }

  // ...
}
```

We’ve just made a big improvement. Now our component will erase what we’ve typed only when the props actually change.

There is still a subtle problem. Imagine a password manager app using the above input component. When navigating between details for two accounts with the same email, the input would fail to reset.

This is because the prop value passed to the component would be the same for both accounts! This would be a surprise to the user, as an unsaved change to one account would appear to affect other accounts that happened to share the same email.

#### Let's see a demo.
