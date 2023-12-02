import React, { createContext, useEffect, useReducer, useState } from "react";
import { cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";
import initialCycleAudio from "../assets/audios/click.mp3";
import fineshedCycleAudio from "../assets/audios/click.mp3";

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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });
  const audio = document.getElementById("audioCycle") as HTMLAudioElement;
  const audioFineshed = document.getElementById(
    "audioCycleFineshed"
  ) as HTMLAudioElement;

  function setAmountPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
    audioFineshed.play();
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
    audio.play();
  }
  function interruptCycle() {
    dispatch(interruptCurrentCycleAction());
    audio.play();
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);
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
      <audio id="audioCycle">
        <source src={initialCycleAudio} type="audio/mp3" />
      </audio>
      <audio src="audioCycleFineshed">
        <source src={fineshedCycleAudio} type="audio/mp3" />
      </audio>
      {children}
    </CyclesContext.Provider>
  );
}
