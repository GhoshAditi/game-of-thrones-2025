
import { create } from 'zustand';
import { populateEventDetails } from '../actions';
import { EventsActionsType, EventsStateType } from '../types';

type EventsStore = EventsStateType & EventsActionsType;

const initialState: EventsStateType = {
    eventsData: [],
    eventsLoading: true,
};

export const useEvents = create<EventsStore>((set) => ({
    ...initialState,
    setEventsData: () => populateEventDetails(set),
}));
