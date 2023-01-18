import { api } from "../services";
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IResult {
  1: string;
  15: string;
  30: string;
  90: string;
}

interface IAntecipationProviderData {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  installments: string;
  setInstallments: Dispatch<SetStateAction<string>>;
  percent: string;
  setPercent: Dispatch<SetStateAction<string>>;
  days?: Array<string>;
  setDays: Dispatch<SetStateAction<Array<string>>>;
  result: IResult;
}

interface IAntecipationProviderProps {
  children: ReactNode;
}

export const AntecipationContext = createContext<IAntecipationProviderData>(
  {} as IAntecipationProviderData
);

const AntecipationProvider = ({ children }: IAntecipationProviderProps) => {
  const [value, setValue] = useState("");
  const [installments, setInstallments] = useState("");
  const [percent, setPercent] = useState("");
  const [days, setDays] = useState([] as Array<string>);
  const [result, setResult] = useState({} as IResult);

  useEffect(() => {
    const data = {
      amount: value,
      installments: installments,
      mdr: percent,
    };

    if (value && installments && percent) {
      const teste = async () => {
        try {
          const res = await api.post("", data);
          setResult(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      teste();
    }
  }, [installments, value, percent]);

  return (
    <AntecipationContext.Provider
      value={{
        value,
        setValue,
        installments,
        setInstallments,
        percent,
        setPercent,
        days,
        setDays,
        result,
      }}
    >
      {children}
    </AntecipationContext.Provider>
  );
};

export default AntecipationProvider;
