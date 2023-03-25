import styled from 'styled-components'

import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  img {
    margin-bottom: 5rem;
  }
`
