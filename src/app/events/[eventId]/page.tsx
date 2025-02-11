import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventDetails from '@/components/events/EventDetails';
import { getEventByName } from '@/utils/functions/events/getEvent';

// export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { eventId: string };
}): Promise<Metadata> {
  // Await the RPC call to get the event data from the database
  const eventData = await getEventByName(decodeURIComponent(params.eventId));

  return {
    title: eventData ? `${eventData.name} - Events` : 'Event Not Found',
    description: eventData ? `Details for ${eventData.name}` : '',
  };
}

export default function EventDetailsPage({
  params,
}: {
  params: { eventId: string };
}) {
  if (!params.eventId) {
    notFound();
  }

  return <EventDetails eventname={decodeURIComponent(params.eventId)} />;
}
