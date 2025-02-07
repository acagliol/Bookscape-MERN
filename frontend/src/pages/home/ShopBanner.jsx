import bannerImg from "../../assets/banner2.png";
const ShopBanner = () => {
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
export default ShopBanner;