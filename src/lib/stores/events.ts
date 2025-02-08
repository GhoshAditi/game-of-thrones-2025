import { create } from 'zustand';
import { populateEventDetails } from '../actions';
import { EventsActionsType, EventsStateType } from '../types';

type EventsStore = EventsStateType & EventsActionsType 

const initialState: EventsStateType = {
    eventsData: [],
    eventsLoading: true,
};

export const useEvents = create<EventsStore>((set, get) => ({
    ...initialState,
    setEventsData: () => populateEventDetails(set),
    markEventAsRegistered: (eventId: string) =>
        set((state) => ({
            eventsData: state.eventsData.map((event) =>
                event.id === eventId ? { ...event, registered: true } : event
            ),
        })),
}));
