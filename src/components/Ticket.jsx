import React, { useEffect, useState } from 'react';
import ticketImage from '../assets/images/pattern-ticket.svg';
import githubImage from '../assets/images/icon-github.svg';
import logo from '../assets/images/logo-full.svg';
import { useNavigate } from 'react-router-dom';

const Ticket = ({ avatarImage, githubUsername, username, email }) => {
    const [avatarUrl, setAvatarUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!avatarImage || !githubUsername || !username || !email) {
            navigate('/conference-ticket-generator/');
        }
        if (avatarImage) {
            const url = URL.createObjectURL(avatarImage);
            setAvatarUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [avatarImage]);

    return (
        <div className='max-w-[800px] mx-auto p-[1rem] flex flex-col items-center'>
            <h1 className="font-extrabold text-center text-white mb-4 text-[clamp(1rem,3vw+0.5rem,4vw)]">            
                Congrats, <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>{username}</span><br />
                Your ticket is ready.
            </h1>
            <p className='text-center text-gray-300 mb-[1rem]'>
                We&apos;ve emailed your ticket to<br />
                <span className='text-orange-500 font-semibold'>{email}</span> and will send updates in<br />
                the run-up to the event.
            </p>

            <div className='relative inline-block mt-[3rem] '>
                <img
                    src={ticketImage}
                    alt='Your event ticket, showing event details'
                    className='w-[23rem]'
                />
                <span className='absolute top-[43%] right-[3%] transform rotate-90 text-gray-200 text-sm'>
                    #10906
                </span>

                <div className='absolute left-[20px] top-[20px]'>
                    <img src={logo} alt='Event logo' className='w-50' />
                    <p className='ml-[3rem] font[0.8rem] text-gray-500'>April 13, 2025 / Lahore, PK</p>
                </div>

                <div className='absolute flex gap-4 bottom-[10%] left-[20px] items-center'>
                    {avatarUrl && (
                        <img
                            src={avatarUrl}
                            alt='Your uploaded avatar'
                            className='w-[3rem] h-12 object-cover object-center'
                        />
                    )}
                    <div>
                        <p className='text-gray-100 font-medium'>{username}</p>
                        <div className='flex items-center gap-2 mt-1'>
                            <img src={githubImage} alt='GitHub icon' className='w-6 h-6' />
                            <span className='font-[0.8rem] text-gray-400'>@{githubUsername}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;