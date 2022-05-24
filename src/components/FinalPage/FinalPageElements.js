import styled from "styled-components";

export const FinalPageContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const FinalPageContent = styled.div`
  z-index: 1;
  color: red;
  width: 100%;
  /* max-width: 1500px; */
  /* position: absolute; */
  padding: 8px 24px;
  /* flex-direction: row; */
  /* align-items: center; */
`;

export const InputForm = styled.form`
  margin-top: 0px;
  color: #fff;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
