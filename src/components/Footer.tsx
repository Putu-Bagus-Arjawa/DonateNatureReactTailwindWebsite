import { BsTiktok, BsTwitterX } from "react-icons/bs"
import { CgInstagram } from "react-icons/cg"



const Footer = () => {
    const link = ["About", "Program", "Donate"]
    const followUs =[<CgInstagram/>, <BsTiktok/>, <BsTwitterX/>]


  return (
    <div className="flex flex-col py-6 px-12 gap-y-4 bg-green-900">
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-y-6">
        <div className="max-w-1/2">
            <h1 className="text-2xl text-white font-bold mb-4">ArjawaGreen Foundation</h1>
            <p className="text-white">Jalan Bypass No.666</p>
            <p className="text-white">arjawagreen@foundation.org</p>
        </div>
        <div className="min-w-1/3 flex justify-between">
            <div className="flex flex-col gap-y-2">
                <h2 className="text-white font-semibold">Links</h2>
                <div className="flex flex-col">
                    {link.map((item)=>(
                        <a href="" className="text-white hover:border-b-[1px] hover:border-white hover:text-green-500">{item}</a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <h2 className="text-white font-semibold">Follow Us</h2>
                <div className="flex gap-x-4">
                    {followUs.map((item)=>(
                        <a href="" className="text-white hover:text-green-500 text-[18px]">{item}</a>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <div className=" border-t-[.5px] flex justify-center pt-6">
        <p className="text-white/50">© ArjawaGreen Foundation. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
