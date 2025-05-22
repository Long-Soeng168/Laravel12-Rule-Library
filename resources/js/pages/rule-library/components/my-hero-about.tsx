const MyHeroAbout = () => {
    return (
        <section className="bg-white px-6 py-16 md:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                {/* Left: Images */}
                <div className="relative h-[32rem] w-full">
                    {' '}
                    {/* Increased height */}
                    <img
                        src="/assets/demo-images/rule-images/image3.jpg"
                        alt="Library Interior"
                        className="absolute top-0 left-0 h-[85%] w-2/4 rounded-xl object-cover shadow-xl"
                    />
                    <img
                        src="/assets/demo-images/rule-images/image4.jpg"
                        alt="Bookshelves"
                        className="absolute right-0 bottom-0 h-[85%] w-2/4 rounded-xl border-4 border-white object-cover shadow-2xl"
                    />
                </div>

                {/* Right: Text */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        About Us? 
                    </h2>
                    <hr className="mt-4 mb-6 h-1 w-12 border-0 bg-yellow-400" />

                    <p className="mb-4 text-gray-600">
                        Maecenas at magna pulvinar, pharetra neque nec, condimentum mauris. Nullam sapien augue, auctor ac augue sed, fermentum
                        rhoncus nunc. Curabitur sit amet velit a lacus feugiat vestibulum.
                    </p>
                    <p className="mb-6 text-gray-600">
                        Proin ac nunc dictum, elementum turpis nec, sagittis orci. Integer nec iaculis nibh. Aenean hendrerit nibh ornare, tempor ante
                        et, bibendum ligula. Integer lobortis sodales tortor.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyHeroAbout;
