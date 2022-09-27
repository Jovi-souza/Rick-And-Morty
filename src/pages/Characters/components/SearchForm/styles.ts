import styled from 'styled-components'

export const InputsSearchContainer = styled.form`
  display: flex;
  gap: 3rem;

  button {
    padding: 0 1rem;

    color: ${(props) => props.theme.buttonColor};
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme['font-gray']};
    border-radius: 5px;

    cursor: pointer;
  }
`
