import styled from 'styled-components'

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;

  img {
    width: max-content;
  }

  input {
    width: 40vw;
  }
`

export const ListOfEpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
