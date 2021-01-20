import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'

export const TYPE = {
  main(props: any) {
    return <Text {...props} />
  },
  link(props: any) {
    return <Text {...props} />
  },
  black(props: any) {
    return <Text {...props} />
  },
  body(props: any) {
    return <Text {...props} />
  },
  largeHeader(props: any) {
    return <Text bold fontSize="24px" {...props} />
  },
  mediumHeader(props: any) {
    return <Text bold fontSize="20px" {...props} />
  },
  subHeader(props: any) {
    return <Text fontSize="14px" {...props} />
  },
  blue(props: any) {
    return <Text {...props} />
  },
  darkGray(props: any) {
    return <Text {...props} />
  },
  italic(props: any) {
    return <Text fontSize="12px" style={{ fontStyle: 'italic' }} {...props} />
  },
  error(props: any) {
    return <Text color="failure" {...props} />
  },
}

export default TYPE
