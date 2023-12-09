import logo from '../assets/logo.png'
import { CiMap } from "react-icons/ci";
import { GoGraph } from "react-icons/go";

const Navigation = () => {
   const navigationItems = [
      { link: "Route", path: "route" },
      { link: "Analysis Results", path: "analysisResults" }
   ]

   return (
      <nav>
         <div>
            <div className="space-x-14 flex justify-between items-center mr-4">
               <a href="/" className='text-5xl font-black flex items-center space-x-3' ><img src={logo}
                  alt="" className="object-fill h-16 w-16" /><span>LoPTA</span>
               </a>

               <ul className="flex space-x-28 items-center font-bold text-3xl">
                  <li className="hover:text-gray-300">
                     <a href={navigationItems[0].path} className="block flex items-center"><CiMap className="text-4xl" />
                        {navigationItems[0].link}
                     </a>
                  </li>
                  <li className="hover:text-gray-300">
                     <a href={navigationItems[1].path} className="block flex items-center"><GoGraph className="text-3xl" />
                        {navigationItems[1].link}
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navigation;