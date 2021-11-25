import React from 'react'
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import DentalCare from '../DentalCare/DentalCare'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner/>
            <Services />
            <DentalCare/>
            <AppointmentBanner />
            <Testimonial/>
        </div>
    )
}

export default Home
