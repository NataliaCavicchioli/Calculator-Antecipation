import { ContainerPreview } from "./styles";
import { useContext } from "react";
import { AntecipationContext } from "../../contexts/AntecipationContext";

const Preview = () => {
  const { result } = useContext(AntecipationContext);
  return (
    <ContainerPreview>
      <h3>Você receberá:</h3>
      <div className="info--preview">
        <p>Amanhã:</p>
        <span>
          R${" "}
          {result["1"] ? Number(result["1"]).toFixed(2).replace(".", ",") : 0.0}
        </span>
      </div>
      <div className="info--preview">
        <p>Em 15 dias:</p>
        <span>
          R${" "}
          {result["15"]
            ? Number(result["15"]).toFixed(2).replace(".", ",")
            : 0.0}
        </span>
      </div>
      <div className="info--preview">
        <p>Em 30 dias:</p>
        <span>
          R${" "}
          {result["30"]
            ? Number(result["30"]).toFixed(2).replace(".", ",")
            : 0.0}
        </span>
      </div>
      <div className="info--preview">
        <p>Em 90 dias:</p>
        <span>
          R${" "}
          {result["90"]
            ? Number(result["90"]).toFixed(2).replace(".", ",")
            : 0.0}
        </span>
      </div>
    </ContainerPreview>
  );
};

export default Preview;
