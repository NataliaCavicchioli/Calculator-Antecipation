import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 60%;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;

  .box--preview {
    background-color: #d1dce32e;
    min-width: 40%;
  }
  @media screen and (max-width: 800px) {
    height: 80%;
    width: 80%;
    flex-direction: column;

    .box--preview {
      height: 50%;
    }
  }
`;
