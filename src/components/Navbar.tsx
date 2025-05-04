import { useState } from "react"
import {motion } from "motion/react"
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossedSwords } from "react-icons/gi";

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
        initial ={{ opacity:0 }}
        animate ={{ opacity:1}}
      >
            <motion.div
              initial={{ opacity: 0, x: -125}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "backOut" }}
            >
              <h2 className="text-3xl text-green-500 text-shadow-2xs font-risque">Arjawa G-Foundation</h2>
            </motion.div>

            <nav className="md:flex md:gap-x-4 hidden">
                {item.map((item, index)=>(
                    <motion.a 
                      href={`#${item.title}`} key={index} className="font-fredoka hover:text-green-500 hover:border-b-[1px] hover:border-green-500 p-2 text-[18px]"
                      whileHover={{ scale: 1.1 }}
                      whileTap ={{ scale: 0.85 }}
                      initial={{ opacity: 0, rotate: -45, y: -100}}
                      animate={{ 
                        rotate: 0,
                        opacity: 1,
                        y: 0,
                        transition:{
                          delay: index * 0.5,
                          y:{
                            type:"spring",
                            bounce: 0.5
                          }
                        }
                      }}
                    >
                        {item.title}
                    </motion.a>
                ))}
            </nav>

            <motion.div
              initial ={{ scale:1.5 }} 
              animate ={{ scale:1 }}
              transition={{ duration:1, ease: "easeInOut" }}
              className="text-2xl md:hidden"
              onClick={()=> setBurger(!burger)}
            >{burger?<RxHamburgerMenu/>:<GiCrossedSwords />}</motion.div>
            
            {!burger &&(
              <nav id="navResponsif" className="  md:hidden flex flex-col absolute top-16 w-3/4 rounded-full text-center p-2 gap-y-2">
                {item.map((item, index)=>(
                  <motion.a 
                    href={`#${item.title}`} 
                    key={index} 
                    className="hover:text-green-500 p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap ={{ scale: 0.85 }}
                    initial={{ opacity: 0, y: -100}}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition:{
                        delay: index * 0.5,
                        y:{
                          type:"spring",
                          bounce: 0.5
                        }
                      }
                    }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </nav>
            )}
      </motion.header>
    </div>
  )
}

export default Navbar
