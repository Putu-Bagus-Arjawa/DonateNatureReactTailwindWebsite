
const Hero = () => {
  return (
    <div id="hero" className="mt-14 z-0 flex flex-col gap-y-4 justify-center items-center">
        <div className="flex flex-col text-center">
          <h3 className="text-3xl text-white font-semibold tracking-widest">Save Earth, Start Today</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse!</p>
        </div>
        <div className="flex gap-x-4">
            <button className="px-4 py-2 border-white border-[1px] bg-white hover:bg-neutral-500/50 text-green-600 rounded-full">Donate Now</button>
            <button className="px-4 py-2 border-white border-[1px] text-green-600 bg-black/50 rounded-full hover:bg-white">Join Volunteer</button>
        </div>
    </div>
  )
}

export default Hero
