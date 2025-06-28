import { usePage } from '@inertiajs/react';
import MyMenu from './my-menu';
import MyTopHeader from './my-top-header';

const MyNewHeader = () => {
    const { application_info } = usePage().props;
    return (
        <div>
            {/* nav and slide */}
            <div className="bg-[#393838]">
                <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-3 py-2 sm:px-10 xl:px-20">
                    <a href="/" className="flex flex-1 items-center gap-2 text-center text-base text-white md:text-xl lg:text-xl">
                        <img
                            src={`/assets/images/application_info/${application_info?.image}`}
                            width={80}
                            height={80}
                            alt="logo"
                            className="h-16 w-14 md:h-24 md:w-20"
                        />
                        <p className="font-siemreap-regular text-lg font-semibold xl:text-xl">
                            {application_info?.name_kh}
                            <br />
                            <span className="font-normal"> {application_info?.name}</span>
                        </p>
                    </a>
                    <div className='spy2'>
                        <div className='hidden xl:block mb-2 mt-2'>
                            <MyTopHeader />
                        </div>
                        <MyMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNewHeader;
