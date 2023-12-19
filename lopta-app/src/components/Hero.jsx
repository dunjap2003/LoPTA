import bgImage from '../assets/images/hero/hero-bg2.jpg'
function Hero() {
    return (
        <div name='home' className="w-full h-screen bg-tertiary flex flex-col justify-between">
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className='text-2xl text-primary'>Empowering Safe Journeys through Data Insights</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold text-primary">LoPTA - London Predictive Traffic Analysis</h1>
                </div>
                <div className='bg-tertiary'>
                    <img className='mix-blend-multiply' src={bgImage} alt="/" />
                </div>

            </div>

        </div>
    )
}

export default Hero

/*
<a href="https://www.freepik.com/free-vector/people-traveling-by-sharing-transport-using-online-application-business-persons-with-city-map-finding-direction-auto-car-rental-flat-illustration_20827852.htm#query=traffic%20analysis&position=25&from_view=search&track=ais&uuid=de4bf919-73f6-43b3-ae52-75c2205936da">Image by pch.vector</a> on Freepik
*/