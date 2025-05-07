import { useRef } from "react";
import gambar from "../assets/gpt.png"
import {motion, useInView } from "motion/react"

const About = () => {
    const data = [
        {title: "Planted", value: "10K+"},
        {title: "Volunteer", value: "5k+"},
        {title: "School", value: "50+"},
        {title: "city", value: "12"},
    ]

    const ref = useRef<HTMLDivElement>(null);
    const isInView =  useInView(ref, {once:false})
  return (
    <div id="About" className="md:h-screen h-auto w-screen flex flex-col justify-center gap-4 p-8" ref={ref}>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.section className="w-1/2" 
                initial={{ opacity:0, scale: -0.25 }}
                animate={isInView? { opacity:1, scale:1 }:{}}
                transition={{ duration:1, ease: "easeInOut" }}
            >
                <motion.h1 
                    className="text-green-600 text-2xl font-semibold font-risque tracking-widest"
                    initial ={{ opacity:0, x: 300 }}
                    animate = {isInView?{ opacity:1, x: 0 }: {}}
                    transition={{ duration:1, ease:"easeInOut" }}
                >
                    Our Activity
                </motion.h1>
                <p className="font-fredoka text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam, labore porro iusto iure laborum laudantium praesentium rem excepturi nostrum autem dolore error culpa ab distinctio odio ipsa voluptatem saepe?</p>
            </motion.section>
            <motion.img 
                src={gambar} alt="" className="w-96 h-60 rounded-lg"
                initial ={{ opacity: 0, scale: 0, x:-50}}
                animate = {isInView? {opacity:1, scale:1, x: 0 }:{}}
                transition={{ duration:1, ease:"easeInOut" }}
            />
        </div>
        <div className="bg-green-700/40 w-full md:h-1/4 h-auto shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4">
                {data.map((item, idx)=>(
                    <motion.div 
                        key={idx}
                        className="w-1/5 h-36 flex flex-col justify-center items-center"
                        initial= {{ opacity:0, scale: 0, y: 100 }}
                        animate = {isInView?{ opacity:1, scale:1,y: 0 }: {}}
                        transition={{ duration: 1.5, ease:"easeInOut" }}
                    >
                        <h2 className="font-bold text-3xl text-green-800 tracking-wide font-fredoka">{item.value}</h2>
                        <span className="text-neutral-600 font-fredoka">{item.title}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
