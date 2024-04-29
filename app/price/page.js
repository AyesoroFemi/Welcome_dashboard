import DashboardLayout from '@/components/DashboardLayout'
import Nav from '@/components/Nav'
import React from 'react'

function Price() {
  return (
    <div className="grid md:grid-cols-[20%_80%] lg:grid-cols-[35%_65%] xl:grid-cols-[30%_70%] w-full">
    <Nav />
    <DashboardLayout />
  </div>
  )
}

export default Price