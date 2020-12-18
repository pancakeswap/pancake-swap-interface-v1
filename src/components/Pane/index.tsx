import styled from 'styled-components'

const Pane = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 16px;
  padding: 16px;
`

export default Pane
