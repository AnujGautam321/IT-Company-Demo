import { Carousel } from 'flowbite-react'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary'>from 8 years</span></h1>
            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="https://i.insider.com/601441dd6dfbe10018e00c25?width=700" alt="" />
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lets Learn and Earn <span className='text-brandPrimary'>in 4 Months</span></h1>
            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png" alt="" />
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary'>from 8 years</span></h1>
            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
          </div>
        </div>

      </Carousel>
        </div>
    </div>
  )
}

export default Home