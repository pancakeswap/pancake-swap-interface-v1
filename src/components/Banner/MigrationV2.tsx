import React from 'react'
import { Link } from 'react-router-dom'
import { Text, Flex, Box, ErrorIcon, Button } from '@pancakeswap-libs/uikit'
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
        <Text color="warning" bold>
          You must complete migration if you want to keep earning from any PancakeSwap LP tokens and PancakeSwap farms.
        </Text>
        <Text color="white" mb="16px">
          All LPs will be migrated to a new, upgraded contract, over several hours starting from now.
        </Text>
        <Button as={Link} to="/migrate">
          Migrate Now
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
