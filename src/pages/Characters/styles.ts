import styled from 'styled-components'

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  align-items: center;
  justify-content: center;

  > img {
    width: 50%;
    padding: 1rem 0 6rem;
  }
`

export const InputsSearchContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const CharactersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 6rem 0;
`
