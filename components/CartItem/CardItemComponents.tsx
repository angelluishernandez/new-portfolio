import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    :first-child {
      width: 10%;
    }
    :nth-child(2) {
      width: 40%;
      text-align: left;
    }
    :nth-child(3) {
      width: 25%;
      text-align: center;
    }
    :nth-child(4) {
      width: 25%;
      text-align: right;
    }
  }
`;
