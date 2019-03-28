import { map, flatten } from 'lodash-es';
import { MARKDOWN, CODE_SANDBOX } from './sectionTypes';

export const SLIDES_BY_GROUPS = [
  {
    title: "What's new in React",
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
    ],
  },
  {
    title: 'Alternatives for deprecated methods',
    slides: [
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
  {
    title: 'You probably do not need derived state',
    slides: [
      {
        id: 'common-problems-with-derived-state',
        title: 'Common problems with derived state',
        sections: [
          {
            type: MARKDOWN,
            file: 'common-problems-with-derived-state.md',
          },
        ],
      },
      {
        id: 'unconditionally-copying-props-to-state',
        title: 'Unconditionally copying props to state',
        sections: [
          {
            type: MARKDOWN,
            file: 'unconditionally-copying-props-to-state.md',
          },
        ],
      },
      {
        id: 'unconditionally-copying-props-to-state-demo',
        title: 'Unconditionally copying props to state - Demo',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: 'ol9305pr2q',
          },
        ],
      },
      {
        id: 'erasing-state-when-props-change',
        title: 'Erasing state when props change',
        sections: [
          {
            type: MARKDOWN,
            file: 'erasing-state-when-props-change.md',
          },
        ],
      },
      {
        id: 'erasing-state-when-props-change-demo',
        title: 'Erasing state when props change - Demo',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: 'ym12q7lvm9',
          },
        ],
      },
      {
        id: 'preferred-alternatives-to-derived-state',
        title: 'Preferred alternatives to derived state',
        sections: [
          {
            type: MARKDOWN,
            file: 'preferred-alternatives-to-derived-state.md',
          },
        ],
      },
      {
        id: 'use-derived-state-for-memoization',
        title: 'Use derived state for memoization',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '4l3onvw3ow',
          },
        ],
      },
      {
        id: 'use-memoized-function',
        title: 'Use a memoized function (better alternative)',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '541jkl8pnk',
          },
        ],
      },
    ],
  },
  {
    title: 'HOCs vs. render props',
    slides: [
      {
        id: 'the-problem-with-hocs',
        title: 'The problem with HOCs',
        sections: [
          {
            type: MARKDOWN,
            file: 'the-problem-with-hocs.md',
          },
        ],
      },
      {
        id: 'with-theme-hoc',
        title: 'A simple withTheme HOC',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '6ymj9wmkrk',
          },
        ],
      },
      {
        id: 'implement-position-hocs',
        title: 'Implement the scrollPosition and mousePosition HOCs',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '04krownvln',
          },
        ],
      },
      {
        id: 'render-props-to-the-rescue',
        title: 'Render props to the rescue',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: 'ry9m2y1qq',
          },
        ],
      },
    ],
  },
  {
    title: 'The context API',
    slides: [
      {
        id: 'the-context-api',
        title: 'The Context API',
        sections: [
          {
            type: MARKDOWN,
            file: 'the-context-api.md',
          },
        ],
      },
      {
        id: 'using-context-type',
        title: 'Using context type',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '819r3k5m7j',
          },
        ],
      },
      {
        id: 'using-the-context-consumer',
        title: 'Using context consumer',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: 'pjz2wpl6r7',
          },
        ],
      },
      {
        id: 'implement-a-locale-context',
        title: 'Implement a locale context',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '21xrv13xl0',
          },
        ],
      },
    ],
  },
  {
    title: 'More awesomeness',
    slides: [
      {
        id: 'react-memo',
        title: 'React memo',
        sections: [
          {
            type: CODE_SANDBOX,
            codeSandboxId: '5k4vw9m1ln',
            size: 50,
          },
          {
            type: MARKDOWN,
            file: 'react-memo.md',
            size: 50,
          },
        ],
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
