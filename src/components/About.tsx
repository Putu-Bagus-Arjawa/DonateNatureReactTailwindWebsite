import gambar from "../assets/gpt.png"
const About = () => {
    const data = [
        {title: "Planted", value: "10K+"},
        {title: "Volunteer", value: "5k+"},
        {title: "School", value: "50+"},
        {title: "city", value: "12"},
    ]
  return (
    <div id="About" className="md:h-screen h-auto w-screen flex flex-col justify-center gap-4">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <section className="w-1/2">
                <h1 className="text-green-600 text-2xl font-semibold">Our Activity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam, labore porro iusto iure laborum laudantium praesentium rem excepturi nostrum autem dolore error culpa ab distinctio odio ipsa voluptatem saepe?</p>
            </section>
            <img src={gambar} alt="" className="w-96 h-60 rounded-lg"/>
        </div>
        <div className="bg-green-700/40 w-full md:h-1/4 h-auto shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4">
                {data.map((item, idx)=>(
                    <div 
                        key={idx}
                        className="w-1/5 h-36 flex flex-col justify-center items-center"
                    >
                        <h2 className="font-bold text-3xl text-green-800 tracking-wide">{item.value}</h2>
                        <span className="text-neutral-600">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
