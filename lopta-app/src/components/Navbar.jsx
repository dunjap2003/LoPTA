import { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import logo from '../assets/images/logo/svg/logo-no-background.svg';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-30 bg-tertiary fixed'>
            <div className='px-2 flex justify-between items-center  w-full h-full '>
                <div className='flex items-center px-3'>
                    <a className="text-2xl font-semibold flex items-center space--3 text-primary" href="/"><img className='w-12 inline-block items-center' src={logo} alt="logo" /> <span className="ml-5 font-bold">LoPTA</span></a>
                </div>
                <div>
                    {props.screen === 'Home' && (
                        <ul className='hidden md:flex text-primary uppercase hover:cursor-pointer'>
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                            <li><Link to="planYourRoute" smooth={true} offset={-50} duration={500}>Plan Your Route</Link></li>
                            <li><Link to="data" smooth={true} offset={-100} duration={500}>Data Insights</Link></li>
                        </ul>
                    )}
                </div>
                <div className='hidden md:flex pr-4 uppercase'>
                    <a key="predict" href="predict" className="px-8 py-2 mx-1 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Predict</a>
                    <a key="result" href="result" className="px-8 py-2 mx-1 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Result</a>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <AiOutlineMenu className='w-5' /> : <IoMdClose className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 text-center'}>
                {
                    props.screen === 'Home' && (
                        <>
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                            <li><Link to="planYourRoute" smooth={true} offset={-50} duration={500}>Plan Your Route</Link></li>
                            <li><Link to="data" smooth={true} offset={-100} duration={500}>Data Insights</Link></li>
                        </>
                    )
                }


                <div className='flex flex-col my-4 uppercase'>
                    <a key="predict" href="predict" className="px-8 py-2 my-1 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Predict</a>
                    <a key="result" href="result" className="px-8 py-2 my-1 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Result</a>
                </div>
            </ul>
        </div>
    );
};
export default Navbar;

/*

const Navbar = () => {
    return (
        <div className="w-screen h-[80px] z-10 bg-tertiary fixed drop-shadow-lg">
            <div className="flex items-center justify-between space-x-20 px-2 w-full h-full">
                <div className='z-30'>
                    <a className="text-2xl font-semibold flex items-center space--3 text-primary" href="/"><img className='w-12 inline-block items-center' src={logo} alt="logo" /> <span className="ml-5 font-bold">LoPTA</span></a>
                </div>
                <div className="hidden items-center space-x-10 uppercase text-primary md:flex">
                    <a key="overview" href="overview" className="tracking-widest hover:text-secondary">overview</a>
                    <a key="features" href="features" className="tracking-widest hover:text-secondary">features</a>
                    <a key="about" href="about" className="tracking-widest hover:text-secondary">About</a>
                    <a key="predict" href="predict" className="px-8 py-2 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Predict</a>
                    <a key="result" href="result" className="px-8 py-2 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Result</a>
                </div>
                <div className='md:hidden'>
                    <AiOutlineMenu className='w-5' />
                </div>
            </div>


            <div className='bg-tertiary absolute w-full px-8 uppercase md:hidden'>
                <a key="overview" href="overview" className="block w-full py-3 border-b-2 tracking-widest hover:text-secondary">overview</a>
                <a key="features" href="features" className="block w-full py-3 border-b-2 tracking-widest hover:text-secondary">features</a>
                <a key="about" href="about" className="block w-full border-b-2  tracking-widest hover:text-secondary">About</a>
                <a key="predict" href="predict" className="block w-full border-b-2 px-8 py-3 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Predict</a>
                <a key="result" href="result" className="block w-full border-b-2 px-8 py-3 text-white bg-secondary border-2 border-secondary rounded-lg shadow-md hover:text-secondary hover:bg-white">Result</a>
            </div>

        </div>
    );
};
export default Navbar;

*/