export interface TeamMember {
  name: string;
  email: string;
  phone: string;
  role: string;
}

export interface EventData {
  id: number;
  slNo: number;
  paymentStatus: 'Verified' | 'Not Verified';
  eventName: string;
  type: string;
  teamName: string;
  college: string;
  name: string;
  teamLeadPhone: string;
  teamLeadEmail: string;
  transactionId: string;
  registeredAt: string;
  teamMembers: TeamMember[];
}

function generatePhoneNumber() {
  return `+91 ${Math.floor(Math.random() * 9000000000 + 1000000000)}`;
}

function generateEmail(name: string) {
  return `${name.toLowerCase().replace(' ', '.')}@example.com`;
}

function generateTransactionId() {
  return `TXN_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export async function generateMockData(count: number): Promise<EventData[]> {
  // await new Promise((resolve) => setTimeout(resolve, 300)) // 2 second delay
  const eventNames = [
    'Hackathon',
    'Coding Contest',
    'Design Challenge',
    'Quiz Competition',
  ];
  const types = ['solo', 'duo', 'team'];
  const colleges = ['MIT', 'Stanford', 'Harvard', 'Caltech', 'Oxford'];
  const paymentStatuses: ('Verified' | 'Not Verified')[] = [
    'Verified',
    'Not Verified',
  ];
  const roles = ['Leader', 'Developer', 'Designer', 'Tester'];

  return Array.from({ length: count }, (_, i) => {
    const teamName = `Team ${Math.floor(Math.random() * 1000)}`;
    const teamSize = Math.floor(Math.random() * 3) + 2; // 2-4 members

    const teamMembers: TeamMember[] = Array.from(
      { length: teamSize },
      (_, j) => ({
        name: `Member ${j + 1} of ${teamName}`,
        email: generateEmail(`member${j + 1}.${teamName}`),
        phone: generatePhoneNumber(),
        role: roles[Math.floor(Math.random() * roles.length)],
      })
    );

    return {
      id: i + 1,
      slNo: i + 1,
      paymentStatus:
        paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
      eventName: eventNames[Math.floor(Math.random() * eventNames.length)],
      type: types[Math.floor(Math.random() * types.length)],
      teamName: teamName,
      college: colleges[Math.floor(Math.random() * colleges.length)],
      name: `Team Lead ${i + 1}`,
      teamLeadPhone: generatePhoneNumber(),
      teamLeadEmail: generateEmail(`lead.${teamName}`),
      transactionId: generateTransactionId(),
      registeredAt: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toLocaleString(),
      teamMembers,
    };
  });
}
