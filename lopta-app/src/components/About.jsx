function About() {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-primary'>About LoPTA</h2>
                    <p className='text-3xl py-10 text-primary'>Inovative platform designed to enhance the understanding and
                        navigation of London&apos;s intricate traffic landscape.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-10 px-2 text-center'>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Our Mission</p>
                        <p className='text-primary'>At LoPTA, our mission is to revolutionize road safety in London. Through comprehensive data analysis spanning the years 2020-2022, we aim to provide predictive insights, empowering individuals to make informed decisions for safer journeys</p>
                    </div>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Data Collection Process</p>
                        <p className='text-primary'>We meticulously collected and cleansed data pertaining to traffic accidents in Greater London from 2020 to 2022. Our rigorous data cleansing process ensures precision and reliability, forming a robust foundation for in-depth analysis.</p>
                    </div>
                    <div className='bg-tertiary border py-8 rounded-xl shadow-xl p-6'>
                        <p className='text-2xl font-bold text-primary mb-2'>Research Goals</p>
                        <p className='text-primary'>Our primary objectives involve exploring the factors contributing to traffic accidents in Greater London during the specified period. By understanding these factors, we endeavor to develop a system that enhances comprehension and management of associated risks</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About