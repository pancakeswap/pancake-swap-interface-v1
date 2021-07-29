import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import {
  Stepper,
  Step,
  CardHeader,
  StepStatus,
  Card,
  CardBody,
  Heading,
  Text,
  Button,
  Link,
  OpenNewIcon,
} from '@pancakeswap-libs/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'views/Ihos/types'
import { useTranslation } from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/layout/Container'
import { useProfile } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'

interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => (theme.isDark ? '#23224e' : '#fff')};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 0px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0px;
    margin-right: 0px;
    max-width: 736px;
  }
  padding: 0;
`
const StyleButton = styled(Button)`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0;
  -webkit-transition: background-color 0.2s, opacity 0.2s;
  transition: background-color 0.2s, opacity 0.2s;
  height: 48px;
  padding: 0 24px;
  width: 100%;
  background-image: linear-gradient(to left, #ffe505, #ffc81c 50%);
  color: #010033;
`

/* background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${({ ifoId }) => `url('/images/ihos/${ifoId}-bg.svg')`}; */
const Header = styled(CardHeader)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 112px;
  background: none;
  background-color: ${({ theme }) => (theme.isDark ? '#d8d8d8' : '#010033')};
`
const Font = styled.div`
  text-align: center;
  flex: 1;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-family: NotoSansCJKkr;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#000' : '#fff')};
`
const CardStyle = styled(Card)`
  background-color: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  color: #000000;
`
const IfoSteps: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { hasProfile } = useProfile()
  const { t } = useTranslation()
  const { balance } = useTokenBalance(getAddress(ifo.currency.address))
  const stepsValidationStatus = [
    hasProfile,
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    const isStepValid = stepsValidationStatus[step]
    switch (step) {
      case 0:
        return (
          <CardBody p="16px 24px">
            <Heading as="h4" mb="16px">
              {t('Activate your Profile')}
            </Heading>
            <Text color="textSubtle" small mb="16px">
              {t('You’ll need an active HubDAO Profile to take part in an IHO!')}
            </Text>
            {isStepValid ? (
              <Text bold>{t('Profile Active!')}</Text>
            ) : (
              <StyleButton as={Link} href="#/profile">
                {t('Activate your Profile')}
              </StyleButton>
            )}
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" mb="16px">
              {t('Get HD-BKC LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('Stake HD and BKC in the liquidity pool to get LP tokens.')} <br />
              {t('You’ll spend them to buy IHO sale tokens.')}
            </Text>
            <StyleButton
              as={Link}
              external
              href={`${BASE_ADD_LIQUIDITY_URL}/HT/0xA161658ad97F70915136B773beecb72Cde221F31`}
              endIcon={<OpenNewIcon color="white" />}
              mt="16px"
            >
              {t('Get LP tokens')}
            </StyleButton>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" mb="16px">
              {t('Commit LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('When the IHO sales are live, you can “commit” your LP tokens to buy the tokens being sold.')} <br />
              {t('We recommend committing to the Basic Sale first, but you can do both if you like.')}
            </Text>
          </CardBody>
        )
      case 3:
        return (
          <CardBody>
            <Heading as="h4" mb="16px">
              {t('Claim your tokens and achievement')}
            </Heading>
            <Text color="textSubtle" small>
              {t(
                'After the IHO sales finish, you can claim any IHO tokens that you bought, and any unspent HD-BKC LP tokens will be returned to your wallet.'
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      {/* <Heading as="h2" scale="xl" mb="24px" textAlign="center">
        {t('How to Take Part')}
      </Heading> */}
      <Header>
        <Font> {t('How to Take Part')}</Font>
      </Header>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} index={index} status={getStatusProp(index)}>
            <CardStyle>{renderCardBody(index)}</CardStyle>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
