import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.85rem;
    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    }
    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
    }
  }
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['base-input']};
    transition: 0.4s;
    color: ${({ theme }) => theme.colors['base-text']};
    &:focus {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
