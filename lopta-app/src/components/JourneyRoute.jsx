import { FaLocationDot } from "react-icons/fa6";
import { Tb123 } from "react-icons/tb";
import { FaTransgender } from "react-icons/fa6";
import Map from "./Map";

const JourneyRoute = () => {
  return (
    <>
      <Map />
      <div className="flex flex-col items-center justify-center h-screen">

        <div>
          <h1 className="mb-4 font-bold text-2xl text-green-700">Please fill out information about your journey route.</h1>
        </div>

        <div className="w-full max-w-2xl">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex items-center justify-between">
              <div className="mb-4 py-2 px-2 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="starting address">
                  <FaLocationDot />
                  Starting address:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startingAddress"
                  type="text"
                  placeholder="Starting address"
                />
              </div>
              <div className="mb-4 py-2 px-2 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="destination address">
                  <FaLocationDot />
                  Destination address:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="destinationAddress"
                  type="text"
                  placeholder="Destination address"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="age">
                <Tb123 />
                Age:
              </label>
              <input
                className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder="Age"
              />
            </div>

            <div className="flex flex-col items-center justify-center mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="gender">
                <FaTransgender />
                Gender:
              </label>
              <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                <option selected>Select a gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JourneyRoute;