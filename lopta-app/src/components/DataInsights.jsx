function DataInsights() {
    return (
        <div name='data' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-primary'>Data Insights</h2>
                    <p className='text-3xl py-10 text-primary'>Discover London&apos;s accident trends and risk factors through maps, trends, and correlations.</p>
                </div>
                <div className='grid md:grid-cols-4 gap-10 px-2 text-center'>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Accident Density Maps</p>
                        <p className='text-primary'>Visual representations overlaid on London&apos;s map pinpoint accident-prone areas, providing clear insights into regions with higher occurrences.</p>
                    </div>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Temporal Trends</p>
                        <p className='text-primary'>Graphical illustrations showcasing trends and patterns of accidents over 2020-2022, offering insights into temporal variations.</p>
                    </div>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Driver & Casualty Analysis</p>
                        <p className='text-primary'>Detailed visuals depicting correlations between driver demographics, casualty details, and accident severity, aiding in understanding various risk factors.</p>
                    </div>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Weather & Road Conditions Impact</p>
                        <p className='text-primary'>Insights revealing the impact of weather conditions and road surfaces on accident frequencies, fostering an understanding of environmental influences.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataInsights