import React, { useEffect, useState } from 'react';
import ticketImage from '../assets/images/pattern-ticket.svg';
import githubImage from '../assets/images/icon-github.svg';
import logo from '../assets/images/logo-full.svg';
import { useNavigate } from 'react-router-dom';

const Ticket = ({ avatarImage, githubUsername, username, email }) => {
    const [avatarUrl, setAvatarUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (avatarImage === null || githubUsername === '' || username === '' || email === '') {
            navigate('/conference-ticket-generator/');
        }
        if (avatarImage) {
            const url = URL.createObjectURL(avatarImage);
            setAvatarUrl(url);

            // Clean up the URL object when the component unmounts
            return () => URL.revokeObjectURL(url);
        }
    }, [avatarImage]);

    return (
        <div className='max-w-3xl mx-auto p-4 flex flex-col items-center'>
            <h1 className='text-center text-2xl font-extrabold text-gray-200 mb-4'>
                Congrats, <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>{username}</span><br />
                Your ticket is ready.
            </h1>
            <p className='text-center text-gray-200 mb-4'>
                We&apos;ve emailed your ticket to<br />
                <span className='text-orange-500'>{email}</span> and will send updates in<br />
                the run-up to the event.
            </p>

            <div className='relative inline-block mt-12'>
                <img
                    src={ticketImage}
                    alt="Your event ticket, showing event details"
                    className='w-72'
                />
                <span className='absolute top-1/2 right-3 transform rotate-90 text-gray-500'>
                    #10906
                </span>

                <div className='absolute left-5 top-5'>
                    <img src={logo} alt="Event logo" className='w-16' />
                    <p className='ml-12 text-sm text-gray-500'>April 13, 2025 / Lahore, PK</p>
                </div>

                <div className='absolute flex gap-4 bottom-10 left-5'>
                    {avatarUrl && (
                        <img
                            src={avatarUrl}
                            alt="Your uploaded avatar"
                            className='w-12 h-12 object-cover object-center rounded-full'
                        />
                    )}
                    <div>
                        <p className='text-gray-900'>{username}</p>
                        <div className='flex items-center gap-2 mt-1'>
                            <img src={githubImage} alt="GitHub icon" className='w-6 h-6' />
                            <span className='text-sm text-gray-400'>@{githubUsername}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;