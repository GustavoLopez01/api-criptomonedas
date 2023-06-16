import styled from "@emotion/styled";

const Div = styled.div`
  background-color: #ce1919;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  padding: 25px;
  font-family: Lato, sans-serif;
`;

export const Error = ({children}) => {
  return <Div>{children}</Div>;
};
