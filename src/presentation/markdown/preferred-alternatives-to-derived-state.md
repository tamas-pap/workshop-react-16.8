# Recommended solutions

#### Fully controlled component

One way to avoid the problems mentioned above is to remove `state` from our component entirely. If the email address only exists as a `prop`, then we don’t have to worry about conflicts with state.
We could even convert `EmailInput` to a lighter-weight function component:

```js
const EmailInput = props => {
  return <input onChange={props.onChange} value={props.email} />;
};
```

#### Fully uncontrolled component with a key

Another alternative would be for our component to __fully own the draft email state__.
In that case, our component could still accept a prop for the initial value, but it would ignore subsequent changes to that prop:

```js
class EmailInput extends Component {
  state = { email: this.props.defaultEmail };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}
```

__In order to reset the value__ when moving to a different item (as in our password manager scenario), we can use the special React attribute called `key`. When a `key` changes, React will create a new component instance rather than update the current one.
Keys are usually used for dynamic lists but are also useful here. In our case, we could use the user ID to recreate the email input any time a new user is selected:

```js
<EmailInput
  defaultEmail={this.props.account.email}
  key={this.props.account.id}
/>
```

Each time the ID changes, the `EmailInput` will be recreated and its state will be reset to the latest defaultEmail value.

>
> __Note__
>
> While this may sound slow, the performance difference is usually insignificant. Using a key can even be faster if the components have heavy logic that runs on updates since diffing gets bypassed for that subtree.

#### Reset uncontrolled component with an instance method

```js
class EmailInput extends Component {
  state = {
    email: this.props.defaultEmail
  };

  resetEmailForNewUser(newEmail) {
    this.setState({ email: newEmail });
  }

  // ...
}
```

The parent form component could then use a `ref` to call this method. [See it in action](https://codesandbox.io/s/5k8j49zw9l).

#### Memoization

Sometimes derived state used to ensure an expensive value used in render is recomputed only when the inputs change. This technique is known as memoization.

Using derived state for memoization isn’t necessarily bad, but it’s usually not the best solution. There is inherent complexity in managing derived state, and this complexity increases with each additional property.

#### In the following example we will see how to use memoization.
