import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import {  FaX } from "react-icons/fa6";
import { AnimatePresence, motion, scale, useAnimation } from "motion/react"

const Navbar = () => {
    const item = [
      {title:'Home'},
      {title: 'About'},
      { title: 'Programs'},
      {title: 'Donasi'},
    ]
    const [burger, setBurger] = useState(true);

  return (
    <div>
      <motion.header 
        className="flex justify-around items-center shadow-xl p-2 fixed w-full top-0 left-0 right-0 z-10" 
        id="headerNav"
        initial ={{ opacity:0, y:-50 }}
        animate ={{ opacity:1, y: 0 }}
        transition={{ type:"spring", bounce:0.50 }}
      >
            <motion.div whileHover={{ scale:1.05 }}>
              <h2 className="text-3xl text-green-500 text-shadow-2xs font-risque">Arjawa G-Foundation</h2>
            </motion.div>

            <nav className="md:flex md:gap-x-4 hidden">
                {item.map((item, index)=>(
                    <motion.a 
                      href={`#${item.title}`} key={index} className="font-fredoka hover:text-green-500 hover:border-b-[1px] hover:border-green-500 p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap ={{ scale: 0.85 }}
                    >
                        {item.title}
                    </motion.a>
                ))}
            </nav>

            <div 
              className="text-2xl md:hidden"
              onClick={()=> setBurger(!burger)}
            >{burger?<CiMenuBurger/>:<FaX/>}</div>
            
            {!burger &&(
              <nav id="navResponsif" className="  md:hidden flex flex-col absolute top-16 w-3/4 rounded-full text-center p-2 gap-y-2">
                {item.map((item, index)=>(
                  <a href={`#${item.title}`} key={index} className="hover:text-green-500 p-2">{item.title}</a>
                ))}
              </nav>
            )}
      </motion.header>
    </div>
  )
}

export default Navbar
