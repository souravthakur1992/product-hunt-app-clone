import Image from "next/image";
import Data from "./Main.json"

const Main = () => {
    return (
        <div className="flex justify-items-start py-3 border-b-[1px] border-b-[rgba(33,41,63,.1)] max-xl:justify-center"
             data-aos="fade-up" data-aos-duration="1000">
            <div className="border-r-[2px] border-r-borderLight flex justify-items-start max-xl:border-r-0">
                {Data?.topLinks?.mainTopics?.map((topic, index) => {
                    return (
                        <div key={index}
                             className={`rounded-3xl mr-4 flex justify-between items-center w-full px-3 max-xl:py-1 max-xl:px-4 text-xs font-black  ${index % 2 == 0 ? "bg-black text-white" : "bg-white text-gray border border-borderLight"}`}>
                            <Image src={topic?.image} alt={""} width={16} height={13}/>
                            <span className={"ml-1"}>{topic?.title}</span>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-items-start max-xl:hidden" data-aos="fade-up" data-aos-duration="1000">
                <div
                    className="rounded-3xl  flex justify-between items-center max-w-[200px] text-black py-1 px-3 text-sm font-black">
                    Trending topics:
                </div>
                {Data?.topLinks?.trendingTopics?.map((topic, index) => {
                    return (
                        <div key={index}
                             className="rounded-3xl mr-4 flex justify-between items-center border-borderLight max-w-[220px] bg-darkGray py-1 px-4 text-sm font-semibold text-gray">
                            {topic?.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Main
