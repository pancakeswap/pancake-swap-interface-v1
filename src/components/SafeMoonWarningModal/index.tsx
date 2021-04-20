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

export default function SafeMoonWarningModal({ isOpen, onConfirm }: { isOpen: boolean; onConfirm: () => void }) {
  const [understandChecked, setUnderstandChecked] = useState(false)
  const toggleUnderstand = useCallback(() => setUnderstandChecked((uc) => !uc), [])

  const handleDismiss = useCallback(() => null, [])
  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledWarningIcon />
            <Text>Notice for trading SafeMoon</Text>
          </AutoRow>
          <>
            <Text>
              To trade SAFEMOON, you must click on the settings icon and{' '}
              <strong>set your slippage tolerance to 12%+</strong>
            </Text>
            <Text>This is because SafeMoon taxes a 10% fee on each transaction.</Text>
            <Text>• 5% fee = redistributed to all existing holders</Text>
            <Text>• 5% fee = used to add liquidity</Text>
          </>
          <RowBetween>
            <div>
              <label htmlFor="understand-checkbox" style={{ cursor: 'pointer', userSelect: 'none' }}>
                <input
                  id="understand-safeMoonWarning"
                  type="checkbox"
                  className="understand-checkbox"
                  checked={understandChecked}
                  onChange={toggleUnderstand}
                />{' '}
                <Text as="span">I understand</Text>
              </label>
            </div>
            <Button
              id="confirm-safeMoonWarning"
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
