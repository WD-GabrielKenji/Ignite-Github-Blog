import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
      line-height: 130%;
    }
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: auto;
    gap: 1.5rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
