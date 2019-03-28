# Adding event listeners

Here is an example of a component that uses `componentWillMount` to subscribe to an external dispatcher:

```js
// Before
class ExampleComponent extends Component {
  componentWillMount() {
    this.setState({
      value: this.props.dataSource.value,
    });

    // This is not safe; it can leak!
    this.props.dataSource.subscribe(
      this.handleSubscriptionChange
    );
  }

  componentWillUnmount() {
    this.props.dataSource.unsubscribe(
      this.handleSubscriptionChange
    );
  }

  handleSubscriptionChange = dataSource => {
    this.setState({
      value: dataSource.value,
    });
  };
}
```

#### There are two main issues with this approach

- when using server side rendering `componentWillUnmount` will never be called, which will cause a memory leak.
- with the upcoming async rendering, rendering may be interrupted before it completes, causing `componentWillUnmount` not to be called, causing a memory leak.

>
> __NOTE__
> There is no guarantee that `componentWillMount` and `componentWillUnmount` are not always paired. Only once `componentDidMount` has been called does React guarantee that `componentWillUnmount` will later be called for clean up.

For this reason, the recommended way to add listeners/subscriptions is to use the `componentDidMount` lifecycle:

```js
// After
class ExampleComponent extends Component {
  state = {
    value: this.props.dataSource.value,
  };

  componentDidMount() {
    // Event listeners are only safe to add after mount,
    // So they won't leak if mount is interrupted or errors.
    this.props.dataSource.subscribe(
      this.handleSubscriptionChange
    )
  }

  componentWillUnmount() {
    this.props.dataSource.unsubscribe(
      this.handleSubscriptionChange
    );
  }

  handleSubscriptionChange = dataSource => {
    this.setState({
      value: dataSource.value,
    });
  };
}
```

#### Same takeway as in the previous use case. Just always go with _componentDidMount_ to connect to data sources, initialize timers or register event handlers. Now let's see a how to use _getDerivedStateFromProps_.
