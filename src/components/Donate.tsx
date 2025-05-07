
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Donate = () => {
    const refer = useRef<HTMLDivElement>(null);
    const isInView = useInView(refer, { once: false });
    const data =[
        {
            title: "3 Tree",
            amount: "Rp.200.000",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
            icon: "🪴"
        },
        {
            title: "School Package",
            amount: "Rp.50.000",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
            icon: "📒"
        },
        {
            title: "Custom Amount",
            amount: "Any",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam?",
            icon: "💚"
        },
    ]
  return (
    <div  className="mt-8 md:h-screen h-auto bg-green-700/40 flex flex-col justify-center items-center mb-14 p-8" id="Donasi" ref={refer}>
      <h3 className="text-green-700 font-risque text-3xl font-semibold mb-8">Donate Now</h3>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 place-items-center max-w-xl md:max-w-5xl">
        {data.map((item, idx)=>(
            <motion.div key={idx}
                className="shadow-lg bg-neutral-100 flex flex-col items-center p-6 w-4/5 md:w-auto"
                initial = {{ opacity: 0, y: -200 }}
                animate = {isInView? "visible": "hidden"}
                variants={{
                  hidden: {opacity: 0, y: -200},
                  visible: {opacity: 1, y: 0, transition:{
                    type:"spring",
                    bounce: 0.6,
                    delay: idx * 0.5
                  }}
                }}
            >
                <div className="text-4xl">{item.icon}</div>
                <h2 className="font-risque text-2xl font-bold text-green-600/90">{item.title}</h2>
                <h2 className="font-fredoka text-2xl font-semibold text-green-600/60">{item.amount}</h2>
                <h2 className="text-neutral-500 font-fredoka">{item.desc}</h2>
                <button className="shadow-md rounded-full py-2 px-4 bg-green-600/60 hover:bg-green-200">Donate</button>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Donate
