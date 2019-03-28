# Deprecated lifecycle methods

In his talk at the 2018 Iceland React conference Dan Abramov presented in [his talk](https://www.youtube.com/watch?v=nLF0n9SACd4) how async rendering will be the future of React.

He also detailed that one of the biggest lessons they’ve learned while implementing async rendering is that some of React's legacy component lifecycles tend to encourage unsafe coding practices. They are:

- __`componentWillMount`__
- __`componentWillReceiveProps`__
- __`componentWillUpdate`__

#### Gradual Migration Path

- __16.3__: Introduce aliases for the unsafe lifecycles, `UNSAFE_componentWillMount`, `UNSAFE_componentWillReceiveProps`, and `UNSAFE_componentWillUpdate`. (Both the old lifecycle names and the new aliases will work in this release.)

- __A future 16.x release__: Enable deprecation warning for `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate`. (Both the old lifecycle names and the new aliases will work in this release, but the old names will log a DEV-mode warning.)

- __17.0__: Remove `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate` . (Only the new `“UNSAFE_”` lifecycle names will work from this point forward.)

####  Next, we will take a look at the new lifecycle methods.
