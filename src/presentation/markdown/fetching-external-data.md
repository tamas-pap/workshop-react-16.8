# Fetching external data

Here is an example of a component that uses `componentWillMount` to fetch external data:

```js
// Before
class ExampleComponent extends Component {
  state = {
    externalData: undefined,
  };

  async componentWillMount() {
    this.request = loadMyAsyncData();

    const externalData = await this.request;
    this.setState({externalData});

    this.request = undefined;
  }

  componentWillUnmount() {
    if (this.request) {
      this.request.cancel();
    }
  }

  render() {
    if (this.state.externalData === undefined) {
      // Render loading state ...
    } else {
      // Render real UI ...
    }
  }
}
```

#### There two main issues with this code:

- `componentWillMount` is called also when rendering on server side, however we should not use external data on server side.
- with the upcoming async rendering mode `componentWillMount` could be called multiple times, which results in multiple server calls in case the rendering is canceled.

>
> __Note__
>
> While `componentDidMount` and `componentWillUnmount` are never called with server side rendering, `componentWillMount` is.

The recommended upgrade path for most use cases is to move data-fetching into `componentDidMount`:

```js
// After
class ExampleComponent extends Component {
  state = {
    externalData: undefined,
  };

  async componentDidMount() {
    this.request = loadMyAsyncData();

    const externalData = await this.request;
    this.setState({externalData});

    this.request = undefined;
  }

  componentWillUnmount() {
    if (this.request) {
      this.request.cancel();
    }
  }

  render() {
    if (this.state.externalData === undefined) {
      // Render loading state ...
    } else {
      // Render real UI ...
    }
  }
}
```

#### The takeaway from here is to only fetch external data in _componentDidMount_ instead of _componentWillMount_. Let's see whats next.
