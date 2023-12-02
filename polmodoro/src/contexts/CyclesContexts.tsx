import React, { createContext, useReducer, useState } from "react";
import { cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  fineshedDate?: Date;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  interruptCycle: () => void;
  setAmountPassed: (seconds: number) => void;
  createNewCycle: (data: NewCycleData) => void;
}
export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextsProviderProps {
  children: React.ReactNode;
}

interface NewCycleData {
  task: string;
  minutesAmount: number;
}

export function CyclesContextsProvider({
  children,
}: CyclesContextsProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const { cycles, activeCycleId } = cyclesState;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setAmountPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }
  function createNewCycle(data: NewCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    };
    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }
  function interruptCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setAmountPassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
