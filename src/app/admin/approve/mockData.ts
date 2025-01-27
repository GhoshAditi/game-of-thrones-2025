interface TeamMember {
  name: string;
  phoneNumber: string;
}

interface EventRegistration {
  serialNumber: number;
  paymentStatus: boolean;
  eventName: string;
  type: 'team' | 'solo';
  teamName: string | null;
  collegeName: string;
  name: string;
  teamLeadNumber: string | null;
  transactionId: string | null;
  members: TeamMember[];
  registeredAt: Date;
}

export const generateEventRegistrations = (
  count: number
): EventRegistration[] => {
  const events = [
    'Code Blast',
    'Robo War',
    'HackNova',
    'ByteBattle',
    'TechTonic',
    'Cyber Sprint',
    'Data Dive',
    'AI Arena',
  ];

  const colleges = [
    'Indian Institute of Technology Delhi',
    'National Institute of Technology Karnataka',
    'Birla Institute of Technology and Science',
    'Indian Institute of Science',
    'Delhi Technological University',
    'Vellore Institute of Technology',
    'Manipal Institute of Technology',
    'Indian Statistical Institute',
  ];

  const firstNames = [
    'Aarav',
    'Anika',
    'Vihaan',
    'Sanya',
    'Reyansh',
    'Diya',
    'Arjun',
    'Myra',
    'Advait',
    'Prisha',
  ];
  const lastNames = [
    'Sharma',
    'Verma',
    'Patel',
    'Singh',
    'Kumar',
    'Gupta',
    'Malhotra',
    'Reddy',
    'Choudhary',
    'Mehta',
  ];

  const getRandomName = () => {
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  };

  const getRandomPhoneNumber = () => {
    return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
  };

  const registrations: EventRegistration[] = [];

  for (let i = 0; i < count; i++) {
    const isTeam = Math.random() > 0.5;
    const paymentVerified = Math.random() > 0.3;
    const eventName = events[Math.floor(Math.random() * events.length)];

    const registration: EventRegistration = {
      serialNumber: i + 1,
      paymentStatus: paymentVerified,
      eventName,
      type: isTeam ? 'team' : 'solo',
      teamName: isTeam
        ? `${['Cyber', 'Tech', 'Data', 'Code', 'AI'][Math.floor(Math.random() * 5)]} ${
            ['Warriors', 'Masters', 'Pioneers', 'Ninjas', 'Wizards'][
              Math.floor(Math.random() * 5)
            ]
          } Team`
        : null,
      collegeName: colleges[Math.floor(Math.random() * colleges.length)],
      name: getRandomName(),
      teamLeadNumber: isTeam ? getRandomPhoneNumber() : null,
      transactionId: paymentVerified
        ? `TXN${Math.random().toString(36).substr(2, 12).toUpperCase()}`
        : null,
      members: [],
      registeredAt: new Date(
        Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
      ),
    };

    if (isTeam) {
      const memberCount = Math.floor(Math.random() * 4) + 1;
      for (let j = 0; j < memberCount; j++) {
        registration.members.push({
          name: getRandomName(),
          phoneNumber: getRandomPhoneNumber(),
        });
      }
    }

    registrations.push(registration);
  }

  return registrations;
};
