import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  padding: 2.5rem 2rem;
  gap: 1rem;
  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    padding: 1rem;
    background: ${({ theme }) => theme.colors['base-post']};
    > div {
      margin: 0 !important;
      padding: 0 !important;
      background: none !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
