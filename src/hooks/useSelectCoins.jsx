import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  font-size: 25px;
  display: block;
  margin-top: 10px;
`;

const Select = styled.select`
  font-size: 15px;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

export const useSelectCoins = (label, options = []) => {
  const [state, setState] = useState("");

  const SelectCoins = () => {
    return (
      <>
        <Label>{label}</Label>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">-- Seleccione una opción --</option>

          {options.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </>
    );
  };

  return [state, SelectCoins];
};
