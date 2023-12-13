import { Cycle } from "../../contexts/CyclesContexts";
import { CycleActionTypes } from "./actions";
import { produce } from "immer";

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case CycleActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.unshift(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case CycleActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId
        );
        if (currentCycleIndex < 0) {
          return state;
        }
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });

    case CycleActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId
        );
        if (currentCycleIndex < 0) {
          return state;
        }
        draft.cycles[currentCycleIndex].fineshedDate = new Date();
        draft.activeCycleId = null;
      });

    default:
      return state;
  }
}
