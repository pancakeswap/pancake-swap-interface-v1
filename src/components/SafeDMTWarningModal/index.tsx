import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { AlertTriangle } from 'react-feather'
import Modal from '../Modal'
import { AutoRow, RowBetween } from '../Row'
import { AutoColumn } from '../Column'

const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
`

const StyledWarningIcon = styled(AlertTriangle)`
  stroke: ${({ theme }) => theme.colors.binance};
`

export default function SafeDMTWarningModal({ isOpen, onConfirm }: { isOpen: boolean; onConfirm: () => void }) {
  const [understandChecked, setUnderstandChecked] = useState(false)
  const toggleUnderstand = useCallback(() => setUnderstandChecked((uc) => !uc), [])

  const handleDismiss = useCallback(() => null, [])
  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledWarningIcon />
            <Text>Notice for trading SafeDMT</Text>
          </AutoRow>
          <>
            <Text>
              To trade SafeDMT, you must click on the settings icon and{' '}
              <strong>set your slippage tolerance to 5% or more</strong>
            </Text>
            <Text>
              Also, <strong>the last digit of the desired amount of SafeDMT needs to be 1</strong>
            </Text>
            <Text>This is because otherwise the transaction may fail due to calculation issues</Text>
          </>
          <RowBetween>
            <div>
              <label htmlFor="understand-checkbox" style={{ cursor: 'pointer', userSelect: 'none' }}>
                <input
                  id="understand-safeDMTWarning"
                  type="checkbox"
                  className="understand-checkbox"
                  checked={understandChecked}
                  onChange={toggleUnderstand}
                />{' '}
                <Text as="span">I understand</Text>
              </label>
            </div>
            <Button
              id="confirm-safeDMTWarning"
              disabled={!understandChecked}
              variant="danger"
              style={{ width: '140px' }}
              onClick={() => {
                setUnderstandChecked(false)
                onConfirm()
              }}
            >
              Continue
            </Button>
          </RowBetween>
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}
