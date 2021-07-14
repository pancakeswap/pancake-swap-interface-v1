import React from 'react'
import {
  Tag,
  VerifiedIcon,
  CommunityIcon,
  BinanceIcon,
  RefreshIcon,
  AutoRenewIcon,
  TagProps,
} from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

const StyleTag = styled(Tag)`
  border-radius: 9px;
  background-color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
  color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
  background: transparent;
  border: 2px solid ${({ isDark }) => (isDark ? '#fff' : '#000')};
`

const CoreTag: React.FC<TagProps> = (props) => {
  const { isDark } = useTheme()
  const { t } = useTranslation()
  return (
    <StyleTag
      variant="secondary"
      outline
      startIcon={<VerifiedIcon width="18px" color="secondary" mr="4px" />}
      {...props}
      isDark={isDark}
    >
      {t('Core')}
    </StyleTag>
  )
}

const CommunityTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  return (
    <StyleTag
      isDark={isDark}
      variant="failure"
      outline
      startIcon={<CommunityIcon width="18px" color="failure" mr="4px" />}
      {...props}
    >
      {t('Community')}
    </StyleTag>
  )
}

const BinanceTag: React.FC<TagProps> = (props) => {
  const { isDark } = useTheme()
  return (
    <StyleTag
      isDark={isDark}
      variant="binance"
      outline
      startIcon={<BinanceIcon width="18px" color="secondary" mr="4px" />}
      {...props}
    >
      Binance
    </StyleTag>
  )
}

const DualTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  return (
    <StyleTag isDark={isDark} variant="textSubtle" outline {...props}>
      {t('Dual')}
    </StyleTag>
  )
}

const ManualPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  return (
    <StyleTag
      isDark={isDark}
      variant="secondary"
      outline
      startIcon={<RefreshIcon width="18px" color="secondary" mr="4px" />}
      {...props}
    >
      {t('Manual')}
    </StyleTag>
  )
}

const CompoundingPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  return (
    <StyleTag
      isDark={isDark}
      variant="success"
      outline
      startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />}
      {...props}
    >
      {t('Auto')}
    </StyleTag>
  )
}

export { CoreTag, CommunityTag, BinanceTag, DualTag, ManualPoolTag, CompoundingPoolTag }
