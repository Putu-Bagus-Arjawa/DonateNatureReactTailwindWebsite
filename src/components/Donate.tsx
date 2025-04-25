
const Donate = () => {
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
    <div className="mt-8 md:h-screen h-auto bg-green-700/40 flex justify-center items-center mb-14">
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 place-items-center max-w-4xl">
        {data.map((item, idx)=>(
            <div key={idx}
                className="shadow-lg bg-neutral-100 flex flex-col items-center p-6"
            >
                <div className="text-4xl">{item.icon}</div>
                <h2 className="text-2xl font-bold text-green-600/90">{item.title}</h2>
                <h2 className="text-2xl font-semibold text-green-600/60">{item.amount}</h2>
                <h2 className="text-neutral-500">{item.desc}</h2>
                <button className="shadow-md rounded-full py-2 px-4 bg-green-600/60 hover:bg-green-200">Donate</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Donate
