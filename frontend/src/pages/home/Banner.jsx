// import React from 'react'

// import bannerImg from "../../assets/banner.png"
// const Banner = () => {
//   return (
//     <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
//          <div className='md:w-1/2 w-full flex item-center md:justify-end'>
//             <img src={bannerImg} alt = ""/>
//         </div>
//         <div className='md:w-1/2 w-full'>
//             <h1 className='md:text-5xl text-2xl font-medium mb-7'> New Releases This Week</h1>
//             <p className='b-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>

//             <button className='btn-primary'>Subscribe</button>
//         </div>

       
//     </div>
//   )
// }

// export default Banner

// fix white background 

// Banner.jsx
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-24 justify-between items-center gap-16 px-6 md:px-12 bg-[#FFF8E1] text-[#9B1C1C]'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" className='max-w-full rounded-lg shadow-lg'/>
      </div>
      <div className='md:w-1/2 w-full text-left'>
        <h1 className='md:text-6xl text-3xl font-bold mb-6'>Book Paradise Awaits</h1>
        <p className='mb-8 text-xl text-[#B85C38]'>Your Gateway to Books Galore</p>
      </div>
    </div>
  );
}
export default Banner;