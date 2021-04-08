import React from 'react'
import styled from 'styled-components'
import { Input, Text, PancakeToggle, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import { useAudioModeManager } from 'state/user/hooks'

const StyledAudioSetting = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const Field = styled.div`
  align-items: center;
  display: inline-flex;

  & > ${Input} {
    max-width: 100px;
  }

  & > ${Text} {
    font-size: 14px;
    margin-left: 8px;
  }
`

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <StyledAudioSetting>
      <Label>
        <Text style={{ fontWeight: 600 }}>{translateString(999, 'Audio')}</Text>
      </Label>
      <Field>
        <PancakeToggle scale={isSm || isXs ? 'sm' : 'md'} checked={audioPlay} onChange={toggleSetAudioMode} />
      </Field>
    </StyledAudioSetting>
  )
}

export default AudioSetting
