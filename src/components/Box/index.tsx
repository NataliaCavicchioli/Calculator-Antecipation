import Form from "../Form";
import Preview from "../Preview";
import { Container } from "./styles";

const Box = () => {
  return (
    <Container>
      <div>
        <Form />
      </div>
      <div className="box--preview">
        <Preview />
      </div>
    </Container>
  );
};

export default Box;
