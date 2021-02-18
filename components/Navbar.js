import React, {useState} from 'react'

function Navbar() {
   const [open, setopen] = useState(true)


    return (
        <div  className="  bg-gradient-to-r from-green-500 to-green-700 shadow-lg fixed top-0 inset-x-0 z-20">
            <div  className=" mx-auto">
                <div className="flex justify-around items-center h-20">
                    <a href="#" className="block text-white text-3xl font-bold  py-4 sm:p-3"> At BaliJava</a>

                    <div className = { " hidden sm:flex justify-even items-center"}>

                        <a href="#" className="text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Home</a>
                        <a href="#" className="text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Profile</a>
                        <a href="#" className="text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Product</a>
                        <a href="#" className="text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Contact</a>

                    </div>

                    <button type="button" onClick={()=>(setopen(!open))} className="block text-white sm:hidden">
                    <div className={open ? "hidden":"block"}>   <svg className="w-9 h-9 hover:text-gray-200 hover:bg-green-500 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                    </svg>
                    
                    </div>
                        <div className={open ? "block" : "hidden"}> 
                        <svg className="w-9 h-9 hover:text-gray-200 hover:bg-green-500 rounded" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></div>
                       
                        
                    </button>

                       {/* Menu Item */}
                  
                </div>

                <div className = { open ? "block sm:hidden":"hidden"}>

                    <a href="#" className="block text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Home</a>
                    <a href="#" className="block text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Profile</a>
                    <a href="#" className="block text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Product</a>
                    <a href="#" className="block text-gray-100 font-semi-bold hover:bg-green-500 round px-4"> Contact</a>

                </div>
                <ul >

                    
                    
                </ul>

             

            </div>

            
        </div>
    )
}

export default Navbar
