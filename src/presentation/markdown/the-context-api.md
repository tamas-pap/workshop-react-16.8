# The context API

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.

Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

#### Use cases for context

- UI theme
- locale preference
- the authenticated user

#### Now let's see how we use context.
