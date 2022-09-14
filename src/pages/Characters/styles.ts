import styled from "styled-components";

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
`;

export const InputsSearchContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const InputsSearch = styled.input`
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme["font-gray"]};
  background-color: ${(props) => props.theme.white};
`;

export const CharactersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 6rem 0;
`;

export const ButtonLoadMore = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 1px 2px 5px 1px #C0C2BE;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.buttonColor};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
