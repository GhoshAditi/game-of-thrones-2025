'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper } from '../common/Wrapper';
import { useEvents } from '@/lib/stores';
import { RulesDialog } from './RulesDialog';
// import { parseWithQuillStyles } from "@/utils/functions/quilParser";
import { SoloEventRegistration } from './EventRegistrationDialog';
import { TeamEventRegistration } from './TeamEventRegitration';
import { useUser } from '@/lib/stores';
import { login } from '@/utils/functions/auth/login';
import { toast } from 'sonner';

import parse from 'html-react-parser';
import { cn } from '@/lib/utils';

export const quillStyles: Record<string, string> = {
  p: 'mb-4 text-base text-gray-100 font-medium',
  h1: 'mt-6 mb-2 text-3xl font-bold text-white',
  h2: 'mt-5 mb-2 text-2xl font-bold text-white',
  h3: 'mt-4 mb-2 text-xl font-bold text-white',
  h4: 'mt-3 mb-2 text-lg font-bold text-white',
  h5: 'mt-2 mb-2 text-base font-bold text-white',
  h6: 'mt-1 mb-2 text-sm font-bold text-white',
  strong: 'font-bold !text-purple-300',
  em: 'italic text-gray-100',
  u: 'underline text-gray-100',
  a: 'text-purple-300 hover:underline hover:text-purple-200',
  blockquote: 'border-l-4 border-purple-400 pl-4 italic text-gray-100 my-4',
  ul: 'list-disc pl-6 mb-4 space-y-2',
  ol: 'list-decimal pl-6 mb-4 space-y-2',
  li: 'text-gray-100',
  pre: 'bg-gray-800 p-4 rounded text-sm overflow-x-auto my-4 text-gray-100',
  code: 'bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-purple-300',
  img: 'max-w-full h-auto my-4',
};

export const parseWithQuillStyles = (html: string) => {
  return parse(html, {
    replace: (domNode: any) => {
      if (domNode.type === 'tag') {
        const tagName = domNode.name.toLowerCase();
        if (quillStyles[tagName]) {
          const existingClass = domNode.attribs?.class || '';
          const newClass = cn(existingClass, quillStyles[tagName]);
          domNode.attribs = { ...domNode.attribs, class: newClass };
          return domNode;
        }
      }
    },
  });
};

const eventIcons: Record<string, string> = {
  CRICKET: '/icons/cricket.svg',
  BADMINTON: '/icons/badminton.svg',
  FOOTBALL: '/icons/football.svg',
  CHESS: '/icons/chess.svg',
  TUGOFWAR: '/icons/tow.svg',
  KABADDI: '/icons/kabaddi.svg',
  HANDBALL: '/icons/handball.svg',
  CARROM: '/icons/carrom.svg',
  TENNNIS: '/icons/tt.svg',
};

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-8">
    {/* Event Title Skeleton */}
    <div className="w-48 h-10 bg-gray-700 rounded mx-auto" />

    {/* Grid Layout Skeleton */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Column - Image and Buttons */}
      <div className="flex flex-col items-center space-y-6">
        {/* Image Skeleton */}
        <div className="w-full md:w-[28rem] h-[30rem] bg-gray-700 rounded-lg" />

        {/* Buttons Skeleton */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-32 h-10 bg-gray-700 rounded" />
          <div className="w-32 h-10 bg-gray-700 rounded" />
          <div className="w-32 h-10 bg-gray-700 rounded" />
        </div>
      </div>

      {/* Right Column - Event Details Skeleton */}
      <div className="space-y-6">
        {/* Registration Fee Skeleton */}
        <div className="w-64 h-6 bg-gray-700 rounded" />

        {/* Schedule Skeleton */}
        <div className="w-72 h-6 bg-gray-700 rounded" />

        {/* Coordinators Skeleton */}
        <div className="space-y-3">
          <div className="w-48 h-6 bg-gray-700 rounded" />
          <div className="w-64 h-6 bg-gray-700 rounded" />
          <div className="w-56 h-6 bg-gray-700 rounded" />
        </div>

        {/* Prize Pool Skeleton */}
        <div className="w-56 h-6 bg-gray-700 rounded" />

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="w-48 h-6 bg-gray-700 rounded" />
          <div className="w-full h-4 bg-gray-700 rounded" />
          <div className="w-full h-4 bg-gray-700 rounded" />
          <div className="w-3/4 h-4 bg-gray-700 rounded" />
        </div>

        {/* Links Skeleton */}
        <div className="flex flex-wrap gap-4">
          <div className="w-32 h-10 bg-gray-700 rounded" />
          <div className="w-32 h-10 bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default function EventDetails({ eventname }: { eventname: string }) {
  const { eventsData, eventsLoading } = useEvents();
  const [isSoloOpen, setIsSoloOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const { userData, userLoading } = useUser();
  const router = useRouter();

  const eventData = eventsData.find(
    (e) => e.name.toLowerCase() === eventname.toLowerCase()
  );

  if (eventsLoading || !eventData) {
    return (
      <Wrapper>
        <div className="min-h-screen w-full mt-14 text-white flex flex-col items-center py-16 px-4 relative">
          <SkeletonLoader />
        </div>
      </Wrapper>
    );
  }

  const handleRegister = async () => {
    if (userLoading) {
      toast.info('Please wait while we check your login status');
      return;
    }
    if (!userData) {
      await login();
      return;
    }

    if (
      !userData.phone ||
      !userData.name ||
      userData.phone.trim() === '' ||
      userData.name.trim() === ''
    ) {
      router.push(
        `/profile?onboarding=true&callback=${encodeURIComponent(`/events/${eventname}`)}`
      );
      return;
    }

    if (eventData.max_team_size === 1) {
      setIsSoloOpen(true);
    } else {
      setIsTeamOpen(true);
    }
  };

  return (
    <Wrapper>
      <div className="min-h-screen w-full mt-14 text-white py-16 px-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] bg-[#FFB98E] rounded-full blur-[150px] opacity-20" />
          <div className="absolute -left-1/4 bottom-1/4 w-[600px] h-[600px] bg-[#6C4AE7] rounded-full blur-[150px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Event Icon */}
          {eventIcons[eventData.name] && (
            <div className="absolute -top-20 left-16 w-[28rem] h-[28rem] hidden md:block">
              <Image
                src={eventIcons[eventData.name]}
                alt={eventData.name}
                width={512}
                height={256}
                loading="lazy"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold font-got mb-6 text-center">
            {eventData.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Image and Buttons */}
            <div className="flex flex-col items-center">
              <div className="relative w-full md:w-[28rem] h-[30rem] mb-6">
                <Image
                  src={eventData.image_url || '/placeholder.svg'}
                  alt={eventData.name}
                  layout="fill"
                  loading="lazy"
                  className="object-fit rounded-lg"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link href="/events">
                  <Button variant="outline" className="px-6 text-black">
                    Back to Events
                  </Button>
                </Link>

                <RulesDialog rules={eventData.rules} />

                {eventData.reg_status && (
                  <Button
                    onClick={handleRegister}
                    disabled={eventData.registered}
                    className="px-6 bg-purple-600 hover:bg-purple-700"
                  >
                    {eventData.registered
                      ? 'Already Registered'
                      : 'Register Now'}
                  </Button>
                )}
              </div>
            </div>

            {/* Right column - Event Details */}
            <div className="space-y-6">
              <div className="space-y-3 font-bold">
                <p className="text-2xl">
                  Registration Fee: ₹{eventData.registration_fees}
                </p>
                <p className="text-2xl">
                  Schedule: {parseWithQuillStyles(eventData.schedule)}
                </p>
                {eventData?.coordinators?.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold">Coordinators:</h2>
                    <ul className="space-y-2 text-xl">
                      {eventData.coordinators.map((coordinator, index) => (
                        <li key={index} className="text-gray-300">
                          {coordinator.name} - {coordinator.phone}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="text-3xl">Prize Pool: ₹{eventData.prize_pool}</p>
                {eventData?.description?.length > 0 && (
                  <div className="mt-6">
                    <p className="text-2xl mb-4">Description:</p>
                    <div>{parseWithQuillStyles(eventData.description)}</div>
                  </div>
                )}
              </div>

              {eventData.links && eventData.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {eventData.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="px-6 text-black">
                        {link.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <SoloEventRegistration
          isOpen={isSoloOpen}
          eventID={eventData.id}
          onClose={() => setIsSoloOpen(false)}
          eventName={eventData.name}
          eventFees={eventData.registration_fees}
        />
        <TeamEventRegistration
          isOpen={isTeamOpen}
          onClose={() => setIsTeamOpen(false)}
          eventID={eventData.id}
          eventName={eventData.name}
          minTeamSize={Number(eventData.min_team_size)}
          maxTeamSize={Number(eventData.max_team_size)}
        />
      </div>
    </Wrapper>
  );
}
