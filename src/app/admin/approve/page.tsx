import EventsTable from './EventsTable';
import { Suspense } from 'react';
import TableSkeleton from './TableSkeleton';


export default async function EventsDashboard() {
  // Call the RPC function to fetch approval table data

  return (
    <div className="w-full p-4 bg-black">
      <h1 className="text-3xl font-sargento mb-4 text-white">
        Approve Registrations
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <EventsTable  />
      </Suspense>
    </div>
  );
}
