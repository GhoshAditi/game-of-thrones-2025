import { getEventsData } from '@/utils/functions';

export const populateEventDetails = async (set: any) => {
    set({ eventsLoading: true });
    const data = await getEventsData();
    set({ eventsData: data, eventsLoading: false });
};
