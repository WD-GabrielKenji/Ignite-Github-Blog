import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.25rem;
  }
  h1 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    line-height: 130%;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors['base-span']};
      line-height: 0px;
      svg {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
