
import React from 'react'
import Carousel from '../component/pageComponent/Carousel'
import triple777 from '../assets/images/illustration-games.png'
import message from '../assets/images/illustration-help.png'
import group from '../assets/images/illustration-players.png'
import rocket from '../assets/images/rocketBanner.jpg'
import GlobalButton from '../component/mainComponent.jsx/GlobalButton'
import Testimonials from '../component/pageComponent/Testimonials'
import GirlsBanner from '../assets/images/girlsbanner.png'
import GirlsBanner1 from '../assets/images/girlsbanner2.png'

import bold from '../assets/images/bold.png'
import roulete from '../assets/images/roulete.png'
import slot from '../assets/images/slot.png'



const Home = () => {
    
    const buttons = [
        { label: "Jackpots", bgColor: "bg-blue-500" },
        { label: "New Games", bgColor: "bg-purple-500" },
        { label: "Popular", bgColor: "bg-red-500" },
        { label: "Classic Slots", bgColor: "bg-green-500" },
        { label: "Megaways", bgColor: "bg-pink-500" },
        { label: "All Games", bgColor: "bg-yellow-500" },
      ];
      const gameData = [
        { imageSrc: 'https://cdn4.wowvegas.com/assets/laughing-buddha.jpg', title: 'Hive Play' },
        { imageSrc: 'https://cdn4.wowvegas.com/assets/jokers-jewels-jackpot-play.jpg', title: 'Hive Play' },
        { imageSrc: 'https://cdn4.wowvegas.com/assets/coins-of-wow-vegas-hold-win.jpg', title: 'Hive Play' },
        {imageSrc:"https://cdn4.wowvegas.com/assets/BETSOFT_take-the-bank.png",title:"Live Play"},
        {imageSrc:"https://cdn4.wowvegas.com/assets/PRAGMATIC_buffalo-king-megaways.png",title:"Live Play"},
        { imageSrc: 'https://cdn4.wowvegas.com/assets/laughing-buddha.jpg', title: 'Hive Play' },
        { imageSrc: 'https://cdn4.wowvegas.com/assets/jokers-jewels-jackpot-play.jpg', title: 'Hive Play' },
        { imageSrc: 'https://cdn4.wowvegas.com/assets/coins-of-wow-vegas-hold-win.jpg', title: 'Hive Play' },
        {imageSrc:"https://cdn4.wowvegas.com/assets/BETSOFT_take-the-bank.png",title:"Live Play"},
        {imageSrc:"https://cdn4.wowvegas.com/assets/PRAGMATIC_buffalo-king-megaways.png",title:"Live Play"},
        { imageSrc: 'https://cdn4.wowvegas.com/assets/laughing-buddha.jpg', title: 'Hive Play' },
        { imageSrc: 'https://cdn4.wowvegas.com/assets/jokers-jewels-jackpot-play.jpg', title: 'Hive Play' },
     

        
        // Add more game objects as needed...
    ];
     const  moreResason=[
    {
        id:1,
        title:"Join Millions of Players",
        des:"Millions of players have joined WOW, with more and more winners joining every day!",
        img:group,
    },
    {
        id:2,
        title:"24/7 Customer Help",
        des:"Get the assistance you need quickly and efficiently with our 24/7 customer help team.",
        img:message
    },
    {
        id:3,
        title:"New Games Every Week",
        des:"Every week we launch exciting new Vegas casino-style games to keep you on the edge of your seat.",
        img:triple777
    },
 
      ]
      const  moreResason1=[
        {
            id:1,
            title:"Play For Free",
            des:"Enjoy the fun for free. Focus on having fun with our social casino community and don't worry about parting with your cash.",
            img:slot,
        },
        {
            id:2,
            title:"100's Of Games",
            des:"There is always something to play on WOW. We are constantly adding new games so you will be spoiled for choice!",
            img:roulete
        },
        {
            id:3,
            title:"Instant Play",
            des:"No downloads required to play. Simply click on any game to play from your PC, Mac, Smartphone or Tablet instantly.",
            img:bold
        },
     
          ]

      const handleClick=()=>{
      }

  return (
    <div className="text-white mt-0 w-full flex flex-col items-center justify-center">
          <div className='w-full relative '>
        <img src={GirlsBanner1} className='w-full h-[65vh] lg:h-[85vh]  ' />
        <div className='absolute bottom-0  w-full h-full flex gap-5  flex-col items-center justify-center '>
        <p className='mb-2 font-semibold text-2xl'>Start Winning With Paris Today        </p>

            <p className='mb-2 font-semibold text-center  text-3xl lg:text-5xl'>Claim Your Free Coins</p>
            <p className='text-sm px-8 lg:w-[40%] text-center'>Our thriving social casino community is focused entirely on having fun, so why not join the WOW Vegas party and start winning today?</p>
            <GlobalButton height={"45px"} fontWeight="700" width="180px" bgColor="#F68F0D" text="Play For Free" onClick={handleClick}  />
        </div>

      </div>
      <div className="text-center mt-[50px] mb-8">
        <h1 className=" text-lg md:text-2xl font-bold">Grab your <span className="text-blue-400">Free Coins</span> &</h1>
        <h2 className=" text-2xl md:text-3xl lg:text-5xl mt-1 font-bold">Start Winning!</h2>
      </div>
      <Carousel />
      <div className="mt-8 text-center">
        <h3 className="text-xl">Welcome to your new Favorite Place to Play</h3>
      </div>

      <div className="mt-4 max-w-[1400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-[92%] justify-center gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`${button.bgColor} text-white px-4 w-full py-3 rounded-lg shadow-md`}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="w-full text-white">
        <div className="text-center mt-10">
          <h1 className="text-xl font-bold mb-5">
            Win with Paris on over <span className='text-[#0BA5E9]'>1,000</span> exciting
          </h1>
          <h2 className=" text-3xl px-4 lg:text-4xl font-bold mb-5">Social Casino-Style Games</h2>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 w-[100%] lg:w-[92%] max-w-[1400px] m-auto gap-2 lg:gap-4 p-2  md:p-6 lg:p-10">
          {gameData.map((game, index) => (
            <div 
              key={index} 
              className="relative cursor-pointer bg-blue-600 rounded-[6px] overflow-hidden shadow-lg group"
            >
              <div className='hover:opacity-50 z-5 relative h-full'>
                <img src={game.imageSrc} alt={game.title} className="w-full h-full object-cover" />
              </div>

              <div className="absolute shadow-xl bottom-0 h-full left-0 right-0 flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <button className="bg-[#1D4FD9] text-sm text-white rounded-[4px] py-2 px-4 translate-y-5 opacity-100 group-hover:translate-y-0 transition duration-300">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


     {/* more reason  */}

     <div className="w-full text-white">
        <div className="text-center mt-10">
          <h1 className="text-xl font-bold mb-3">
          More reasons to
          </h1>
          <h2 className=" text-3xl lg:text-5xl font-bold mb-5">Join W<span className='text-[#007EFE]'>O</span>W today</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  lg:w-[85%] mt-14 lg:mt-10 m-auto gap-16 lg:gap-6 p-2  md:p-3 lg:p-10">
          {moreResason?.map((game, index) => (
            <div 
              key={index} 
              className="relative bg-[#202024] w-full min-h-[220px] p-5 flex items-center justify-center rounded-3xl"
            >
                <img src={game.img} alt={game.title} className={` ${index==2?" w-[100px] md:w-[160px]":"w-[80px] lg:w-[100px]"}  absolute top-[-50px] `} />
                  <div className='flex flex-col items-center gap-2 justify-center'>
                    <p className='text-lg  font-bold'>{game?.title}</p>
                    <p className='text-center text-[14px] text-[#FFFFFF] px-8 leading-5'>{game?.des}</p>

                  </div>
            
            </div>
          ))}
        </div>
      </div>

     {/* rocket banner */}

      <div className='w-full relative  mt-[50px] lg:mt-[100px]'>
        <img src={rocket} className='w-full h-[50vh] lg:h-auto ' />
        <div className='absolute bottom-0  w-full h-full flex gap-5  flex-col items-center justify-center '>
            <p className='text-sm px-8 lg:w-[50%] text-center'>Top Game Of The Week</p>
            <GlobalButton height={"45px"} fontWeight="700" width="180px" bgColor="#F68F0D" text="Play For Free" onClick={handleClick}  />
        </div>

      </div>




     {/* testomonial */}

     <div className="w-full mt-[80px]  text-white">
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold mb-3">
          They Love W<span className='text-[#007EFE]'>O</span>W
          </h1>
          <h2 className=" text-3xl lg:text-5xl font-bold mb-5">Our Players Speak For Us</h2>
        </div>

        <div className="w-[92%] max-w-[1400px] mt-[50px] m-auto">
         <Testimonials/>
        </div>
      </div>


   {/* banner girls */}

      <div className='w-full relative  mt-[50px] lg:mt-[100px]'>
        <img src={GirlsBanner} className='w-full h-[50vh] lg:h-auto ' />
        <div className='absolute bottom-0  w-full h-full flex gap-5  flex-col items-center justify-center '>
            <p className='mb-2 text-center font-semibold text-3xl lg:text-5xl'>No Purchases Necessary</p>
            <p className='text-sm px-8 lg:w-[40%] text-center'>Play the very best newly released Vegas-style social casino games with WOW Coins. Choose from amazing games including Sugar Rush, Wilds of Fortune, Big Bass Bonanza and many more. Keep the fun going by unlocking extra spins, bonus rounds and more. Feel the real thrills of Vegas at your fingertips.</p>
            <GlobalButton height={"45px"} fontWeight="700" width="180px" bgColor="#F68F0D" text="Play For Free" onClick={handleClick}  />
        </div>

      </div>




     {/* more reason 2 */}

     <div className="w-full mt-[50px] text-white">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[85%] max-w-[1400px] mt-10 m-auto gap-16 lg:gap-6 p-2 md:p-3 lg:p-10">
          {moreResason1?.map((game, index) => (
            <div 
              key={index} 
              className="relative bg-[#202024] min-h-[220px] p-5 flex items-center justify-center rounded-3xl"
            >
                <img src={game.img} alt={game.title} className={` ${index==2?"w-[40px] lg:w-[50px]":index==0?"w-[60px] lg:w-[70px]":"w-[80px] lg:w-[100px]"}  absolute top-[-50px] `} />
                  <div className='flex flex-col items-center gap-2 justify-center'>
                    <p className='text-lg  font-bold'>{game?.title}</p>
                    <p className='text-center text-[14px] text-[#FFFFFF] px-8 leading-5'>{game?.des}</p>

                  </div>
            
            </div>
          ))}
        </div>
      </div>


   {/* banner girls2 */}

   <div className='w-full relative mt-[50px] lg:mt-[100px]'>
        <img src={GirlsBanner1} className='w-full h-[50vh] lg:h-auto  ' />
        <div className='absolute bottom-0  w-full h-full flex gap-5  flex-col items-center justify-center '>
        <p className='mb-2 font-semibold text-center text-lg lg:text-2xl'>Start Winning With Paris Today        </p>

            <p className='mb-2 text-center font-semibold text-3xl lg:text-5xl'>Claim Your Free Coins</p>
            <p className='text-sm px-8 lg:w-[40%] text-center'>Our thriving social casino community is focused entirely on having fun, so why not join the WOW Vegas party and start winning today?</p>
            <GlobalButton height={"45px"} fontWeight="700" width="180px" bgColor="#F68F0D" text="Play For Free" onClick={handleClick}  />
        </div>

      </div>

    </div>
  )
}

export default Home

