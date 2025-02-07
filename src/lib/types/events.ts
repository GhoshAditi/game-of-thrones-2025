export interface Link {
  title: string
  url: string
}

export interface Coordinator {
  name: string
  phone: string
}

export interface events {
  id: string;
  name: string;
  registration_fees: string;
  prize_pool: string;
  image_url: string;
  min_team_size: number;
  max_team_size: number;
  schedule: string;
  description: string;
  rules: string;
  coordinators: {
    name: string;
    phone: string;
  }[];
  links: {
    title: string;
    url: string;
  }[];
  registered?: boolean;
}


// The state interface for events.
export interface EventsStateType {
  eventsData: events[];
  eventsLoading: boolean;
}

// The actions interface for events.
export interface EventsActionsType {
  setEventsData: () => void;
}
