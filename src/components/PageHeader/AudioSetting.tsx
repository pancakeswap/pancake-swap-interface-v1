import React from 'react'
import { Box, Flex, Text, PancakeToggle, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import { useAudioModeManager } from 'state/user/hooks'

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{translateString(999, 'Audio')}</Text>
      </Flex>
      <Box>
        <PancakeToggle scale={isSm || isXs ? 'sm' : 'md'} checked={audioPlay} onChange={toggleSetAudioMode} />
      </Box>
    </Box>
  )
}

export default AudioSetting
