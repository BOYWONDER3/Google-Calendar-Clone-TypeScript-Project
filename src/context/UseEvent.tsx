import { Context } from "./Events";
import { useContext } from "react";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export function useEvents() {
    const value = useContext(Context);
    if (value == null) {
      throw new Error("useEvents must be within an EventsProvider");
    }
    return value;
  }

  useContext