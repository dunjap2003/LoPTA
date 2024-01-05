import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Map from "./Map";

function JourneyRoute() {
  const [startingAddress, setStartingAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [messages, setMessage] = useState(new Set());
  const [calculateButton, setCalculateButton] = useState(false);
  const [finalData, setFinalData] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();


    if (checkbox) {
      if (!startingAddress || !destinationAddress) {
        if (!startingAddress) {
          setMessage(prevMessages => new Set([...prevMessages, "Starting Address"]));
        }

        if (!destinationAddress) {
          setMessage(prevMessages => new Set([...prevMessages, "Destination Address"]));
        }
        return;
      }

      else {
        setMessage(new Set());
      }
    }

    try {
      let post = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: JSON.stringify({
          startingAddress: startingAddress,
          destinationAddress: destinationAddress,
          checkbox: checkbox,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (post.ok) {
        let finalData = await post.json();
        setFinalData(finalData);
        console.log(finalData);
        setCalculateButton(true);
        setStartingAddress("");
        setDestinationAddress("");

        setMessage(["Form submitted successfully"]);
        console.log(post.status);
      } else {
        let errorMessages = await post.json();
        console.log("Error response:", errorMessages);
        setMessage(errorMessages);
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
      <div className="flex">
        <div className="flex text-red-500 font-bold text-2xl pt-10">
          {messages.size > 0 && (
            <p>You must fill out the following fields: {Array.from(messages).join(", ")}. </p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <h1 className="mb-4 font-bold text-2xl text-primary"></h1>
          </div>

          <div className="w-full max-w-2xl">
            <form className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4" onSubmit={handleSubmit}>
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
              <div className="flex items-center justify-center mt-20">
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
        </div>
        <Map calculateButton={calculateButton} finalData={finalData} />
      </div>

    </>
  );
}

export default JourneyRoute;