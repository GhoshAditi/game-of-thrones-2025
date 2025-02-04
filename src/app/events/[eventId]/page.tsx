import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { events, getEventById } from '@/lib/events';
import EventDetails from '@/components/events/EventDetails';

export function generateStaticParams() {
  return events.map((event) => ({
    eventId: event.id,
  }));
}

export function generateMetadata({ 
  params 
}: { 
  params: { eventId: string } 
}): Metadata {
  const eventData = getEventById(params.eventId);
  return {
    title: eventData ? `${eventData.title} - Events` : 'Event Not Found',
    description: eventData ? `Details for ${eventData.title}` : ''
  };
}

export default function EventDetailsPage({ 
  params 
}: { 
  params: { eventId: string } 
}) {
  const eventData = getEventById(params.eventId);

  if (!eventData) {
    notFound();
  }

  return <EventDetails eventData={eventData} />;
}

export const dynamicParams = true;