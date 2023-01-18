import { ContainerForm } from "./styles";
import { useContext } from "react";
import { AntecipationContext } from "../../contexts/AntecipationContext";

const Form = () => {
  const {
    value,
    setValue,
    installments,
    setInstallments,
    percent,
    setPercent,
  } = useContext(AntecipationContext);

  return (
    <ContainerForm>
      <h1>Simule sua antecipação</h1>
      <label>
        {" "}
        Informe o valor da venda *
        <input
          placeholder="Digite aqui"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </label>
      <label>
        {" "}
        Em quantas parcelas
        <input
          placeholder="Digite aqui"
          value={installments}
          onChange={(event) => setInstallments(event.target.value)}
        />
      </label>
      <p>Máximo de 12 parcelas</p>
      <label>
        {" "}
        Informe o percentual de MDR
        <input
          placeholder="Digite aqui"
          value={percent}
          onChange={(event) => setPercent(event.target.value)}
        />
      </label>
    </ContainerForm>
  );
};

export default Form;
