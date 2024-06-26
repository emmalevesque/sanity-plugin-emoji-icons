# sanity-plugin-emoji-icons

> Plugin to add Emoji Icons to Previews in Sanity

Coming soon... Screenshots 💃

## Installation

```sh
npm install sanity-plugin-emoji-icons
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {emojiIcons} from 'sanity-plugin-emoji-icons'

export default defineConfig({
  //...
  plugins: [emojiIcons({})],
})
```
Add an `emoji` property to your schema:

```ts
export default defineType({
  name: 'myType',
  type: 'document',
  emoji: '🤠',
})
```

## License

[MIT](LICENSE) © Emma Levesque-Schaefer

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
