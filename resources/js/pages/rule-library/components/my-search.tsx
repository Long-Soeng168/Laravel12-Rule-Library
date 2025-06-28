import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

const MySearch = () => {
    const { application_info } = usePage().props;
    const headerRef = useRef(null);
    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: [1] },
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="bg-[#393838] dark:bg-black">
                <div className="mx-auto max-w-screen-2xl px-3 pt-4 text-base font-semibold text-white sm:px-10 sm:text-xl lg:px-20 lg:text-2xl">
                    One Search
                </div>
            </div>

            <div ref={sentinelRef} />

            <div
                ref={headerRef}
                className={`sticky top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-300 ease-in-out ${
                    isSticky ? 'bg-background/50' : 'bg-[#393838]'
                }`}
            >
                <div className="mx-auto flex max-w-screen-2xl items-center justify-center px-3 py-4 sm:px-10 lg:px-20">
                    {/* Logo container with animated width */}
                    <motion.div
                        animate={{ width: isSticky ? '56px' : '0px' }} // 56px = w-14
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`flex flex-shrink-0 items-center justify-center overflow-hidden ${isSticky && 'mr-4'}`}
                    >
                        <AnimatePresence>
                            {isSticky && (
                                <motion.a
                                    href="/"
                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                >
                                    <img
                                        src={`/assets/images/application_info/${application_info?.image}`}
                                        className="w-12 lg:w-16"
                                        alt="Application Logo"
                                    />
                                </motion.a>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Search Form */}
                    <form
                        action="https://www.elibrary-rule.com/one_search"
                        method="GET"
                        className="flex flex-1 flex-row items-center justify-center gap-2 rounded-full border bg-white py-0 pr-0 shadow-xl focus-within:ring-1 focus-within:ring-yellow-400"
                    >
                        <label htmlFor="search-bar" className="sr-only">
                            Search
                        </label>
                        <input
                            id="search-bar"
                            name="search"
                            placeholder="Search by: Title, ISBN, Author..."
                            className="w-full rounded-full bg-white px-4 py-2 text-sm text-black outline-none sm:text-base"
                        />
                        <Button
                            type="submit"
                            className="rounded-full border border-yellow-500 bg-yellow-400 px-3 py-2 font-semibold text-white transition-all duration-200 hover:border-yellow-600 hover:bg-yellow-500 active:scale-95"
                        >
                            <span className="text-sm font-semibold">Go</span>
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MySearch;
