import React from 'react'
import { BunnyPlaceholderHD, Flex, Heading } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'

interface ComingSoonProps {
  children?: React.ReactNode
}

const ComingSoon: React.FC<ComingSoonProps> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" p="24px">
      <BunnyPlaceholderHD width="72px" height="72px" />
      <Heading as="h5" scale="md" color="textDisabled">
        {children || t('Coming Soon!')}
      </Heading>
    </Flex>
  )
}

export default ComingSoon
