import {PreviewComponent, PreviewProps, SchemaTypeDefinition, useSchema} from 'sanity'

import {SchemaTypeDefinitionWithEmoji} from '../types'
import EmojiIcon from './EmojiIcon'

export const Preview: PreviewComponent = (props: PreviewProps) => {
  const schema = useSchema()

  const {schemaType} = props

  const schemaName = schemaType?.name

  const thisSchemaType: SchemaTypeDefinitionWithEmoji =
    schema._original?.types?.find((type: SchemaTypeDefinition) => type.name === schemaName) ||
    ({} as SchemaTypeDefinitionWithEmoji)

  if (Object.keys(thisSchemaType).includes('emoji')) {
    const icon = thisSchemaType?.icon || null
    return props.renderDefault({
      ...props,
      media: typeof icon === 'string' ? () => EmojiIcon({children: icon}) : props.media,
    })
  }
  return props.renderDefault(props)
}
