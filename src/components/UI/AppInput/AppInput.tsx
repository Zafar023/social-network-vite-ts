// src/components/UI/AppInput/AppInput.tsx
import { SCAppInput } from "./AppInput.style";

type TOAppInput = {
  inputType: "tel" | "password";
  inputPlaceholder: string;
};

export const AppInput = ({ inputType, inputPlaceholder }: TOAppInput) => {
  return <SCAppInput type={inputType} placeholder={inputPlaceholder} />;
};
