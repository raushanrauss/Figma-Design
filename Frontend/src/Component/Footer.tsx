
import footerImg from "../assets/savior-logo.png"
import twitterImg from "../assets/twitter-icon.png"
import telegramImg from "../assets/telegram-icon.png"
import mailImg from "../assets/mail-icon.png"

const Footer = () => {
  return (
    <>
  <div className='h-[428px] bg-black flex flex-col justify-center items-center gap-4'>
<img src={footerImg} alt="FooterImg" className='w-[200px] h-[183px]'/>
<h1 className='text-white text-[24px] font-normal mt-[-40px]'>SITEMAP</h1>
<div className=''>
  <ul className='text-white flex gap-4 text-[13px]'>
    <li>Home</li>
    <li>IDO</li>
    <li>Tokenomics</li>
    <li>Road map</li>
    <li>Whitepaper</li>
    <li>Pledge</li>
    <li>NFT</li>
    <li>Games</li>
  </ul>
</div>
<div className='flex justify-center items-center gap-4'>
<img src={twitterImg} alt="twitter" className='h-[27.46px] w-27.46px]'/>
<img src={telegramImg} alt="telegram" className='h-[27.46px] w-27.46px]'/>
<img src={mailImg} alt="mail" className='h-[27.46px] w-27.46px]'/>
</div>
  </div>
    </>
  )
}

export default Footer