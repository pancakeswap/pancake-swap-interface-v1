import React from 'react'
import { AutoColumn } from '../../components/Column'
import { TYPE } from '../../components/Shared'

const { body: Body } = TYPE

export function EmptyState({ message }: { message: string }) {
  return (
    <AutoColumn style={{ minHeight: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Body>{message}</Body>
    </AutoColumn>
  )
}

export default EmptyState
