'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { RulesDialog } from '@/components/events/RulesDialog';
import { parseWithQuillStyles } from '@/utils/functions/quilParser';
import { useEvents } from '@/lib/stores';
import { Skeleton } from '@/components/ui/skeleton';

interface EventCardsProps {
  onDeleteEvent?: (id: string) => void;
}

function EventCardSkeleton() {
  return (
    <Card className="bg-[#1e2432] text-white border-gray-700 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow p-8 w-[70%]">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-gray-700" />
            <Skeleton className="h-4 w-1/2 mt-2 bg-gray-700" />
          </CardHeader>
          <CardContent className="py-6">
            <Skeleton className="h-20 w-full bg-gray-700" />
            <div className="space-y-3 mt-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-4 w-1/3 bg-gray-700" />
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            <Skeleton className="h-6 w-24 bg-gray-700" />
            <Skeleton className="h-6 w-32 bg-gray-700" />
            <div className="flex space-x-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-10 w-24 bg-gray-700" />
              ))}
            </div>
          </CardFooter>
        </div>
        <div className="md:w-[30%] relative min-h-[300px] md:min-h-full">
          <Skeleton className="absolute inset-0 w-full h-full bg-gray-700" />
        </div>
      </div>
    </Card>
  );
}

export function EventCards({ onDeleteEvent }: EventCardsProps) {
  onDeleteEvent = onDeleteEvent || (() => {});
  const { eventsData, eventsLoading, updateRegisterStatus } = useEvents();

  if (eventsLoading) {
    return (
      <div className="space-y-6 w-full max-w-6xl">
        {[1, 2, 3].map((i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full max-w-6xl">
      {eventsData.map((event) => (
        <Card
          key={event.id}
          className="bg-[#1e2432] text-white border-gray-700 w-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow p-8 w-[70%]">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">
                  {event.name}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {parseWithQuillStyles(event.schedule)}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <div className="mb-6 text-gray-100 leading-relaxed">
                  {parseWithQuillStyles(event.description)}
                </div>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Fees:</span>{' '}
                    {event.registration_fees}
                  </p>
                  <p>
                    <span className="font-semibold">Prize:</span>{' '}
                    {event.prize_pool}
                  </p>
                  <p>
                    <span className="font-semibold">Team Size:</span>{' '}
                    {event.min_team_size === event.max_team_size
                      ? event.min_team_size
                      : `${event.min_team_size} - ${event.max_team_size}`}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <Badge
                  variant={event.reg_status ? 'default' : 'secondary'}
                  className="mb-2"
                >
                  {event.reg_status
                    ? 'Registration Open'
                    : 'Registration Closed'}
                </Badge>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={event.reg_status}
                    onCheckedChange={() =>
                      updateRegisterStatus(event.id, !event.reg_status)
                    }
                    className="data-[state=checked]:bg-green-500"
                  />
                  <span className="text-sm text-muted-foreground">
                    Registration Open
                  </span>
                </div>
                <div className="flex space-x-3">
                  <RulesDialog rules={event.rules} />
                  <Button
                    variant="outline"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    asChild
                  >
                    <Link href={`/admin/manage-events/${event.id}`}>
                      Edit Event
                    </Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        className="bg-red-500 hover:bg-red-600"
                      >
                        Delete Event
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-[#1e2432] text-white border-gray-700">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300">
                          This action cannot be undone. This will permanently
                          delete the event and remove all data associated with
                          it.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 text-white hover:bg-red-700"
                          onClick={() => onDeleteEvent(event.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardFooter>
            </div>
            <div className="md:w-[30%] relative min-h-[300px] md:min-h-full">
              <img
                src={event.image_url || '/placeholder.svg'}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
