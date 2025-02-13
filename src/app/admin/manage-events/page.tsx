import { EventCards } from './components/EventsCard';
import { Button } from '@/components/ui/button';
import { getUserRoles } from '@/utils/functions/getRole';
import Link from 'next/link';

const Page = async () => {
  const role = await getUserRoles()
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {role === "super_admin" &&
        <Link href="/admin/manage-events/add-event">
          <Button className="mt-3 mb-4 adminButton p-6">Add Event</Button>
        </Link>
      }
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 font-sargento">
        Manage Events
      </h1>
      <EventCards role={role} />
    </div>
  );
};

export default Page;
