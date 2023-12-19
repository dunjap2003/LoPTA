import userInput from '../assets/images/userinput/userInput.jpg'
import riskAssessment from '../assets/images/riskAssessment/riskAssessment.jpg'
import parameterImpact from '../assets/images/parameterImpact/parameterImpact.jpg'
import { useState } from 'react'
const Menu = [
    {
        id: 1,
        title: "User Input",
        image: userInput,
        description: "Input your journey details – starting point, destination, and additional parameters like weather conditions, time of day, and driver details – to receive a personalized risk assessment for your London travel."
    },
    {
        id: 2,
        title: "Risk Assessment",
        image: riskAssessment,
        description: "Dynamic visual output displaying the risk assessment on a map, indicating varying risk levels along your route for informed decision-making."
    },
    {
        id: 3,
        title: "Parameter Impact Visualization",
        image: parameterImpact,
        description: "Visual representations showcasing the influence of selected parameters on the calculated risk, enabling users to understand the factors contributing to potential accidents."
    }
]

function PredictiveToolSection() {

    const [activeTab, setActiveTab] = useState(1)
    const handleClick = (id) => { setActiveTab(id) }
    const checkActive = (id, className) => activeTab === id ? className : 'py-5'




    return (
        <div name='planYourRoute' className='relative mx-auto my-6 mb-32 mt-8 px-6'>

            <div className="bg-tabs"></div>
            <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
                {Menu.map((item, index) => (
                    <div
                        key={index} // Ensure each item has a unique key when using map
                        className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                        data-target={`panel-${index + 1}`}
                        onClick={() => handleClick(item.id)} // Dynamically set data-target value
                    >
                        <div className={`${checkActive(item.id, "py-5 border-b-4 border-softRed")}`} data-target={`panel-${index + 1}`}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
            <div id="panels" className="container mx-auto">
                {Menu.map((item, index) => (
                    <div
                        key={index} // Ensure each item has a unique key when using map
                        className={`flex flex-col py-5 md:flex-row md:space-x-7 panel ${checkActive(item.id, "active")} panel-${index + 1}`}
                    >
                        <div className="flex justify-center md:w-1/2">
                            <img
                                src={item.image}
                                alt=""
                                className="relative z-10 mix-blend-multiply"
                            />
                        </div>


                        <div className="flex flex-col items-center md:items-start justify-center space-y-8 md:w-1/2">
                            <h3 className="mt-32 text-5xl font-semibold text-center md:mt-0 md:text-left text-primary">
                                {item.title}
                            </h3>
                            <p className="max-w-md text-center text-xl text-primary md:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PredictiveToolSection