"use client";
import ClientsSection from '@/components/landing/ClientsSection '
import Counter from '@/components/landing/Counter'
import Earning from '@/components/landing/Earning'
import Hero from '@/components/landing/Hero'
import HowWorks from '@/components/landing/HowWorks'
import React from 'react'

const page = () => {
  return (
    <div>
       {/* bannner section   */}
      <Hero />
      {/* how works section  */}
      <HowWorks />
      {/* clients section  */}
      <ClientsSection />
      {/*counter section  */}
      <Counter/>

    
    </div>
  )
}

export default page
