import React from 'react'
import './marquee.css';

const Frontfooter = () => {
  return (
    <div className="absolute bottom-0 bg-slate-900 text-white inset-x-0 md:text-md text-sm  text-center font-mono">
      <div className="marquee-container">
                    <div className="marquee-content">
                      <span className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins] text-yellow-400">
                        <span className="lil text-yellow">Copyright @2023TeamSLIP</span>
                          <span className="text-6xl text-red-600 mr-1 pt-2">
                            <ion-icon name="fast-food-outline"></ion-icon>
                          </span>
                        Food Menu
                      </span>
                      </div>
                </div>
      <h1 className = " text-lg">Connect with us:<span className="text-yellow-400"> +91 8328381572</span></h1>

      <h2 className = "mt-1"><span className="text-yellow-400">Thanks for Visiting</span></h2>
    </div>
  )
}

export default Frontfooter
