import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;

  box-shadow: 1px 2px 5px 1px #C0C2BE;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 4rem;

  li {
    font: 1.75rem bolder;
    a {
      color: ${(props) => props.theme.black};
    }
  }
`;