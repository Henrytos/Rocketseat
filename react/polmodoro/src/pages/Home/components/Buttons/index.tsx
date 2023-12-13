import { ButtonHTMLAttributes, useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContexts";

const ButtonInitialNewCycle = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="submit"
    className="bg-green-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
    {...props}
  />
);
const ButtonFinalNewCycle = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="bg-red-500/80 text-gray-50 flex h-16 
            justify-center items-center rounded-md disabled:bg-green-500/20 disabled:cursor-not-allowed disabled:text-gray-300 transition-colors"
      {...props}
    />
  );
};

interface ButtonsProps {
  isSubmitDisabled: boolean;
}

export function Buttons({ isSubmitDisabled }: ButtonsProps) {
  const { activeCycle, interruptCycle } = useContext(CyclesContext);

  return (
    <>
      {activeCycle ? (
        <ButtonFinalNewCycle
          onClick={() => {
            interruptCycle();
          }}
        >
          Parar
        </ButtonFinalNewCycle>
      ) : (
        <ButtonInitialNewCycle disabled={isSubmitDisabled}>
          Começar
        </ButtonInitialNewCycle>
      )}
    </>
  );
}
