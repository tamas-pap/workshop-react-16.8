import { map, flatten } from 'lodash-es';
import { MARKDOWN, CODE_SANDBOX } from './sectionTypes';

export const SLIDES_BY_GROUPS = [
  {
    title: 'What is new in React 16.8',
    slides: [
      {
        id: 'introduction',
        title: 'Introduction',
        sections: [
          {
            type: MARKDOWN,
            file: 'introduction.md',
          },
        ],
      },
      {
        id: 'deprecated-lifecycle-methods',
        title: 'Deprecated lifecycle methods',
        sections: [
          {
            type: MARKDOWN,
            file: 'deprecated-lifecycle-methods.md',
          },
        ],
      },
      {
        id: 'new-lifecycle-methods',
        title: 'New lifecycle methods',
        sections: [
          {
            type: MARKDOWN,
            file: 'new-lifecycle-methods.md',
          },
        ],
      },
      {
        id: 'initializing-state',
        title: 'Initializing state',
        sections: [
          {
            type: MARKDOWN,
            file: 'initializing-state.md',
          },
        ],
      },
      {
        id: 'fetching-external-data',
        title: 'Fetching external data',
        sections: [
          {
            type: MARKDOWN,
            file: 'fetching-external-data.md',
          },
        ],
      },
      {
        id: 'adding-event-listeners',
        title: 'Adding event listeners',
        sections: [
          {
            type: MARKDOWN,
            file: 'adding-event-listeners.md',
          },
        ],
      },
      {
        id: 'updating-state-based-on-props',
        title: 'Updating state based on props',
        sections: [
          {
            type: MARKDOWN,
            file: 'updating-state-based-on-props.md',
          },
        ],
      },
      {
        id: 'fetching-external-data-when-props-change',
        title: 'Fetching external data when props change',
        sections: [
          {
            type: MARKDOWN,
            file: 'fetching-external-data-when-props-change.md',
          },
        ],
      },
      {
        id: 'counter-with-initial-value',
        title: "Let's code",
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: 'qv3z7xqk36',
          },
        ],
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
