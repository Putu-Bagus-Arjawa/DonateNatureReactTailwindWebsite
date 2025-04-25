import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import {  FaX } from "react-icons/fa6";

const Navbar = () => {
    const item = ['Home', 'About', 'Program', 'Pendaftaran']
    const [burger, setBurger] = useState(true);

  return (
    <div>
      <header 
        className="flex justify-around items-center shadow-xl p-2 fixed w-full top-0 left-0 right-0 z-10" 
        id="headerNav"
      >
            <h2 className="text-3xl text-green-500 text-shadow-2xs">EduGreen Foundation</h2>
            <nav className="md:flex md:gap-x-4 hidden">
                {item.map((item, index)=>(
                    <a href="#" key={index} className="hover:text-green-500 hover:border-b-[1px] hover:border-green-500 p-2">{item}</a>
                ))}
            </nav>
            <div 
              className="text-2xl md:hidden"
              onClick={()=> setBurger(!burger)}
            >{burger?<CiMenuBurger/>:<FaX/>}</div>
            
            {!burger &&(
              <nav id="navResponsif" className="  md:hidden flex flex-col absolute top-16 w-3/4 rounded-full text-center p-2 gap-y-2">
                {item.map((item, index)=>(
                  <a href="#" key={index} className="hover:text-green-500 p-2">{item}</a>
                ))}
              </nav>
            )}
      </header>
    </div>
  )
}

export default Navbar
