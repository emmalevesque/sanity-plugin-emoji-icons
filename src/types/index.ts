import {FieldDefinition, SchemaTypeDefinition} from 'sanity'

export type SchemaTypeDefinitionWithEmoji = (FieldDefinition | SchemaTypeDefinition) & {
  emoji?: string
}

// extend defineType typedefinition to include the emoji property
export type defineTypeWithEmoji = (typeDef: SchemaTypeDefinitionWithEmoji) => FieldDefinition
