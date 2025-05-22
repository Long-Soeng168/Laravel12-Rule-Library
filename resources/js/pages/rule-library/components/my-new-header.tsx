import MyMenu from './my-menu';

const MyNewHeader = () => {
    return (
        <div>
            {/* nav and slide */}
            <div className="mt-1 bg-[#393838]">
                <div className="mx-auto flex max-w-screen-2xl gap-2 items-center px-3 py-5 sm:px-10 xl:px-20">
                    <a href="/" className="flex flex-1 items-center gap-2 text-center text-base text-white md:text-xl lg:text-xl">
                        <img
                            src="/assets/rule-library/images/rule-logo.png"
                            width={90}
                            height={90}
                            alt="logo"
                            className="h-16 w-14 md:h-24 md:w-20"
                        />
                        <p className="text-[10px] xl:text-xl font-semibold">
                            សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្រ្ដ និងវិទ្យាសាស្រ្ដសេដ្ឋកិច្ច
                            <br />
                            <span className="font-normal">Royal University of Law and Economics </span>
                        </p>
                    </a>
                    <MyMenu />
                </div>
            </div>
        </div>
    );
};

export default MyNewHeader;
