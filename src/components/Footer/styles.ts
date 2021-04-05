import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: rgb(6, 203, 254);
  margin-top: 45px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 20px;
  letter-spacing: 2px;
`
