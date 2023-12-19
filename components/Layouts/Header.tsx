import Link from 'next/link';
import Glass from "../Images/Glass";
import Logo from "../Images/Logo";
import Menus from "./Header.json"
import {useState} from "react";

const Header = (props: any) => {
    const [open, setOpen] = useState(false)
    const onMobileNav = () => {
        setOpen(open => !open);
    }
    return (
        <header>
            <div className='flex justify-between px-8 py-5 max-sm:px-0 shadow-[inset_0_0_1px_1px_rgba(33,41,63,.1)] h-20 max-md:justify-start'>
                  <span className={`menu-icon ${open ? 'open' : ''} xl:hidden`} onClick={() => onMobileNav()}>
                  <a href="#" className="menu example5"><span></span></a>
                  <div id="hamburger" className={`${open ? 'hamburgerOpen open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  </span>
                <div className="flex items-center py-5 max-xl:pl-36 max-sm:pl-14">
                    <Link href="/">
                        <Logo/>
                    </Link>
                    <div className="flex items-center ml-1 xl:ml-8 max-xl:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder='Search ( ctrl + k )'
                                className="w-full rounded-[2px] border-[1px] h-10 border-borderLight py-0 pr-5 pl-10 bg-transparent outline-none transition focus:border-secondary"
                            />
                            <Glass/>
                        </div>
                    </div>

                    <div className={`flex  navbar max-xl:flex-col max-xl:${open ? 'visible' : 'hidden'}`}>
                        {Menus?.header?.map((data, index) => {
                            return (
                                <div className="flex items-center ml-3 xl:ml-8 cursor-pointer" key={index}>
                                    <div className=' text-lightGray text-base dropdown__category dropdown__header'>
                                        <li className="dropdown__category py-4">
                                            <span className='hover:text-orange relative'>{data?.name}</span>
                                            {(data?.children?.latest || data?.children?.popular) &&
                                                <ul className="dropdown__menu">
                                                    <div className="flex my-4 max-xl:flex-col">
                                                        {data?.children?.latest && <div className="p-2">
                                                            {data?.children?.latest?.map((latest, key) => {
                                                                return (
                                                                    <div
                                                                        className="items-start flex justify-between mb-7"
                                                                        key={key}>
                                                                        <div className="flex">
                                                                            <img loading="lazy"
                                                                                 src={latest?.image}
                                                                                 className='h-8 w-8'/>
                                                                            <div className="ml-4">
                                                                                <p className="flex items-center relative font-semibold text-base text-[#21293c]">{latest?.name}</p>
                                                                                <div
                                                                                    className="mt-1 flex items-center justify-items-start text-xs text-lightGray">
                                                                                    <a className="cursor-pointer hover:underline mr-2 ">{latest?.description}</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                        }
                                                        {data?.children?.popular && <div
                                                            className="w-[max-content] ml-2 pr-14 pl-4 mt-2 border-l-[1px] border-l-borderLight max-xl:border-0">
                                                            <div data-aos="fade-up" data-aos-duration="1000"
                                                                 className="pb-8 max-xl:pb-0 flex-col justify-between">
                                                                <div className="items-start flex pb-4">
                                                                    <div>
                                                                        <p className="relative font-semibold text-sm text-[#21293c]">{data?.children?.popular?.title}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-wrap max-xl:flex-col'>
                                                                    <ul>
                                                                        {data?.children?.popular?.children?.map((popular, popKey) => {
                                                                            if (popKey % 2 !== 0) {
                                                                                return (<li key={popKey}><Link
                                                                                    className="leading-7 hover:text-orange hover:underline whitespace-nowrap font-normal mt-1  text-xs  text-lightGray"
                                                                                    href={popular?.href}>{popular?.name}</Link>
                                                                                </li>)
                                                                            }
                                                                        })}
                                                                    </ul>
                                                                    <ul>
                                                                        {data?.children?.popular?.children?.map((popular, popKey) => {
                                                                            if (popKey % 2 == 0) {
                                                                                return (<li key={popKey}><Link
                                                                                    className="leading-7 py-3.5 max-xl:ml-0 hover:text-orange hover:underline whitespace-nowrap font-normal mt-1  ml-4 text-xs  text-lightGray"
                                                                                    href={popular?.href}>{popular?.name}</Link>
                                                                                </li>)
                                                                            }
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>}
                                                    </div>
                                                </ul>}
                                        </li>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex">
                    <div className="flex items-center  cursor-pointer max-xl:hidden">
                        <Link href='/' className=' text-orange text-base   hover:text-orange max-xl:hidden'>How to post
                            ?</Link>
                    </div>
                    <div className="flex items-center ml-4 cursor-pointer max-sm:hidden">
                        <Link href='/' className=' text-lightGray text-base  hover:text-orange '>Sign in</Link>
                    </div>
                    <div className="flex items-center ml-4 cursor-pointer max-sm:hidden">
                        <Link href='/'
                              className="rounded-[4px] bg-orange flex items-center  text-white text-sm font-semibold py-2.5 px-4">Sign
                            up</Link>
                    </div>
                </div>
            </div>

        </header>
    );

};

export default Header;
