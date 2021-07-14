import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import SecondaryCard from './SecondaryCard'
import CardContent from './CardContent'

const PleaseWaitCard = () => {
  const { t } = useTranslation()

  return (
    <SecondaryCard>
      <CardContent imgSrc="/images/present-alt.svg">
        <Heading mb="8px">{t('Please wait...')}</Heading>
        <Text>{t('The claiming period hasn’t started yet. Check back soon.')}</Text>
      </CardContent>
    </SecondaryCard>
  )
}

export default PleaseWaitCard
