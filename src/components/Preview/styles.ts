import styled from "styled-components";

export const ContainerPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  color: var(--blue-text);
  height: 100%;

  h3 {
    font-style: italic;
    font-size: 22px;
  }

  h3:after {
    content: "";
    display: inline-block;
    height: 0.5em;
    width: 100%;
    border-top: 0.5px solid var(--blue-text);
  }

  .info--preview {
    display: flex;
    gap: 5px;

    span {
      font-weight: 600;
    }
  }
`;
