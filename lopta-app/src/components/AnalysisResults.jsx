const AnalysisResults = () => {
  return (
    <>
      <div className="ml-1 mt-10">
        <div className="w-1/3">
          <div className="mb-10">
            <label htmlFor="hour"
              className="mb-1 inline-block text-neutral-700 dark:text-neutral-200">Hour of the day</label>
            <div className="flex space-x-2 items-center mb-2">
              <span>0</span>
              <input type="range"
                className="transparent h-[4px] w-full cursor-pointer appearance-none accent-green-700 border-transparent bg-neutral-200 dark:bg-neutral-600"
                id="hour"
                min="0"
                max="24" />
              <span>24</span>
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="season"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Season</label>
            <select id="season" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option defaultValue>Select a season</option>
              <option value="Sp">Spring</option>
              <option value="Su">Summer</option>
              <option value="Au">Autumn</option>
              <option values="Wi">Winter</option>
            </select>
          </div>

          <div className="mb-10">
            <label htmlFor="gender"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Gender</label>
            <select id="season" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option defaultValue>Select a gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>

          <div className="mb-10">
            <label htmlFor="ageGroup"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Age Group</label>
            <select id="ageGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option defaultValue>Select an age group</option>
              <option value="1">0-5</option>
              <option value="2">6-10</option>
              <option value="3">11-15</option>
              <option value="4">16-20</option>
              <option value="5">21-25</option>
              <option value="6">26-35</option>
              <option value="7">36-45</option>
              <option value="8">46-55</option>
              <option value="9">56-65</option>
              <option value="10">66-75</option>
              <option value="11">76+</option>
            </select>
          </div>

          <div className="mb-10">
            <label htmlFor="weatherConditions"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Weather Conditions</label>
            <select id="weatherCondition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option defaultValue>Select a weather condition</option>
              <option value="1">Fine no high winds</option>
              <option value="2">Raining no high winds</option>
              <option value="3">Snowing no high winds</option>
              <option value="4">Fine + high winds</option>
              <option value="5">Raining + high winds</option>
              <option value="6">Snowing + high winds</option>
              <option value="7">Fog or mist</option>
            </select>
          </div>

          <div className="mb-10 flex flex-col" >
            <label htmlFor="weatherConditions"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Vehicle Age</label>
            <input
              className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vehicleAge"
              type="number"
              min="0"
              placeholder="Vehicle Age" />
          </div>
        </div>
      </div>
    </>
  )
};

export default AnalysisResults;