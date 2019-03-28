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
            type: CODE_SANDBOX,
            codeSandboxId: 'mqlz7pw98p',
            size: 50,
          },
          {
            type: MARKDOWN,
            file: 'introduction.md',
            size: 50,
          },
        ],
      },
    ],
  },
];

export const SLIDES = flatten(map(SLIDES_BY_GROUPS, 'slides'));
