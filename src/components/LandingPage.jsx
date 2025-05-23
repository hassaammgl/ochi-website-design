import { FaArrowUpLong } from "react-icons/fa6"

const LandingPage = () => {
    return (
        <div className="bg-zinc-900 w-full h-screen pt-1">
            <div className="textstructure mt-52 px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((text, index) => (
                    <div key={index} className="masker">
                        <h1 className="uppercase text-[7.5vw] font-founders-grotesk font-medium tracking-tighter leading-[6vw]">{text}</h1>
                    </div>
                ))}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((text, index) => (
                    <p key={index} className="text-md font-founders-grotesk font-light tracking-tight leading-none">{text}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 text-md py-2 border-[1px] border-zinc-500 uppercase font-light rounded-full">
                        Start the Project
                    </div>
                    <div className="size-10 border-[1px] flex items-center justify-center border-zinc-500 rounded-full"><FaArrowUpLong className="rotate-45" /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage