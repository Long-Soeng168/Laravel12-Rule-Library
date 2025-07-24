import { UserIconAnimated } from '@/components/animated-icons/User';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/hooks/use-initials';
import { Link, usePage } from '@inertiajs/react';
import { MyLanguage } from './my-language';
import MyToggleSwitches from './my-toggle-switches';

const MyTopHeader = () => {
    const getInitials = useInitials();
    const { auth } = usePage().props;
    const { application_info } = usePage().props;
    return (
        <div className="bg-transparent">
            <div className="text-foreground mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-2 text-sm lg:justify-end">
                {/* Left Section (Language Switcher) */}
                <div className="flex gap-3">
                    {/* <div className="flex items-center gap-1">
                    <Phone size={16} />
                    <span className="truncate">{application_info?.phone}</span>
                </div> */}
                    <div className="flex-shrink-0">
                        <MyLanguage />
                    </div>
                </div>

                {/* Right Section (Phone + Login) */}
                <div className="flex min-w-0 flex-wrap items-center justify-end gap-3">
                    {/* <div className="flex items-center gap-1">
                        {auth?.user ? (
                            <Link prefetch href="/dashboard">
                                <Avatar className="bg-true-primary-six size-8 overflow-hidden rounded-full">
                                    <AvatarImage src={`/assets/images/users/thumb/${auth?.user?.image}`} alt={auth?.user?.name} />

                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:text-white">
                                        {getInitials(auth?.user?.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        ) : (
                            <Link prefetch href="/login">
                                <Button size="icon" variant="outline" className="text-primary bg-white hover:bg-white">
                                    <UserIconAnimated stroke="#0471c1" />
                                </Button>
                            </Link>
                        )}
                    </div> */}
                  <MyToggleSwitches/>
                </div>
            </div>
        </div>
    );
};

export default MyTopHeader;
