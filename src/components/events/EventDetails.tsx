"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Wrapper } from "../common/Wrapper";
import { useEvents } from "@/lib/stores";
import parse from "html-react-parser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { events } from "@/lib/types/events";
import { cn } from "@/lib/utils";

/**
 * Tailwind classes for all HTML elements that the Quill editor (or similar)
 * might produce. Feel free to adjust these to your design needs.
 */
const quillStyles: Record<string, string> = {
  p: "mb-4 text-base text-white",
  h1: "mt-6 mb-2 text-3xl font-bold text-white",
  h2: "mt-5 mb-2 text-2xl font-bold text-white",
  h3: "mt-4 mb-2 text-xl font-bold text-white",
  h4: "mt-3 mb-2 text-lg font-bold text-white",
  h5: "mt-2 mb-2 text-base font-bold text-white",
  h6: "mt-1 mb-2 text-sm font-bold text-white",
  strong: "font-bold text-purple-400",
  em: "italic",
  u: "underline",
  a: "text-blue-400 hover:underline",
  blockquote:
    "border-l-4 border-gray-500 pl-4 italic text-gray-300 my-4",
  ul: "list-disc pl-6 mb-4 space-y-2",
  ol: "list-decimal pl-6 mb-4 space-y-2",
  li: "text-gray-300",
  pre: "bg-gray-800 p-4 rounded text-sm overflow-x-auto my-4",
  code: "bg-gray-900 px-1 py-0.5 rounded text-sm font-mono",
  img: "max-w-full h-auto my-4",
};

/**
 * parseWithQuillStyles is a helper function that uses html-react-parser
 * to traverse the provided HTML string and apply consistent Tailwind CSS classes
 * to supported tags.
 */
const parseWithQuillStyles = (html: string) => {
  return parse(html, {
    replace: (domNode: any) => {
      if (domNode.type === "tag") {
        const tagName = domNode.name.toLowerCase();
        if (quillStyles[tagName]) {
          const existingClass = domNode.attribs?.class || "";
          const newClass = cn(existingClass, quillStyles[tagName]);
          domNode.attribs = { ...domNode.attribs, class: newClass };
          return domNode;
        }
      }
    },
  });
};

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
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { eventsData, eventsLoading } = useEvents();
  const [eventData, setEventData] = useState<events | null>(null);

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
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      alert("Registration successful!"); // Replace with your actual registration handling
    }, 1500);
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
            />
          </div>
        )}

        <h1 className="text-3xl font-bold font-got mb-6">{eventData.name}</h1>

        <div className="relative w-[28rem] h-[30rem] mb-6">
          <Image
            src={eventData.image_url || "/placeholder.svg"}
            alt={eventData.name}
            layout="fill"
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
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link href="/events">
            <Button variant="outline" className="px-6 text-black">
              Back to Events
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-6 bg-purple-600 hover:bg-purple-700">
                View Rules
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 text-white border-zinc-800 max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-got">Rules</DialogTitle>
              </DialogHeader>
              <div className="mt-4 overflow-y-auto p-4">
                {parseWithQuillStyles(eventData.rules)}
              </div>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handleRegister}
            disabled={isRegistering || eventData.registered}
            className="px-6 bg-purple-600 hover:bg-purple-700"
          >
            {eventData.registered
              ? "Registered"
              : isRegistering
                ? "Registering..."
                : "Register Now"}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
