# Fetching external data when props change

Here is an example of a component that fetches external data based on `props` values:

```js
// Before
class ExampleComponent extends Component {
  state = {
    externalData: null,
  };

  componentDidMount() {
    this.loadAsyncData(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({externalData: null});
      this.loadAsyncData(nextProps.id);
    }
  }

  componentWillUnmount() {
    if (this.request) {
      this.request.cancel();
    }
  }

  render() {
    if (this.state.externalData === null) {
      // Render loading state ...
    } else {
      // Render real UI ...
    }
  }

  async loadAsyncData(id) {
    this.request = loadMyAsyncData(id);
    const externalDate = await this.request;

    this.setState({externalData});
    this.asyncRequest = null;
  }
}
```
The recommended upgrade path for this component is to move data updates into `componentDidUpdate`. You can also use the new `getDerivedStateFromProps` lifecycle to clear stale data before rendering the new props:

```js
// After
class ExampleComponent extends Component {
  state = {
    externalData: null,
  };

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.id !== state.prevId) {
      return {
        externalData: null,
        prevId: props.id,
      };
    }

    // No state update necessary
    return null;
  }

  componentDidMount() {
    this.loadAsyncData(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.externalData === null) {
      this.loadAsyncData(this.props.id);
    }
  }

  componentWillUnmount() {
    if (this.request) {
      this.request.cancel();
    }
  }

  render() {
    if (this.state.externalData === null) {
      // Render loading state ...
    } else {
      // Render real UI ...
    }
  }

  async loadAsyncData(id) {
    this.request = loadMyAsyncData(id);
    const externalData = await this.request;

    this.setState({externalData});
    this.request = null;
  }
}
```
