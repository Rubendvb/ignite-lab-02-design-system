import type { Preview } from '@storybook/react'

import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   toc: {
    //     contentsSelector: '.sbdocs-content',
    //     headingSelector: 'h1, h2, h3',
    //     ignoreSelector: '#primary',
    //     title: 'Table of Contents',
    //     disable: false,
    //     unsafeTocbotOptions: {
    //       orderedList: false,
    //     },
    //   },
    // },
  },
}

export default preview
