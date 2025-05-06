import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
const Hero = () => {
      const referensi = useRef<HTMLDivElement>(null);
      const isInView =  useInView(referensi, {once:false})
      const CTA = [ "Save", "Earth,", "  Start", "Today"]
  return (
    <div id="Home" className="mt-14 flex flex-col gap-y-4 justify-center items-center" ref={referensi}>
        <div className="flex flex-col text-center ">
          <div className="flex gap-x-4 justify-center">
            {CTA.map((item, index)=>(
                <motion.h3
                  key={index}
                  initial ={{ opacity: 0, y: -100 }}
                  animate = {isInView? "visible": "hidden"}
                  variants={{
                    hidden:{opacity: 0, y: -100},
                    visible:{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.5,
                        type: "spring",
                        bounce: 0.5
                      }
                    }
                  }}
                  className="text-3xl text-white font-semibold font-risque tracking-widest"
                >{item}</motion.h3>
              ))} 
          </div>
          <motion.p 
            className="text-white"
            initial ={{ opacity: 0, scale: 0, y:200}}
            animate ={{ opacity: 1, scale: 1, y:0}}
            transition ={{ duration:1, ease:"easeInOut"}}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse!</motion.p>
        </div>
        <div className="flex gap-x-4">
            <motion.button 
              className="px-4 py-2 border-white border-[1px] bg-white hover:bg-neutral-500/50 text-green-600 rounded-full"
              initial ={{ opacity: 0, scale: 0, x:-300}}
              animate ={{ opacity: 1, scale: 1, x: 0}}
              transition ={{ duration:0.5, ease:"easeInOut"}}
            >Donate Now</motion.button>
            <motion.button 
              className="px-4 py-2 border-white border-[1px] text-green-600 bg-black/50 rounded-full hover:bg-white"
              initial ={{ opacity: 0, scale: 0, x:300}}
              animate ={{ opacity: 1, scale: 1, x: 0}}
              transition ={{ duration:0.75,ease:"easeInOut"}}
            >Join Volunteer</motion.button>
        </div>
    </div>
  )
}

export default Hero
