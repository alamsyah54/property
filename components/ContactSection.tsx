import Link from "next/link"
import React from "react"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { RiInstagramLine, RiMessengerLine } from "react-icons/ri"

const ContactSection = () => {
    return (
        <section id='contact' className='h-fit w-full flex-centerp-5 my-10'>
            <div className='w-full'>
                {/* <h1 className='text-3xl font-extrabold my-5'>CONTACT</h1> */}
                <div className='flex flex-col-reverse gap-4'>
                    <div className='relative w-full h-96'>
                        <iframe
                            className='absolute top-0 left-0 w-full h-full'
                            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2377.7678174998823!2d98.9352811225426!3d18.910533831880556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU0JzM4LjEiTiA5OMKwNTYnMDQuNCJF!5e0!3m2!1sen!2sus!4v1701330986484!5m2!1sen!2sus'
                            // @ts-ignore
                            frameborder='0'
                            style={{ border: 0 }}
                            allowfullscreen=''
                            aria-hidden='false'
                            tabindex='0'
                        ></iframe>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly gap-5 md:gap-16 lg:gap-24 py-10 lg:my-20'>
                        <div className='flex gap-3 flex-col text-left w-80 '>
                            <h2 className='text-xl font-semibold'>Address</h2>
                            <Link
                                href='https://maps.app.goo.gl/Pe5BZP7dP1Cp2rc49'
                                target='_blank'
                            >
                                Rim Tai Subdistrict, Mae Rim District, Chiang
                                Mai 50180
                            </Link>
                        </div>
                        <div className='flex gap-3 flex-col text-left w-80 '>
                            <h2 className='text-xl font-semibold'>Contact</h2>
                            <p className=''>
                                +6691-949-9942
                                <br />
                                <Link
                                    href='mailto:sirideedesign@gmail.com'
                                    target='_blank'
                                >
                                    sirideedesign@gmail.com
                                </Link>
                                <br />
                                <div className='flex gap-2 my-1'>
                                    <Link
                                        href='https://www.facebook.com/profile.php?id=100070025136262'
                                        target='_blank'
                                    >
                                        <TiSocialFacebookCircular className='text-2xl' />
                                    </Link>
                                    <Link
                                        href='https://instagram.com/siridee_property'
                                        target='_blank'
                                    >
                                        <RiInstagramLine className='text-2xl' />
                                    </Link>
                                    <Link
                                        href='https://www.facebook.com/messages/t/108694238122198'
                                        target='_blank'
                                    >
                                        <RiMessengerLine className='text-2xl' />
                                    </Link>
                                </div>
                            </p>
                        </div>
                        <div className='flex gap-3 flex-col text-left w-80 '>
                            <h2 className='text-xl font-semibold'>
                                Opening Hours
                            </h2>
                            <p className=''>
                                Mon - Sunday <br /> 9:00 am - 7:00 pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
