import React from 'react'
import { navigationMenu } from './NavigationMenu';

const Navigation = () => {
    return (
        <div className="h-screen sticky top-0 p-4">
            <div>
                <div className="py-5">
                    <svg 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#1DA1F2" 
                        width="40" 
                        height="40"
                    >
                        <g>
                            <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733a4.69 4.69 0 002.048-2.577 9.42 9.42 0 01-2.965 1.134 4.673 4.673 0 00-7.947 4.26A13.266 13.266 0 011.64 3.155a4.66 4.66 0 001.448 6.224 4.644 4.644 0 01-2.118-.583v.06a4.673 4.673 0 003.745 4.58 4.704 4.704 0 01-2.112.08 4.675 4.675 0 004.367 3.248A9.376 9.376 0 010 19.54a13.18 13.18 0 007.162 2.1c8.59 0 13.29-7.107 13.29-13.29 0-.2 0-.397-.015-.594a9.485 9.485 0 002.317-2.42z"></path>
                        </g>
                    </svg>
                </div>
                <div className='space-y-6'>
                    {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 item-center'>
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
