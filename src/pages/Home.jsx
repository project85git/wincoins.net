import React from 'react'
import Carousel from '../component/pageComponent/Carousel'

const Home = () => {
    const buttons = [
        { label: "Jackpots", bgColor: "bg-blue-500" },
        { label: "New Games", bgColor: "bg-purple-500" },
        { label: "Popular", bgColor: "bg-red-500" },
        { label: "Classic Slots", bgColor: "bg-green-500" },
        { label: "Megaways", bgColor: "bg-pink-500" },
        { label: "All Games", bgColor: "bg-yellow-500" },
      ];
  return (
    <div className=" text-white  mt-5 w-full flex flex-col items-center justify-center">
         {/* <div className="flex w-full items-center justify-center h-screen bg-blue-900" style={{ backgroundImage: 'url(your-dummy-image-url.com)', backgroundSize: 'cover' }}>
      <div className="bg-blue-800 text-white p-8 rounded-lg text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          SPIN & WIN <span className="text-pink-300">With Paris</span>
        </h1>
        <p className="mb-4">Join 2m+ Players!</p>
        <p className="mb-6">Choose From Over 1,000 Vegas-Style Games</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Play Now
        </button>
        <p className="mt-4 text-sm">Get 200% Extra Free TODAY!</p>
      </div>
    </div> */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Grab your <span className="text-blue-400">Free Coins</span> &</h1>
        <h2 className="text-5xl mt-1 font-bold">Start Winning!</h2>
      </div>
      <Carousel />
      <div className="mt-8 text-center">
        <h3 className="text-xl">Welcome to your new Favorite Place to Play</h3>
      </div>
      <div className="mt-4 flex  w-[80%]  justify-center space-x-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${button.bgColor} text-white px-4 w-full py-3 rounded-lg shadow-md`}
        >
          {button.label}
        </button>
      ))}
    </div>
    </div>
  )
}

export default Home