import Data from "./Aside.json"
import Arrow from "../Images/Arrow";
import Link from "next/link";
import Star from "../Images/Star";

const Aside = () => {
    return (
        <div className="flex mt-10 max-lg:flex-col max-lg:items-center max-lg:p-4" >
            {/* Launched Products Today*/}
            <div className="flex-1">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div
                        className="flex items-start p-5 rounded-[10px] border border-borderLight bg-backgroundLight transition">
                        <div>
                            <h6 className="mb-1 font-semibold font-noto text-2xl text-black">Welcome to Product
                                Hunt! 👋</h6>
                            <p className="text-base font-normal text-gray">
                                The place to launch and discover new tech products.
                            </p>
                        </div>
                    </div>
                    <div className="pb-10 mt-12">
                        <div className="border-b-[1px] border-b-[#d8e1ec]  mb-5 max-lg:justify-between">
                            <h4 className="text-2xl font-semibold text-black mb-6">Top Products Launching Today</h4>
                        </div>
                        {Data?.launchedProducts?.map((product, index) => {
                            return (
                                <div key={index}  className="items-start rounded-xl flex justify-between mb-8 product p-4 max-sm:p-0">
                                    <div className="flex">
                                        <img loading="lazy" className="w-12 h-12" src={product?.image} />
                                        <div className="ml-4 max-sm:ml-2">
                                            <div
                                                className="flex items-center relative font-semibold text-base text-[#21293c] max-sm:text-sm">{product?.title} &nbsp;
                                                <Arrow/>
                                            </div>
                                            <div
                                                className="mt-2 flex items-center justify-items-start text-xs text-gray max-sm:flex-wrap">
                                                {product?.tags?.map((tag, tagIndex) => {
                                                    return (
                                                        <Link key={tagIndex} href={"/"}
                                                              className="cursor-pointer hover:underline mr-2">{tag?.title}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                            className="relative border-[1px] border-borderLight  max-w-12 rounded-[4px] px-3 py-1">
                                        <div className="flex flex-col items-center">
                                            <div>▲</div>
                                            <div className="text-xs text-gray">{product?.number}</div>
                                        </div>
                                    </button>
                                </div>
                            )
                        })}
                        <div
                            className="flex items-start p-5 rounded-[10px]  bg-[rgba(255,97,84,.1)] transition ">
                            <div className="flex items-center max-lg:flex-col">
                                <h6 className="mb-1 font-semibold font-noto text-2xl text-black max-lg:text-center">💌 Get the best of
                                    Product Hunt, directly in your inbox.</h6>
                                &nbsp; &nbsp; &nbsp;
                                <Link href='/'
                                      className="rounded-[4px] bg-[#ff6154] flex items-center  text-white text-sm font-semibold py-2.5 px-4">Sign
                                    up</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[280px] ml-16 pl-16 border-l-[1px] border-l-borderLight max-lg:border-l-0 max-lg:pl-0 max-lg:ml-0 max-lg:w-full">
                <div data-aos="fade-up" data-aos-duration="1000"
                     className="border-b-[1px] border-b-[rgba(33,41,63,.1)] pb-5">
                    <h4 className="uppercase text-xs font-semibold text-gray mb-6 ">Top reviewed products</h4>
                    {Data?.reviewedProducts?.map((product, index) => {
                        return (
                            <div key={index} className="items-start flex mb-5 max-lg:justify-between">
                                <div>
                                    <p className="relative font-semibold text-sm text-[#21293c]">{product?.title}</p>
                                    <div
                                        className="text-ellipsis font-normal mt-1  text-xs overflow-hidden line-clamp-1 text-gray">
                                        {product?.description}
                                    </div>
                                    <div className="mt-2 flex items-center justify-items-start text-xs text-gray">
                                        <Star/>
                                        &nbsp;
                                        4/5
                                    </div>
                                </div>

                                <img className="ml-5" loading="lazy" src={product?.image} width={48} height={48}/>
                            </div>
                        )
                    })}
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                     className="border-b-[1px] border-b-[rgba(33,41,63,.1)] py-7">
                    <h4 className="uppercase flex items-center text-xs font-semibold text-gray mb-6 after:content-['\2192']">Coming
                        Soon &nbsp;</h4>
                    {Data?.comingSoon?.map((product, index) => {
                        return (
                            <div key={index} className="items-start flex mb-5 max-lg:justify-between">
                                <div>
                                    <p className="relative font-semibold text-sm text-[#21293c]">{product?.title}</p>
                                    <div
                                        className="text-ellipsis font-normal mt-1  text-xs overflow-hidden line-clamp-1 text-gray">
                                        {product?.description}
                                    </div>
                                    <div className="mt-2 flex items-center justify-items-start text-xs text-gray">
                                        <Star/>
                                        &nbsp;
                                        4/5
                                    </div>
                                </div>

                                <img className="ml-5" loading="lazy" src={product?.image} width={48} height={48}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default Aside;
