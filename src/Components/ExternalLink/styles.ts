import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  display: flex;
  align-items: center;
  height: 19px;
  gap: 0.5rem;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  transition: 0.4s;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }
`
