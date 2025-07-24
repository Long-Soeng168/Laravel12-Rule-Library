import { ReactNode } from 'react';
import MyFooter from './components/my-footer';
import MyNewHeader from './components/my-new-header';
import MyTopHeader from './components/my-top-header';
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="block xl:hidden p-2 px-2">
            <MyTopHeader />
            </div>
            <MyNewHeader />
            <main className="font-poppins-regular mx-auto min-h-screen">{children}</main>
            <MyFooter />
        </>
    );
};

export default Layout;
