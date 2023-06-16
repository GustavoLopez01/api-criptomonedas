import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSelectCoins } from "../hooks/useSelectCoins";
import { coins } from "../db/index";
import {Error} from "./Error";

const InputButton = styled.input`
  border: none;
  width: 100%;
  background-color: #005bb7;
  color: #fff;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 10px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #083868;
    cursor: pointer;
  }
`;

export const Form = ({setCoins}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [coinsState, SelectCoins] = useSelectCoins("Elige tu Moneda", coins);
  const [criptoCoinState, SelectCriptoCoins] = useSelectCoins(
    "Elige tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const getDataApi = async () => {
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const response = await fetch(URL);
      const { Data } = await response.json();

      const arrCriptos = Data.map(({ CoinInfo }) => {
        const { Name, FullName } = CoinInfo;
        return { id: Name, name: FullName };
      });

      setCriptos(arrCriptos);
    };

    getDataApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([coinsState, criptoCoinState].includes("")) {
      setError(true);
      return;
    }

    setError(false)
    setCoins({coinsState, criptoCoinState})
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />

        <SelectCriptoCoins />

        <InputButton value="Consultar Datos" type="submit" />
      </form>
    </>
  );
};
