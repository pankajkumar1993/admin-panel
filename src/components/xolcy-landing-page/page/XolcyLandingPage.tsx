import React from 'react'
import HeroSection from '../Hero/HeroSection'
import OurServices from '../Services/OurServices'
import Features from '../Features/Features'
import ClientSays from '../Testimonials/ClientSays'
import StatsSection from '../Stats/StatsSection'
import PricingSection from '../Pricing/PricingSection'
import LogosSection from '../Logos/LogosSection'
import ContactUsSection from '../ContactUs/ContactUsSection'
import MyFooter from '../Footer/MyFooter'

const XolcyLandingPage = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <Features />
      <ClientSays />
      <StatsSection/>
      <PricingSection/>
      <LogosSection/>
      <ContactUsSection/>
    <MyFooter/>
    </>
  )
}

export default XolcyLandingPage