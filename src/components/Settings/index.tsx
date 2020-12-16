import React, { useRef, useContext, useState } from 'react'
import { Settings, X } from 'react-feather'
import styled from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import {
  useUserSlippageTolerance,
  useExpertModeManager,
  useUserDeadline,
  useAudioModeManager
} from '../../state/user/hooks'
import TransactionSettings from '../TransactionSettings'
import { RowFixed, RowBetween } from '../Row'
import { TYPE } from '../Shared'
import Toggle from '../Toggle'
import { ThemeContext } from 'styled-components'
import { AutoColumn } from '../Column'
import { useSettingsMenuOpen, useToggleSettingsMenu } from '../../state/application/hooks'
import { Text } from 'rebass'
import Modal from '../Modal'
import TranslatedText from '../TranslatedText'

const StyledMenuIcon = styled(Settings)`
  height: 20px;
  width: 20px;

  > * {
    stroke: ${({ theme }) => theme.colors.text};
  }
`

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.colors.text};
  }
`

const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.tertiary};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
  }

  svg {
    margin-top: 2px;
  }
`
const EmojiWrapper = styled.div`
  position: absolute;
  bottom: -6px;
  right: 0px;
  font-size: 14px;
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 20.125rem;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);

  border: 1px solid ${({ theme }) => theme.colors.tertiary};

  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaQueries.sm}
    min-width: 18.125rem;
    right: -46px;
  }
`

const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 20px;
`

export default function SettingsTab() {
  const node = useRef<HTMLDivElement>()
  const open = useSettingsMenuOpen()
  const toggle = useToggleSettingsMenu()

  const theme = useContext(ThemeContext)
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()

  const [deadline, setDeadline] = useUserDeadline()

  const [expertMode, toggleExpertMode] = useExpertModeManager()

  const [audioMode, toggleSetAudioMode] = useAudioModeManager()

  // show confirmation view before turning on
  const [showConfirmation, setShowConfirmation] = useState(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <Modal isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxHeight={100}>
        <ModalContentWrapper>
          <AutoColumn gap="lg">
            <RowBetween style={{ padding: '0 2rem' }}>
              <div />
              <Text fontWeight={500} fontSize={20}>
                Are you sure?
              </Text>
              <StyledCloseIcon onClick={() => setShowConfirmation(false)} />
            </RowBetween>
            <Break />
            <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
              <Text fontWeight={500} fontSize={20}>
                Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result
                in bad rates and lost funds.
              </Text>
              <Text fontWeight={600} fontSize={20}>
                ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.
              </Text>
              <Button
                variant="danger"
                onClick={() => {
                  if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === 'confirm') {
                    toggleExpertMode()
                    setShowConfirmation(false)
                  }
                }}
              >
                <Text fontSize={20} fontWeight={500} id="confirm-expert-mode">
                  Turn On Expert Mode
                </Text>
              </Button>
            </AutoColumn>
          </AutoColumn>
        </ModalContentWrapper>
      </Modal>
      <StyledMenuButton onClick={toggle} id="open-settings-dialog-button">
        <StyledMenuIcon />
        {expertMode && (
          <EmojiWrapper>
            <span role="img" aria-label="wizard-icon">
              🧙
            </span>
          </EmojiWrapper>
        )}
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <AutoColumn gap="md" style={{ padding: '1rem' }}>
            <Text fontWeight={600} fontSize={14}>
              <TranslatedText translationId={86}>Transaction Settings</TranslatedText>
            </Text>
            <TransactionSettings
              rawSlippage={userSlippageTolerance}
              setRawSlippage={setUserslippageTolerance}
              deadline={deadline}
              setDeadline={setDeadline}
            />
            <Text fontWeight={600} fontSize={14}>
              <TranslatedText translationId={94}>Interface Settings</TranslatedText>
            </Text>

            <RowBetween>
              <RowFixed>
                <TYPE.black fontWeight={400} fontSize={14} color={theme.colors.textSubtle}>
                  <TranslatedText translationId={96}>Toggle Audio Mode</TranslatedText>
                </TYPE.black>
              </RowFixed>
              <Toggle isActive={audioMode} toggle={toggleSetAudioMode} />
            </RowBetween>
          </AutoColumn>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
