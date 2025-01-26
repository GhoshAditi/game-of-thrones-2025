import React from 'react'
import { Suspense } from "react"
import { generateEvents } from './functions'
import { EventCards } from './EventsCard'

const page = async () => {

  const mockData = await generateEvents(20)
  return (
      <div className='w-full flex flex-col items-center justify-center'>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 font-sargento">Manage Events</h1>
            <Suspense fallback={<div>Loading...</div>}>
              <EventCards events={mockData}  />
            </Suspense>
      </div>
  )
}

export default page