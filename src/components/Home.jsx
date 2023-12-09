import map from '../assets/london_map.jpg'

const Home = () => {
   return (
     <div className="md:px-12 p-20 flex items-center justify-center">
       <div className="md:w-1/2 md:mr-8">
         <img src={map} alt="" className="lg:h-[490px] w-full object-cover" />
       </div>
 
       <div className="md:w-1/2">
         <p className="font-bold text-center justify-center text-xl">
           LoPTA, or London Predictive Traffic Analysis, is an innovative platform designed to enhance the understanding and navigation of London's intricate traffic landscape. With LoPTA, users have the option to choose between two distinct features. The Route option empowers users to input their starting and destination addresses, select their mode of transportation, specify gender, and more. This comprehensive input enables LoPTA to not only generate a detailed map of the suggested route but also provides valuable insights into locations with the highest frequency of traffic accidents spanning the years 2020 to 2022. For those seeking broader insights, the Analysis Results feature offers an interactive display of comprehensive traffic accident data in London, covering the same period. This multifaceted tool aims to provide users with a comprehensive and dynamic understanding of traffic patterns and safety considerations within the bustling metropolis.
         </p>
       </div>
     </div>
   );
 };
 
 export default Home;