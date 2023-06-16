import styled from "@emotion/styled";
import cripto from "./assets/cripto.png";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { Result } from "./components/Result";
import { Spinner } from "./components/Spinner";

const Header = styled.h1`
  font-family: Lato, sans-serif;
  color: white;
  text-align: center;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #2d3cea;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 50px;
`;

const Contenedor = styled.div`
  max-width: 100%;
  margin: 100px auto 0 auto;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    display: flex;
  }
`;

const App = () => {
  const [coins, setCoins] = useState({});
  const [dataCriptoCoin, setDataCriptoCoin] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const getDataCoinsSelected = async () => {
        setSpinner(true);
        setDataCriptoCoin({});
        const { coinsState, criptoCoinState } = coins;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoinState}&tsyms=${coinsState}`;

        const response = await fetch(URL);
        const { DISPLAY } = await response.json();

        setDataCriptoCoin(DISPLAY[criptoCoinState][coinsState]);
        setSpinner(false);
      };

      getDataCoinsSelected();
    }
  }, [coins]);

  return (
    <Contenedor>
      <Imagen src={cripto} />

      <div>
        <Header>Cotiza tus Criptomonedas</Header>
        <Form setCoins={setCoins} />

        {spinner ? <Spinner /> : false}
        {dataCriptoCoin.PRICE ? (
          <Result dataCriptoCoin={dataCriptoCoin} />
        ) : null}
      </div>
    </Contenedor>
  );
};

export default App;
