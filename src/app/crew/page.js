'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Navbar from '@/components/Navbar'
import DouglasHurley from '../../../public/crew/image-douglas-hurley.png'
import MarkShuttleworth from '../../../public/crew/image-mark-shuttleworth.png'
import VictorGlover from '../../../public/crew/image-victor-glover.png'
import AnoushehAnsari from '../../../public/crew/image-anousheh-ansari.png'

const tabs = [
  {
    id: 1,
    name: 'Douglas Hurley',
    position: 'Commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: DouglasHurley,
  },
  {
    id: 2,
    name: 'Mark Shuttleworth',
    position: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: MarkShuttleworth,
  },
  {
    id: 3,
    name: 'Victor Glover',
    position: 'Pilot',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    image: VictorGlover,
  },
  {
    id: 4,
    name: 'Anousheh Ansari',
    position: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image: AnoushehAnsari,
  },
]

const HoverMiniTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  const tabContent = tabs.find(tab => tab.id === activeTab)

  return (
    <div className='flex flex-col items-center justify-center lg:flex-row gap-10 xl:gap-22'>
      {activeTab && (
        <>
          <div className='flex flex-col items-center lg:items-start w-[80%]'>
            <h1 className='typography-preset-three uppercase w-full'>{tabContent.name}</h1>

            <p className='typography-preset-nine py-2 text-secondary w-full text-center lg:text-left'>
              {tabContent.description}
            </p>

            <div className='flex flex-row gap-10 typography-preset-eight text-secondary uppercase'>
              {tabs.map(tab => (
                <div
                  key={tab.id}
                  className={`cursor-pointer pb-3 transition-all duration-700 bg-white  w-3 h-3 rounded-full ${
                    activeTab === tab.id ? 'border-white' : 'border-transparent'
                  }`}
                  onMouseEnter={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
            className='w-2/5//'>
            <Image src={tabContent?.image} alt={`${tabContent.name} Image`} />
          </motion.div>
        </>
      )}
    </div>
  )
}

const Crew = () => {
  return (
    <div className='bg-[url("/crew/background-crew-mobile.jpg")] sm:bg-[url("/crew/background-crew-tablet.jpg")] lg:bg-[url("/crew/background-crew-desktop.jpg")] bg-cover bg-no-repeat w-screen h-fit min-h-screen'>
      <div className='flex flex-col items-start pt-0 lg:pt-10 w-screen lg:h-screen'>
        <Navbar />

        <div className='container mx-auto mb-20 lg:px-20 xl:px-40 mt-10 lg:mt-14 flex flex-col items-center gap-10'>
          <p className='uppercase typography-preset-eight sm:typography-preset-five flex flex-row gap-6 lg:self-start'>
            <span className='font-bold text-[#ffffff5f]'>02</span>
            Meet your crew
          </p>

          <HoverMiniTab />
        </div>
      </div>
    </div>
  )
}

export default Crew
