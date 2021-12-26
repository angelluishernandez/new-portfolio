import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 3px;
  }
`;
