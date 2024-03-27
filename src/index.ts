import {definePlugin} from 'sanity'

import EmojiIcon from './components/EmojiIcon'
import {Layout} from './components/Layout'
import {Preview} from './components/Preview'

export {EmojiIcon}

export const emojiIcons = definePlugin<void>(() => {
  return {
    name: 'sanity-plugin-emoji-icons',
    studio: {
      components: {
        layout: Layout,
      },
    },
    form: {
      components: {
        preview: Preview,
      },
    },
  }
})
