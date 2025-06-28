import { Link, usePage } from '@inertiajs/react';
import MyHeadingStyle1 from './my-heading-style-1';
import { ArrowRight, LoaderIcon } from 'lucide-react';

const MyHeroAbout = () => {
    const { aboutPage } = usePage().props;
    // console.log(aboutPage);
    if (!aboutPage || aboutPage?.length === 0) {
        return <div className="container mx-auto my-10 max-w-screen-2xl px-3 text-center text-gray-500 lg:px-20 dark:text-gray-300"></div>;
    }
    return (
        <section className="bg-background px-6 pt-16 md:px-20">
            {aboutPage?.map((item) => (
                <div key={item.id} className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                    {/* Left: Images */}
                    <div className="relative h-[32rem] w-full">
                        {' '}
                        {/* Increased height */}
                        <img
                            src={`/assets/images/pages/${item?.images[0].image}`}
                            alt="Library Interior"
                            className="absolute top-0 -left-1 h-[85%] w-2/4 object-cover"
                        />
                        <img
                            src={`/assets/images/pages/${item?.images[1].image}`}
                            alt="Bookshelves"
                            className="absolute -right-1 bottom-0 h-[85%] w-2/4 object-cover"
                        />
                    </div>
                    {/* Right: Text */}
                    <div>
                        <MyHeadingStyle1 title={item.title} />
                        <div
                            className="text-foreground prose prose-strong:dark:text-white mb-4 whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: item.short_description || '---' }}
                        ></div>
                        <div className="flex justify-start">
                            <Link
                                href={`/introduction`}
                                prefetch
                                className="group relative mt-2 w-42 cursor-pointer overflow-hidden rounded-full border bg-[#263381] p-2 text-center font-semibold text-white"
                            >
                                <span
                                    className={`inline-block transition-all duration-300 ${false ? 'opacity-0' : 'translate-x-1 group-hover:translate-x-12 group-hover:opacity-0'}`}
                                >
                                    Read More
                                </span>
                                <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#263381] opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                                    Read More
                                    {false ? <LoaderIcon className="animate-spin" /> : <ArrowRight />}
                                </div>
                                <div className="absolute top-[40%] left-[20%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MyHeroAbout;
