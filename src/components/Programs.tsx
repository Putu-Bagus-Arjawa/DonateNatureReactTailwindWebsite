import { BsArrowRight } from "react-icons/bs"
import img from "../assets/gpt.png"
import img2 from "../assets/room.png"
import img3 from "../assets/gpt.png"
import { useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { GrFormPrevious } from "react-icons/gr"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Programs = () => {
    const refer = useRef<HTMLDivElement>(null);
    const isInView = useInView(refer, { once: false });
    const data = [

        {
            title: "Tree Planting", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img
        },
        {
            title: "Educating", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img2 
        },
        {
            title: "Wild Animal Reservation", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img3 
        },
        {
            title: "Kompos", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img3 
        },
    ]
    const [curIdx, setCurIdx] = useState(0)
    const [view, setView] = useState(2)

    const handleView =()=>{
        if(window.innerWidth <= 1023){
            setView(1)
        }else{
            setView(2)
        }
    }

    useEffect(()=>{
        handleView();

        const handleResize = ()=>{
            handleView();
        }

        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const postMax = Math.max(data.length - view, 0)
    const handleNext = ()=>{
        setCurIdx(prev => (prev >= postMax? 0: prev +1))
    }

    const handlePrev = ()=>{
        setCurIdx(prev => (prev <= 0? postMax: prev -1))
    }


  return (
    <div id="Programs" className="md:min-h-screen h-auto flex flex-col items-center gap-y-4 mt-8" ref={refer}>
        <motion.h1 
            className="font-bold text-green-700 text-4xl tracking-wide font-risque"
            initial = {{ opacity: 0, x: -300, rotate: -135, y: -300 }}
            animate= {isInView?{opacity: 1, x: 0, rotate: 0, y: 0, transition: {duration: 1.25, ease: "easeInOut"}}:{}}
        >Our Programs</motion.h1>
        <div className="flex justify-center">
            <button 
                onClick={()=> handlePrev()}
                ><GrFormPrevious/></button>
            <div className="max-w-2/3 grid grid-cols-1  lg:grid-cols-2 gap-x-4 gap-y-4 p-4">
                {data.slice(curIdx, view + curIdx).map((item, idx)=>(
                    <motion.div 
                        key={idx} 
                        className="border-green-600 rounded-lg border-[1px] p-4 shadow-xl md:w-4/5 w-full lg:w-auto"
                        initial = {idx % 2 ==0?{ opacity: 0, x: -300}: {opacity: 0, x: 300}}
                        animate= {isInView? {opacity: 1, x: 0, transition: {type:"spring", delay: idx * 0.5, bounce: 0.5}}:{}}
                    >
                        <div className="flex justify-center">
                            <img src={item.url} alt="" className="w-4/5 h-50 object-center"/>
                        </div>
                        <h2 className="font-semibold text-2xl text-green-700 font-risque">{item.title}</h2>
                        <p className="font-fredoka">{item.desc}</p>
                        <a href="#" className="flex gap-x-4 justify-center items-center text-green-700 font-risque">Learn More <BsArrowRight/></a>
                    </motion.div>
                ))}
            </div>
            <button  onClick={()=>handleNext()}><MdNavigateNext/></button>
        </div>
    </div>
  )
}

export default Programs


