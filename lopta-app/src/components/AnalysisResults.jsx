import { Bar } from "react-chartjs-2";
import { dayData } from '../dayData';
import { useState, useEffect } from 'react';

const AnalysisResults = () => {
  const [hour, setHour] = useState('');
  const [day, setDay] = useState('');
  const [numberDiv, setNumberDiv] = useState(false);
  const [chart1, setChart1] = useState(false);
  const [chart2, setChart2] = useState(false);
  const [accidents, setAccidents] = useState('');
  const [dayChart, setDayChart] = useState('');
  const [hourChart, setHourChart] = useState('');


  useEffect(() => {
    setHour('Select hour of the day');
    setDay('Select day of the week');
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();

    let chosenHour = hour;
    let chosenDay = day;
    let data;

    console.log(chosenHour);
    console.log(chosenDay);


    if (chosenHour !== 'Select hour of the day' && chosenDay !== 'Select day of the week') {
      let dataDay = dayData.find((part) => part.day === chosenDay);

      data = dataDay.hourResults[chosenHour];

      console.log(data.noOfAccidents);
      setAccidents(data.noOfAccidents);
      setNumberDiv(true);
      setChart1(false);
      setChart2(false);
    }

    else if (chosenHour === 'Select hour of the day' && chosenDay !== 'Select day of the week') {
      let dataDay = dayData.find((part) => part.day === chosenDay);
      let dataDayFinal = [];
      dataDay.hourResults.map((data) => dataDayFinal.push(data.noOfAccidents));
      console.log(dataDayFinal);
      setNumberDiv(false);
      setChart2(false);
      setChart1(true);
      setDayChart(dataDayFinal);
    }

    else if (chosenDay === 'Select day of the week' && chosenHour !== 'Select hour of the day') {
      let dataHour = [];

      dayData.map((day) => dataHour.push(day.hourResults[chosenHour]));
      console.log(dataHour);
      setNumberDiv(false);
      setChart1(false);
      setChart2(true);
      setHourChart(dataHour);
    }

    else {
      console.log("error");
    }
  }

  return (
    <>
      <div className="flex">
        <div className="ml-1 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="w-1/3">
              <div className="mb-10">
                <label htmlFor="hour"
                  className="mb-1 inline-block text-neutral-700 dark:text-neutral-200">Hour of the day</label>
                <select id="hour" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  onChange={(e) => setHour(e.target.value)} >
                  <option defaultValue>Select hour of the day</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>
              </div>

              <div className="mb-10">
                <label htmlFor="day"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Day</label>
                <select id="day" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary focus:border-green-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  onChange={(e) => setDay(e.target.value)} >
                  <option defaultValue>Select day of the week</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option values="Thursday">Thursday</option>
                  <option values="Friday">Friday</option>
                  <option values="Saturday">Saturday</option>
                  <option values="Sunday">Sunday</option>
                </select>
              </div>
            </div>

            <div className="mb-10">
              <button
                className="bg-secondary hover:bg-white text-white hover:text-secondary border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>

        <div>
          {numberDiv && <span>{accidents}</span>}
        </div>
      </div>
    </>
  );
};

export default AnalysisResults;