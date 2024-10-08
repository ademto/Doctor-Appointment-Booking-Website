import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe veritatis ea? Reiciendis quam nesciunt unde modi rerum consequatur dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, temporibus.</p>
            </div>

            {/* center section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1 234-456-7890</li>
                    <li>info@abc.com</li>
                </ul>
            </div>
        </div>
        {/* copyright text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer