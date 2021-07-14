import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { ChainId } from '@pancakeswap/sdk'
import styled from 'styled-components'
import { useFarms, usePollFarmsData, usePriceCakeBusd } from 'state/hooks'
import { useTranslation } from 'hooks/useI18n'
import { LogoIcon } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import { getFarmApr } from 'utils/apr'
import { orderBy } from 'lodash'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import useTheme from 'hooks/useTheme'
import { FarmWithStakedValue } from '../Farms/components/FarmCard/FarmCard'
import { RowProps } from '../Farms/components/FarmTable/Row'
import Echarts from './Echarts'

const Header = styled.div`
  padding-top: 50px;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 62px;
  }
  .app-svg {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .pc-svg {
      display: none;
    }
    .app-svg {
      display: block;
    }
  }
`
// const Logo = styled.img`
//   width: 62px;
//   height: 62px;
//   border-radius: 50%;
//   border: 1px solid #f00;
//   margin-right: 12px;
// `
// const MyTitle = styled.div`
//   font-weight: 600;
//   font-size: 28px;
//   color: #2f303f;
// `
const Content = styled.div`
  height: 59px;
  opacity: 0.85;
  font-family: NotoSansCJKkr;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 4.5px;
  text-align: center;
  color: ${({ theme }) => (theme.isDark ? '#fff2c4' : '#000000')};
  margin-bottom: 33px;
`
const Block = styled.div`
  width: 1124px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
  margin: 0 auto;
`
const BlockItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`
const Earn = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  height: 164px;
  padding: 24px 26px 42px 30px;
  border-radius: 8px;
  background: linear-gradient(to left, #444667 12%, #2f303f 43%);
  border: 1px solid ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  color: ${({ theme }) => (theme.isDark ? '#fff2c4' : '#ffffff')};
  .title {
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .block {
    margin-top: 9px;
    @media screen and (max-width: 1024px) {
      margin-top: 40px;
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .apy {
      font-family: NotoSansCJKkr;
      font-size: 42px;
      @media screen and (max-width: 1024px) {
        font-size: 21px;
      }
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    .Stake {
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
      font-weight: 500;
      margin-bottom: 7px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }
`
const Price = styled.div`
  width: 639px;
  padding: 17px 29px 22px 28px;
  @media screen and (max-width: 1024px) {
    padding: 8px 18px 11px 14px;
    width: 100%;
    flex-direction: column;
  }
  border-radius: 8px;
  /* box-shadow: 3px 4px 6px 0 #d8d8d8; */
  /* border: solid 1px #d8d8d8; */
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 4px 6px 0 ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  border: 1px solid ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  p {
    margin-top: 8px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }
  .left {
  }
  .right {
    border-left: 1px solid #979797;
    padding-left: 41.5px;
    @media screen and (max-width: 1024px) {
      padding-left: 0px;
      border-left: none;
    }
  }
`
const Tlv = styled.div`
  width: 100%;
  height: 235px;
  /* padding: 21px 43px 18px 30px; */
  border-radius: 8px;
  border: 1px solid ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  box-shadow: 3px 4px 6px 0 ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  background-color: #ffffff;
`
const Pairs = styled.div`
  width: 100%;
  /* height: 284px; */
  padding: 15px 48px 18px 28px;
  @media screen and (max-width: 1024px) {
    padding: 7px 14px 9px 7px;
  }
  border-radius: 8px;
  box-shadow: 3px 4px 6px 0 ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  border: 1px solid ${({ theme }) => (!theme.isDark ? '#d8d8d8' : 'rgba(2, 1, 29, 0.58)')};
  background-color: #ffffff;
  color: #000;
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    .font {
      font-family: NotoSansCJKkr;
      font-size: 26px;
      @media screen and (max-width: 1024px) {
        font-size: 14px;
      }
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    .right {
      font-family: NotoSansCJKkr;
      font-size: 14px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
    }
  }
  .table {
    width: 100%;

    .table-body-item {
      width: 100%;
      display: flex;
      align-items: center;
      height: 50px;
      line-height: 50px;
      margin: 8px 0 9px;
      padding: 9px 112px 9px 12px;
      @media screen and (max-width: 1024px) {
        padding: 9px 0px 9px 12px;
      }
      border-radius: 6px;
      background-color: #f5f5f5;
      color: ${({ theme }) => (theme.isDark ? '#000000' : '#000000')};
      div {
        flex: 1;
        @media screen and (max-width: 1024px) {
          font-size: 14px;
        }
      }
      .mytitle {
        @media screen and (max-width: 1024px) {
        }
      }
      .button-info {
        display: flex;
        .Add {
          width: 182px;
          @media screen and (max-width: 1024px) {
            width: 80%;
            overflow: hidden;
          }
          height: 32px;
          line-height: 32px;
          text-align: center;
          border-radius: 4px;
          background-image: linear-gradient(to left, #ffe505, #ffc81c 50%);
        }
        .Trade {
          margin-left: 33px;
          width: 91px;
          font-size: 16px;
          @media screen and (max-width: 1024px) {
            margin-left: 0px;
            width: 100%;
            overflow: hidden;
            font-size: 14px;
          }
          height: 32px;
          line-height: 32px;
          border-radius: 4px;
          background-image: linear-gradient(to left, #44465e, #2f303f 50%);
          font-family: NotoSansCJKkr;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
        }
      }
      .curr {
        display: flex;
        position: relative;
        @media screen and (max-width: 1024px) {
          display: none;
        }
        .curr1 {
          width: 28px;
          height: 28px;
          margin: 3px 24px 1px 188px;
          object-fit: contain;
        }
        .curr2 {
          position: absolute;
          left: 0;
          top: 0;
          width: 28px;
          height: 28px;
          margin: 3px 0 1px 212px;
          object-fit: contain;
        }
      }
    }

    .head {
      display: flex;
      height: auto;
      background-color: transparent;
      padding-left: 12px;
      .Stake,
      .APY {
        width: 188px;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      .Action {
        width: 306px;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      .Tokens {
        margin: 3px 24px 1px 188px;
        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
`
const NUMBER_OF_FARMS_VISIBLE = 12

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const textColor = isDark ? '#ffefb4' : '#392324'
  const { pathname } = useLocation()
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const [query] = useState('')
  const [sortOption] = useState('hot')

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  usePollFarmsData(isArchived)

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded

  const [stakedOnly, setStakedOnly] = useState(!isActive)
  useEffect(() => {
    setStakedOnly(!isActive)
  }, [isActive])

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
  const archivedFarms = farmsLP.filter((farm) => isArchivedPid(farm.pid))

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0)
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0)
  )

  const stakedArchivedFarms = archivedFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0)
  )

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteToken.busdPrice) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
        const apr = isActive
          ? getFarmApr(new BigNumber(farm.poolWeight), cakePrice, totalLiquidity, farm.lpAddresses[ChainId.MAINNET])
          : 0

        return { ...farm, apr, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPR
    },
    [cakePrice, query, isActive]
  )

  const [numberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)

  const farmsStakedMemoized = useMemo(() => {
    let farmsStaked = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apr':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apr, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc'
          )
        case 'earned':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc'
          )
        case 'liquidity':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        default:
          return farms
      }
    }

    if (isActive) {
      farmsStaked = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
    }
    if (isInactive) {
      farmsStaked = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
    }
    if (isArchived) {
      farmsStaked = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms)
    }

    return sortFarms(farmsStaked).slice(0, numberOfFarmsVisible)
  }, [
    sortOption,
    activeFarms,
    farmsList,
    inactiveFarms,
    archivedFarms,
    isActive,
    isInactive,
    isArchived,
    stakedArchivedFarms,
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    numberOfFarmsVisible,
  ])

  const rowData = farmsStakedMemoized.map((farm) => {
    const { token, quoteToken } = farm
    const tokenAddress = token.address
    const quoteTokenAddress = quoteToken.address
    // const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('HUBDAO', '')

    const row: RowProps = {
      apr: {
        value: farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 }),
        multiplier: farm.multiplier,
        lpLabel,
        tokenAddress,
        quoteTokenAddress,
        cakePrice,
        originalValue: farm.apr,
      },
      farm: {
        label: lpLabel,
        pid: farm.pid,
        token: farm.token,
        quoteToken: farm.quoteToken,
      },
      earned: {
        earnings: getBalanceNumber(new BigNumber(farm.userData.earnings)),
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm.liquidity,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,
    }

    return row
  })

  // console.log(rowData)
  return (
    <>
      <Header>
        <svg className="pc-svg" viewBox="0 0 381.54 82.55">
          <defs>
            <linearGradient
              id="lg_14"
              x1="2.55"
              y1="43.61"
              x2="71.49"
              y2="43.61"
              gradientTransform="translate(-1.2 5.64) rotate(-0.04)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fec300" />
              <stop offset="1" stopColor="#ffe812" />
            </linearGradient>
            <linearGradient id="lg_14-2" x1="11.98" y1="32.25" x2="53.33" y2="32.25" xlinkHref="#lg_14" />
            <linearGradient id="lg_14-3" x1="1.19" y1="43.57" x2="43.44" y2="43.57" xlinkHref="#lg_14" />
            <linearGradient id="lg_14-4" x1="1.29" y1="13.88" x2="71.73" y2="13.88" xlinkHref="#lg_14" />
            <linearGradient id="lg_14-5" x1="53.78" y1="47.64" x2="69.34" y2="47.64" xlinkHref="#lg_14" />
          </defs>
          <g>
            <g>
              <path fill={textColor} d="M137,71H124.8V43.52H103.71V71H91.42V5.2h12.29V32.55H124.8V5.2H137Z" />
              <path
                fill={textColor}
                d="M167.06,59.9a11.73,11.73,0,0,0,3.9-.54,6,6,0,0,0,2.44-1.55,5.44,5.44,0,0,0,1.27-2.35,15.45,15.45,0,0,0,.43-2.9V21.81h11.28V71H175.1V69.71a19.16,19.16,0,0,1-3.4.93,22.81,22.81,0,0,1-3.79.31H163a18.24,18.24,0,0,1-7.58-1.47,15.71,15.71,0,0,1-8.57-9.2,18.11,18.11,0,0,1-1.08-6.18V21.81h11.2V51.86a17.5,17.5,0,0,0,.27,3.17,5.53,5.53,0,0,0,1.16,2.55,5.87,5.87,0,0,0,2.43,1.7,11.3,11.3,0,0,0,4.1.62Z"
              />
              <path
                fill={textColor}
                d="M215.27,21.81a21.15,21.15,0,0,1,7.54,1.27,16.17,16.17,0,0,1,5.71,3.6,15.58,15.58,0,0,1,3.63,5.64,20.5,20.5,0,0,1,1.28,7.41V52.94a20.52,20.52,0,0,1-1.28,7.42,15.62,15.62,0,0,1-9.34,9.31A21.14,21.14,0,0,1,215.27,71h-3.94a21.09,21.09,0,0,1-7.53-1.28A16,16,0,0,1,198.08,66a15.52,15.52,0,0,1-3.59-5.68,21,21,0,0,1-1.24-7.42V5.2h11.36V23a23,23,0,0,1,7.57-1.23Zm-3.94,11.05a6.31,6.31,0,0,0-4.83,1.93,7.2,7.2,0,0,0-1.89,4.94V52.64a7.37,7.37,0,0,0,1.82,5.17,6.27,6.27,0,0,0,4.9,2h3.94a6.64,6.64,0,0,0,5-2,7.14,7.14,0,0,0,1.94-5.17V40a7.14,7.14,0,0,0-1.94-5.17,6.64,6.64,0,0,0-5-2Z"
              />
              <path
                fill={textColor}
                d="M241.77,5.2h30a14.09,14.09,0,0,1,6.1,1.35,14.91,14.91,0,0,1,4.95,3.75,18.63,18.63,0,0,1,3.32,5.56,18.39,18.39,0,0,1,1.24,6.72v31a18.3,18.3,0,0,1-1.24,6.76,18.85,18.85,0,0,1-3.32,5.53,15,15,0,0,1-4.95,3.74,14,14,0,0,1-6.1,1.36h-30Zm27,53.62a6,6,0,0,0,2.59-.58,6.82,6.82,0,0,0,2.09-1.55,7.08,7.08,0,0,0,1.39-2.28,8,8,0,0,0,.5-2.86v-27a7.83,7.83,0,0,0-.5-2.78,7.74,7.74,0,0,0-1.39-2.32,6.6,6.6,0,0,0-2.09-1.58,5.82,5.82,0,0,0-2.59-.58h-15V58.82Z"
              />
              <path
                fill={textColor}
                d="M294.77,37.34a19.57,19.57,0,0,1,1.36-5.87,14.75,14.75,0,0,1,3.24-4.95,15.39,15.39,0,0,1,5.29-3.44A19.56,19.56,0,0,1,312,21.81h5.8a18.52,18.52,0,0,1,7.57,1.43,15.4,15.4,0,0,1,5.37,3.82,16.39,16.39,0,0,1,3.2,5.41,17.73,17.73,0,0,1,1.09,6.1V71H307.6a13,13,0,0,1-5.72-1.2,12.53,12.53,0,0,1-4.17-3.21,13.57,13.57,0,0,1-2.55-4.71,18.85,18.85,0,0,1-.85-5.72,17.54,17.54,0,0,1,.89-5.64A13.16,13.16,0,0,1,297.75,46a11.61,11.61,0,0,1,4.09-3,13.54,13.54,0,0,1,5.53-1.08H323.9v-1a18.09,18.09,0,0,0-.27-3.2,6,6,0,0,0-1.08-2.59,5.33,5.33,0,0,0-2.36-1.7,11.24,11.24,0,0,0-4.09-.62h-2.4c-2.62,0-4.48.37-5.56,1.12a5.8,5.8,0,0,0-2.24,3.44Zm9.89,18.77a5.45,5.45,0,0,0,1,3.67A3,3,0,0,0,308,61H323.9V51.17H308a3,3,0,0,0-2.28,1.23A5.62,5.62,0,0,0,304.66,56.11Z"
              />
              <path
                fill={textColor}
                d="M363.38,21.81A21.35,21.35,0,0,1,371,23.08a16.21,16.21,0,0,1,5.72,3.6,15.11,15.11,0,0,1,3.59,5.64,21.17,21.17,0,0,1,1.24,7.41V52.94a21.19,21.19,0,0,1-1.24,7.42A15.52,15.52,0,0,1,376.71,66,16,16,0,0,1,371,69.67,21.34,21.34,0,0,1,363.38,71h-3.94a21.09,21.09,0,0,1-7.53-1.28A16,16,0,0,1,346.19,66a15.52,15.52,0,0,1-3.59-5.68,21,21,0,0,1-1.24-7.42V39.73a20.94,20.94,0,0,1,1.24-7.41,15.11,15.11,0,0,1,3.59-5.64,16.21,16.21,0,0,1,5.72-3.6,21.09,21.09,0,0,1,7.53-1.27Zm-3.94,11.05A6.94,6.94,0,0,0,352.33,40v12.6a6.94,6.94,0,0,0,7.11,7.18h3.94a6.91,6.91,0,0,0,5.1-2,7,7,0,0,0,2-5.17V40a7,7,0,0,0-2-5.17,6.91,6.91,0,0,0-5.1-2Z"
              />
              <path
                opacity="0"
                fill="url(#lg_14)"
                d="M70.32,45.25h0C70,55.92,47,66.26,42.13,68.33l-.8.33a.25.25,0,0,1-.19,0l-.4-.25L28.68,61a.2.2,0,0,1,0-.35,80.73,80.73,0,0,0,12-7.06c.4-.3.81-.6,1.19-.91,4.66-3.69,7.46-7.73,2.28-10.16a9.8,9.8,0,0,0-2.42-.71c-.35-.06-.7-.11-1.06-.14a4,4,0,0,0-.49,0c-10.42-.58-25,9.68-27.32,11.32a.2.2,0,0,1-.24,0l-.33-.2L2.88,46.87c-.12-.06-1.6-.67-1.49-.76a72.06,72.06,0,0,1,10.22-7.44c.61-.38,1.26-.75,1.93-1.13l12.52,6.84a.67.67,0,0,0,1-.53l0-12.06.89-.25.6-.15a47.46,47.46,0,0,1,16.2-1.45,42.13,42.13,0,0,1,5.43.8,44.59,44.59,0,0,1,5,1.38,49.64,49.64,0,0,1,4.9,2A24,24,0,0,1,68,39.41,8.33,8.33,0,0,1,70.32,45.25Z"
              />
              <path
                fill="url(#lg_14-2)"
                d="M34.67,8.1,12,22.06l-.62.38-.62.38.82,15.85.73,14.09.77,14.89a.62.62,0,0,0,.48-.59l0-12.83a.66.66,0,0,1,1-.54l12.27,6,.63-.3L38.58,45.92l1.65-4.29.49-1.25.57-1.48.13-.36.29-.73,3-7.87,7.39-19.15Zm-7.2,22.84a.19.19,0,0,0-.12.17.63.63,0,0,0-.3.52v.16l0,12.06a.67.67,0,0,1-1,.53L13.54,37.54h0a.61.61,0,0,1-.31-.52l0-13.8c2.76-2,21.1-14.79,31.25-10.4C54.63,17.59,32.43,28.59,27.47,30.94Z"
              />
              <path
                fill="url(#lg_14-3)"
                d="M42.3,81.94a.65.65,0,0,1-.64.61.89.89,0,0,1-.35-.08l-13.25-6.9a.6.6,0,0,1-.34-.54l0-14.5a.6.6,0,0,0-.33-.53l-.55-.27-12.27-6a.66.66,0,0,0-1,.54l0,12.83a.62.62,0,0,1-.48.59.76.76,0,0,1-.51-.06L.41,61a.6.6,0,0,1-.34-.54L0,16.44a.57.57,0,0,1,.1-.31A.66.66,0,0,1,1,15.92l11,6.14.83.46a.59.59,0,0,1,.32.53v.16l0,13.8a.61.61,0,0,0,.31.52h0l12.52,6.84a.67.67,0,0,0,1-.53l0-12.06v-.16a.63.63,0,0,1,.3-.52.69.69,0,0,1,.68,0l.51.29,12.55,7,.33.18a.64.64,0,0,1,.3.35.58.58,0,0,1,0,.19l0,2.72.14,10.87.21,15.66Z"
              />
              <path
                fill="url(#lg_14-4)"
                d="M70.41,16.68c-1,5.74-8.22,11.31-15.2,15.44a113.64,113.64,0,0,1-13.49,6.77l-.16.07a.27.27,0,0,1-.2,0l-.07,0-.42-.23L27.94,31.54l-.48-.26a.18.18,0,0,1-.11-.17.19.19,0,0,1,.12-.17c5-2.35,27.16-13.35,17-18.13-10.15-4.39-28.49,8.42-31.25,10.4l0,0a.21.21,0,0,1-.24,0l-1.49-.82L.2,16.27a.26.26,0,0,1-.1-.14A.15.15,0,0,1,.17,16C2.82,13.67,30.73-9.44,60.34,4.38,68.63,8.25,71.16,12.51,70.41,16.68Z"
              />
              <path
                fill="url(#lg_14-5)"
                d="M54.77,65.43l12.54-5.92a1.51,1.51,0,0,0,.87-1.36l0-15.76A1.5,1.5,0,0,0,66,41.06L53.41,47.71a1.52,1.52,0,0,0-.8,1.33l0,15A1.5,1.5,0,0,0,54.77,65.43Z"
              />
            </g>
          </g>
        </svg>
        <LogoIcon className="app-svg" width="50px" />
        {/* <Logo /> */}
        {/* <MyTitle>HubDao</MyTitle> */}
      </Header>
      <Content>DECENTRALIZED FINANCIAL ECOSYSTEM BASED ON GOVERNANCE. </Content>
      <Block>
        <BlockItem>
          <Earn>
            <div className="title">Earn up to </div>
            <div className="block">
              <div className="apy">1993% APY</div>
              <div className="Stake">In Stake HUB {'>'}</div>
            </div>
          </Earn>
          <Price>
            <div className="left">
              <p>HD Price : $10</p>
              <p>Clrculating supply : 1.392.391 HD</p>
              <p>Remaining Token to be mined : 19,203,193 </p>
              <p>Total Burned HD : 1,402,301 HD</p>
            </div>
            <div className="right">
              <p>Volume : $104,203,293</p>
              <p>Fee : $291,392</p>
            </div>
          </Price>
        </BlockItem>
        <BlockItem>
          <Tlv>
            <Echarts />
          </Tlv>
        </BlockItem>
        <BlockItem>
          <Pairs>
            <div className="title">
              <div className="font">{t("Pairs")}</div>
              <div className="right">2021-05-19 오후 10:00 기준</div>
            </div>
            <div className="table">
              <div className="table-body">
                <div className="head">
                  <div className="Stake">Stake</div>
                  <div className="APY">APR</div>
                  <div className="Action">Action</div>
                  <div className="Tokens">Tokens</div>
                </div>

                {rowData.map((item) => (
                  <div className="table-body-item" key={item.farm.label}>
                    <div className="mytitle">{item.farm.label}</div>
                    <div>{`${item.apr?.value}%`}</div>
                    <div className="button-info">
                      {/*  */}
                      <Link to={`/add/${item.farm.quoteToken.address[128]}/${item.farm.token.address[128]}`}>
                        <div className="Add">Add Liquidity</div>
                      </Link>
                      <Link to={`/swap/${item.farm.quoteToken.address[128]}/${item.farm.token.address[128]}`}>
                        <div className="Trade">Trade</div>
                      </Link>
                    </div>
                    <div className="curr">
                      <div className="curr1">
                        <img src={item.farm.quoteToken.logoURI} alt="" />
                      </div>
                      <div className="curr2">
                        <img src={item.farm.token.logoURI} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Pairs>
        </BlockItem>
      </Block>
    </>
  )
}

export default Dashboard
