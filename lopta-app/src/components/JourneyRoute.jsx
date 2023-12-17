import { FaLocationDot } from "react-icons/fa6";
import { Tb123 } from "react-icons/tb";
import { FaTransgender } from "react-icons/fa6";
import { useState } from "react";
import Map from "./Map";

const JourneyRoute = () => {
  const [startingAddress, setStartingAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Select a gender');
  const [checkbox, setCheckbox] = useState(false);
  const [messages, setMessage] = useState(new Set());

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkbox) {
      if (!age) {
        setMessage(prevMessages => new Set([...prevMessages, "Age"]));
        return;
      }

      else if (gender == 'Select a gender') {
        setMessage(prevMessages => new Set([...prevMessages, "Gender"]));
      }

    } else {
      if (!age) {
        setMessage(prevMessages => new Set([...prevMessages, "Age"]));
        return;
      }

      else if (gender == 'Select a gender') {
        setMessage(prevMessages => new Set([...prevMessages, "Gender"]));
        return;
      }

      else if (!startingAddress) {
        setMessage(prevMessages => new Set([...prevMessages, "Starting Address"]));
        return;
      }

      else if (!destinationAddress) {
        setMessage(prevMessages => new Set([...prevMessages, "Destination Address"]));
        return;
      }
    }

    try {
      let post = await fetch("http://localhost:8000/journeyRoute", {
        method: "POST",
        body: JSON.stringify({
          startingAddress: startingAddress,
          destinationAddress: destinationAddress,
          age: age,
          gender: gender,
          checkbox: checkbox
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (post.ok) {
        let postJSON = await post.json();
        setStartingAddress("");
        setDestinationAddress("");
        setGender("");
        setMessage("");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
      setMessage("An error occurred while processing your request");
    }
  };

  const onChangeCheckBox = (e) => {
    setCheckbox(e.target.checked);
  };

  return (
    <>
      {messages.size > 0 && (
        <p className="flex text-red-500 font-bold text-2xl pt-10 pl-24">
          {messages.size === 1
            ? `You must fill out the following field: ${Array.from(messages)[0]}.`
            : `You must fill out the following fields: ${Array.from(messages).join(", ")}.`}
        </p>
      )}
      <div className="flex items-center w-full">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <h1 className="mb-4 font-bold text-2xl text-green-700">Please fill out information about your journey route.</h1>
          </div>

          <div className="w-full max-w-2xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div>
                <input type="checkbox" className="pr-2" checked={checkbox} onChange={onChangeCheckBox} />
                I would like to enter my starting and destination addresses directly, instead of pointing on the map.
              </div>
              {checkbox && (
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
                      onChange={(e) => setStartingAddress(e.target.value)}
                      required={checkbox}
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
                      onChange={(e) => setDestinationAddress(e.target.value)}
                      required={checkbox}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col items-center justify-center mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="age">
                  <Tb123 />
                  Age:
                </label>
                <input
                  className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  type="number"
                  min="0"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col items-center justify-center mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center" htmlFor="gender">
                  <FaTransgender />
                  Gender:
                </label>
                <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-green-500 focus:border-green-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  onChange={(e) => setGender(e.target.value)}
                  required>
                  <option defaultValue>Select a gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
        <Map />
      </div>

    </>
  );
};

export default JourneyRoute;