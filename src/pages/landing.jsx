import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from '../data/companies.json';
import faqs from '../data/faq.json';
import Autoplay from 'embla-carousel-autoplay'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
        <section className='text-center text-white'>
            <h1 className='flex flex-col items-center justify-center text-4xl font-extrabold sm:text-7xl lg:text-7xl tracking-tighter py-4'>JobHub: Where Local Talent
            <span className='flex items-center gap-2 sm:gap-6'>Local Opportunities...</span></h1>

        </section>
        <div className='flex gap-6 justify-center'>
            {/*button*/}
            <Link to='/jobs'>
            <Button variant='ghost' size='xl' className="bg-[rgba(91,66,39,0.79)] border border-gray-500 hover: px-6 py-3 rounded-lg">Find Jobs</Button>
            </Link>
            <Link to='/post-job'>
            <Button variant='ghost' size='xl' className="bg-[rgba(44,32,19,0.79)] border border-gray-500 hover: px-6 py-3 rounded-lg">Post a Job</Button>
            </Link>
        </div>
    </main>
  )
}

export default LandingPage