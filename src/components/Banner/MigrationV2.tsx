import React from 'react'
import { Text, Flex, Box, ErrorIcon, Button } from '@pancakeswap-libs/uikit'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            ACTION REQUIRED for all LP token holders
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" mb="16px" bold>
          You must complete migration if you want to keep earning from any LP tokens that are staked in PancakeSwap
          farms.
        </Text>
        <Text color="white" mb="16px">
          All LPs will be migrated to a new, upgraded contract, PancakeSwap v1.5, from 01:00 on April 23 (UTC). Complete
          the migration by the above time to continue earning.
        </Text>
        <Button as={Link} to="/migrate">
          Migrate Now
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
