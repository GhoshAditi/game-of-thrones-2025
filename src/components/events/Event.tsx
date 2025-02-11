'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Heading } from '../common';
import EventCard from '@/components/events/EventCard';
import { useEvents } from '@/lib/stores';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function EventPage() {
  const controls = useAnimation();
  const { eventsData, eventsLoading, setEventsData } = useEvents();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // In case you want to refresh events on mount, you can call setEventsData() here.
  useEffect(() => {
    setEventsData();
  }, [setEventsData]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (eventsLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        Loading events...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full my-10 bg-transparent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 mt-10">
        <Heading text="EVENTS" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-28"
        >
          {eventsData.map((event, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link
                href={`/events/${encodeURIComponent(event.name.toLowerCase())}`}
              >
                <EventCard
                  title={event.name}
                  subtitle={event.description}
                  schedule={event.schedule}
                  image_url={event.image_url}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
