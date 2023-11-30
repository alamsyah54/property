import React from "react"
import ContactSection from "./ContactSection"

const AboutSection = () => {
    return (
        <section
            id='about'
            className='w-full flex-col flex-center px-5 md:px-10 lg:px-32'
        >
            <div className='lg:p-10 lg:my-16 lg:shadow-lg lg:bg-[#f9f9f9] w-full flex-col flex-center text-center'>
                {/* <h1 className='text-3xl font-extrabold my-5'>ABOUT US</h1> */}
                <h3 className='font-bold text-xl mb-4'>
                    Where Your Real Estate Journey Begins with Excellence and
                    Transparency.
                </h3>
                <p className='mb-4 md:px-14 lg:px-24 '>
                    Siridee Property, where excellence meets transparency. With
                    our commitment to providing exceptional real estate
                    services, we redefine your property journey in Rim Tai
                    Subdistrict, Mae Rim District, Chiang Mai 50180. Offerings
                    <span className='italic font-semibold'>
                        {" "}
                        FREE REGISTRATION, NO HIDDEN FEES,{" "}
                    </span>
                    and complimentary
                    <span className='italic font-semibold'>
                        {" "}
                        PROPERTY APPRAISAL.{" "}
                    </span>
                    With offices strategically located in two prime locations,
                    Siridee Property ensures expansive coverage and unmatched
                    service. Experience the epitome of modern elegance with
                    Siridee Property, your trusted partner in Mae Rim real
                    estate.
                </p>
                <ContactSection />
            </div>
        </section>
    )
}

export default AboutSection
