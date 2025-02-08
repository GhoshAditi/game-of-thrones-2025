import { create } from 'zustand';
import { populateEventDetails } from '../actions';
import { EventsActionsType, EventsStateType } from '../types';
import { update_and_populate, updateRegisterStatus } from '../actions/events';

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
    updateEventsData: (id: string, data: any) => update_and_populate(set, id, data),
    updateRegisterStatus: (id: string, status: boolean) => updateRegisterStatus(set, id, status),
}));
