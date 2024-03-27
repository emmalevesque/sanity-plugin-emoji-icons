import {Text} from '@sanity/ui'
import {ReactElement} from 'react'

export default function EmojiIcon({children}: {children: string}): ReactElement {
  return (
    <Text
      size={1}
      weight="bold"
      style={{display: 'inline-block', width: '1.75em', textAlign: 'center'}}
    >
      {children}
    </Text>
  )
}
