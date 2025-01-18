import React, { useEffect, useState, useCallback } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = useCallback(() => {
        const eventDate = new Date('2025-03-15T00:00:00');  // Updated to 2024
        const now = new Date();
        const difference = eventDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return timeLeft;
    }, []);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <section className='relative flex flex-col items-center justify-center bg-transparent w-[100%] h-[100%]'>
            <div className="relative z-10 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/20 shadow-2xl">
                <h2 className='text-center mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
                    TIME REMAINING
                </h2>
                <div className='flex gap-2 md:gap-4 justify-center items-center'>
                    {timeLeft.days !== undefined ? (
                        <>
                            <DigitWheel value={String(timeLeft.days).padStart(2, '0')} label="DAYS" />
                            <div className="text-2xl md:text-4xl text-white">:</div>
                            <DigitWheel value={String(timeLeft.hours).padStart(2, '0')} label="HRS" />
                            <div className="text-2xl md:text-4xl text-white">:</div>
                            <DigitWheel value={String(timeLeft.minutes).padStart(2, '0')} label="MIN" />
                            <div className="text-2xl md:text-4xl text-white">:</div>
                            <DigitWheel value={String(timeLeft.seconds).padStart(2, '0')} label="SEC" />
                        </>
                    ) : (
                        <div className='text-white text-xl md:text-2xl font-bold animate-bounce'>
                            EVENT STARTED
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

const DigitWheel = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="flex gap-1">
            {value.split('').map((digit, index) => (
                <div 
                    key={index} 
                    className="relative w-8 md:w-12 h-12 md:h-16 bg-gradient-to-b from-purple-900 to-pink-700 rounded-lg overflow-hidden"
                >
                        {/* this is just to check the digits  */}
                        {/* <p className='text-white'>{ digit }</p> */}
                    <div className="absolute inset-0 flex justify-center ">
                        <div 
                            className="flex flex-col  translate-y-4 "
                        >
                            {[0,1,2,3,4,5,6,7,8,9].map((num) => (
                                <div 
                                    key={num}
                                    className="h-12 md:h-16 w-8 md:w-12 flex items-center justify-center transition-all duration-300 ease-in-out will-change-transform text-xl md:text-4xl font-mono text-white"
                            style={{ transform: `translateY(-${parseInt((digit+1)*10)}%)` }}

                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>
            ))}
        </div>
        <div className="text-white text-xs md:text-sm font-bold mt-2">
            {label}
        </div>
    </div>
);

export default CountdownTimer;