import { EventData, generateMockData } from './functions';
import EventsTable from './EventsTable';
import { Suspense } from 'react';
import TableSkeleton from './TableSkeleton';

export default async function EventsDashboard() {
  const mockData: EventData[] = await generateMockData(200);

  return (
    <div className="w-full p-4 bg-black">
      <h1 className="text-3xl font-sargento  mb-4 text-white">
        Approve Registrations
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <EventsTable initialData={mockData} />
      </Suspense>
    </div>
  );
}
