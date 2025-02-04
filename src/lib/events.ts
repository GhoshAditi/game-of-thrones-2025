export interface EventData {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    month: string;
    registrationFee: string;
    prizePool: string;
    coordinators: string[];
    imageId: string;
  }
  
  export const events: EventData[] = [
    {
      id: 'BADMINTON',
      title: 'BADMINTON',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹500/- (Team)',
      prizePool: '₹5000/-',
      coordinators: ['John Doe', 'Jane Smith'],
      imageId: 'BADMINTON',
    },
    {
        id: 'CRICKET',
        title: 'CRICKET',
        subtitle: 'TOURNAMENT',
        date: '14TH 15TH',
        month: 'FEBRUARY 2025',
        registrationFee: '₹700/- (Team)',
        prizePool: '₹7000/-',
        coordinators: ['Rahul Sharma', 'Amit Verma'],
        imageId: 'CRICKET',
      },
    {
      id: 'FOOTBALL',
      title: 'FOOTBALL',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹1000/- (Team)',
      prizePool: '₹10000/-',
      coordinators: ['Alex Johnson', 'Emily Davis'],
      imageId: 'FOOTBALL',
    },
    {
      id: 'CHESS',
      title: 'CHESS',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹200/- (Individual)',
      prizePool: '₹2000/-',
      coordinators: ['Mark Taylor', 'Sophia Wilson'],
      imageId: 'CHESS',
    },
    {
      id: 'TUGOFWAR',
      title: 'TUG OF WAR',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹600/- (Team)',
      prizePool: '₹6000/-',
      coordinators: ['Chris Brown', 'Laura Green'],
      imageId: 'TUG-OF-WAR',
    },
    {
      id: 'HANDBALL',
      title: 'HANDBALL',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹800/- (Team)',
      prizePool: '₹8000/-',
      coordinators: ['Michael Scott', 'Pam Beesly'],
      imageId: 'HANDBALL',
    },
    {
      id: 'KABADDI',
      title: 'KABADDI',
      subtitle: 'TOURNAMENT',
      date: '14TH 15TH',
      month: 'FEBRUARY 2025',
      registrationFee: '₹700/- (Team)',
      prizePool: '₹7000/-',
      coordinators: ['Rahul Sharma', 'Amit Verma'],
      imageId: 'KABADDI',
    },
  ];
  
  export const getEventById = (id: string) => {
    return events.find(event => event.id === id);
  };