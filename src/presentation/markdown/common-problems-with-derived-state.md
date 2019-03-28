# Common problems with derived state

`getDerivedStateFromProps` exists for only one purpose. It enables a component to update its internal state as the result of changes in props.

However it __should be used sparingly__.

The terms __“controlled”__ and __“uncontrolled”__ usually refer to form inputs, but they can also describe where any component’s data lives.

- Data passed in as `props` can be thought of as __controlled__ (because the parent component controls that data).
- Data that exists only in internal `state` can be thought of as __uncontrolled__ (because the parent can’t directly change it).

The most common mistake with derived state is mixing these two. When a derived state value is also updated by `setState` calls, there isn’t a single source of truth for the data.

#### Let's see a couple of anti-patterns, and how to avoid them.
