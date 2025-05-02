import { BsArrowRight } from "react-icons/bs"
import img from "../assets/gpt.png"
import img2 from "../assets/room.png"

const Programs = () => {
    const data = [

        {
            title: "Program", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img
        },
        {
            title: "Program2", 
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque eos voluptatem earum molestiae, quia dolorum. Natus minima quae illo dicta in, doloremque eum vero dolorem eius asperiores, beatae veniam!",
            url: img2 

        },
    ]
  return (
    <div id="Programs" className="md:h-screen h-auto flex flex-col items-center gap-y-4 mt-8">
        <h1 className="font-bold text-green-700 text-4xl tracking-wide">Our Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 p-4">
            {data.map((item, idx)=>(
                <div key={idx} className="shadow-xl border-green-600 rounded-lg border-[1px] p-4">
                    <div className="flex justify-center">
                        <img src={item.url} alt="" className="w-4/5 h-50 object-center"/>
                    </div>
                    <h2 className="font-semibold text-2xl text-green-700">{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href="#" className="flex gap-x-4 justify-center items-center text-green-700">Learn More <BsArrowRight/></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
