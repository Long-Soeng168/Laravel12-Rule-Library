import { usePage } from "@inertiajs/react";

const MyHeroSection = () => {
    const { heroSection } = usePage().props;
    return (
        <section className="mx-auto max-w-screen-2xl bg-white px-4 pt-10 sm:px-8 md:px-16 lg:px-20">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                {/* Left: Image */}
                <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-md">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={`/assets/images/pages/${heroSection?.images?.[0]?.image}`}
                        alt="Hero Image"
                    />
                </div>
                {/* Right: Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{heroSection?.title}</h2>
                    <hr className="my-4 h-1 w-16 border-0 bg-yellow-400" />
                    <p className="mb-6 leading-relaxed text-gray-600 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: heroSection?.short_description || '' }} />
                   
                    <a href={heroSection?.type ? heroSection?.link : heroSection?.content}  className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:cursor-pointer hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MyHeroSection;
