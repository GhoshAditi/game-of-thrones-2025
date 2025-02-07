"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Wrapper } from "../common/Wrapper";
import { useEvents } from "@/lib/stores";
import type { events } from "@/lib/types/events";
import { RulesDialog } from "./RulesDialog";
import { parseWithQuillStyles } from "@/utils/functions/quilParser";
import { EventRegistrationDialog } from "./EventRegistrationDialog";
import { TeamEventRegistration } from "./TeamEventRegitration";




const eventIcons: Record<string, string> = {
  CRICKET: "/icons/cricket.svg",
  BADMINTON: "/icons/badminton.svg",
  FOOTBALL: "/icons/football.svg",
  CHESS: "/icons/chess.svg",
  TUGOFWAR: "/icons/tow.svg",
  KABADDI: "/icons/kabaddi.svg",
  HANDBALL: "/icons/handball.svg",
  CARROM: "/icons/carrom.svg",
  TENNNIS: "/icons/tt.svg",
};

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="w-32 h-8 bg-gray-300 rounded mb-6" />
    <div className="w-[28rem] h-[30rem] bg-gray-300 rounded-lg mb-6" />
    <div className="space-y-4">
      <div className="w-48 h-6 bg-gray-300 rounded" />
      <div className="w-40 h-6 bg-gray-300 rounded" />
      <div className="w-36 h-6 bg-gray-300 rounded mb-2" />
      <div className="space-y-2">
        <div className="w-52 h-6 bg-gray-300 rounded" />
        <div className="w-52 h-6 bg-gray-300 rounded" />
      </div>
      <div className="w-44 h-6 bg-gray-300 rounded" />
      <div className="w-full h-32 bg-gray-300 rounded mt-4" />
    </div>
    <div className="flex gap-4 mt-8">
      <div className="w-32 h-10 bg-gray-300 rounded" />
      <div className="w-32 h-10 bg-gray-300 rounded" />
    </div>
  </div>
);

export default function EventDetails({ eventname }: { eventname: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const { eventsData, eventsLoading } = useEvents();
  const [eventData, setEventData] = useState<events | null>(null);
  const [isSoloOpen, setIsSoloOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  useEffect(() => {
    if (!eventsLoading && eventsData.length > 0) {
      const event = eventsData.find(
        (e) => e.name.toLowerCase() === eventname.toLowerCase()
      );
      if (event) {
        setEventData(event);
        setIsLoading(false);
      }
    }
  }, [eventsData, eventsLoading, eventname]);

  const handleRegister = () => {
    if (eventData?.max_team_size === 1) {
      setIsSoloOpen(true);
    }
    else {
      setIsTeamOpen(true);
    }
  };

  if (isLoading || !eventData) {
    return (
      <Wrapper>
        <div className="min-h-screen w-full mt-14 text-white flex flex-col items-center py-16 px-4 relative">
          <SkeletonLoader />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="min-h-screen w-full mt-14 text-white flex flex-col items-center py-16 px-4 relative">
        {/* Subtle Blurred Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] bg-[#FFB98E] rounded-full blur-[150px] opacity-20" />
          <div className="absolute -left-1/4 bottom-1/4 w-[600px] h-[600px] bg-[#6C4AE7] rounded-full blur-[150px] opacity-10" />
        </div>

        {eventIcons[eventData.name] && (
          <div className="absolute -top-20 left-16 w-[28rem] h-[28rem]">
            <Image
              src={eventIcons[eventData.name] || "/placeholder.svg"}
              alt={eventData.name}
              width={512}
              height={256}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold font-got mb-6">{eventData.name}</h1>

        <div className="relative w-[28rem] h-[30rem] mb-6">
          <Image
            src={eventData.image_url || "/placeholder.svg"}
            alt={eventData.name}
            layout="fill"
            loading="lazy"
            className="object-fit rounded-lg"
          />
        </div>

        {/* Main Event Details with content width matching the image */}
        <div className="max-w-[28rem] space-y-3 font-bold">
          <p className="text-2xl">
            Registration Fee: {eventData.registration_fees}
          </p>
          <p className="text-2xl">
            Schedule: {parseWithQuillStyles(eventData.schedule)}
          </p>
          <h2 className="text-2xl font-semibold mb-3">Coordinators:</h2>
          <ul className="space-y-2 text-xl">
            {eventData.coordinators.map((coordinator, index) => (
              <li key={index} className="text-gray-300">
                {coordinator.name} - {coordinator.phone}
              </li>
            ))}
          </ul>
          <p className="text-3xl">Prize Pool: {eventData.prize_pool}</p>
          <br />
          <p>Description:</p>
          <div>{parseWithQuillStyles(eventData.description)}</div>

          {/* If the event has any links, display them as buttons */}
          {eventData.links && eventData.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
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

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link href="/events">
            <Button variant="outline" className="px-6 text-black">
              Back to Events
            </Button>
          </Link>

          <RulesDialog rules={eventData.rules} />
          <EventRegistrationDialog isOpen={isSoloOpen} onClose={() => {
            setIsSoloOpen(false);
          }}
            eventName={eventData.name}
          />
          <TeamEventRegistration isOpen={isTeamOpen} onClose={() => {
            setIsTeamOpen(false);
          }}
            eventName={eventData.name}
            minTeamSize={Number(eventData.min_team_size)}
            maxTeamSize={Number(eventData.max_team_size)}
          />


          <Button
            onClick={handleRegister}
            disabled={eventData.registered}
            className="px-6 bg-purple-600 hover:bg-purple-700"
          >
            {eventData.registered
              ? "Registered"
              : "Register Now"}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
