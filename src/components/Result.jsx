import styled from "@emotion/styled";

const Container = styled.div`
  font-family: Lato, sans-serif;
  color: white;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 25px;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 120px;
`;

export const Result = ({ dataCriptoCoin }) => {
  console.log(dataCriptoCoin);
  const { HIGHDAY, LOWDAY, PRICE, CHANGECT224HOUR, LASTUPDATE, IMAGEURL } =
    dataCriptoCoin;

  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image Crypto" />
      <div>
        <Title>
          Precio de : <span>{PRICE}</span>
        </Title>
        <Text>
          Precio mas alto del día : <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio mas bajo del día : <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas : <span>{CHANGECT224HOUR}</span>
        </Text>
        <Text>
          Última actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};
