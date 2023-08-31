import { createContext } from "react";

const EVENT_COLORS = [ "red", "green", "blue" ] as const 

type Event = {
    id: string
    name: string
    color: (typeof EVENT_COLORS)[number]
}

type EventsContext = {
    events: Event[]
}

const Context = createContext <EventsContext | null>(null) 