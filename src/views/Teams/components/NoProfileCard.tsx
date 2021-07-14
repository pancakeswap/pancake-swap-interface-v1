import React from 'react'
import { StyleButton, Card, CardBody, Flex, Heading, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import { Link } from 'react-router-dom'

const NoProfileCard = () => {
  const { t } = useTranslation()

  return (
    <Card mb="32px" isActive>
      <CardBody>
        <Flex
          alignItems={['start', null, 'center']}
          justifyContent={['start', null, 'space-between']}
          flexDirection={['column', null, 'row']}
        >
          <div>
            <Heading scale="lg" mb="8px">
              {t('You haven’t set up your profile yet!')}
            </Heading>
            <Text>{t('You can do this at any time by clicking on your profile picture in the menu')}</Text>
          </div>
          <StyleButton as={Link} to="/profile" mt={['16px', null, 0]}>
            {t('Set up now')}
          </StyleButton>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default NoProfileCard
