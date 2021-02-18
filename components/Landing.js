import React from 'react'

function Landing() {
    return (
        <div className="bg-gray-100 h-screen relative">
             <div>
                <div>
                    <img className=" absolute rounde-lg shadow-lg overflow-none object-cover object-center w-full h-screen z-0 "src="./balijavabanner.jpg"/>

                    <div className="z-10 relative">
                        <div className="font-bold text-gray-100 text-3xl px-4 pt-6 leading-relaxed">
                        Welcome to <span className="text-green-700">At</span> BaliJava
                        </div>
                    </div>

                   
                </div>

            </div>

            <buton type="button" className="rounded-lg shadow-lg bg-gray-100 text-green-700 text-xl top-80 left-32 px-4 py-2 relative z-10"> Get Started</buton>
        </div>
    )
}

export default Landing
