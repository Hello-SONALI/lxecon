import AboutBanner from '@/components/about/AboutBanner'
import AboutCompany from '@/components/about/AboutCompany'
import LetsWorkWithUs from '@/components/about/LetsWorkWithUs'
import OurTeam from '@/components/about/OurTeam'
// import Pricing from '@/components/about/Pricing'
import ProjectDone from '@/components/about/ProjectDone'
import GetInTouch from '@/components/home/GetInTouch'

import React from 'react'

function index() {
  return (
    <>
  <AboutBanner/>  
  <AboutCompany/>
  <OurTeam/>  
  <ProjectDone/>
  <LetsWorkWithUs/>
  <GetInTouch/>
 
    </>
  )
}

export default index
