import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from '../../App';
import Header from './Header';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <App>
            {/* BEGIN MAIN CONTAINER */}
            <div>
                <div className="flex min-h-screen flex-col font-noto text-base font-normal">
                    <Header />
                    <div className="flex-grow overflow-x-hidden">{children}</div>
                </div>
            </div>
        </App>
    );
};

export default DefaultLayout;
