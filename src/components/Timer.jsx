import React, { useEffect, useState, useCallback } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = useCallback(() => {
        const eventDate = new Date('2025-03-15T00:00:00');
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
        <section className='flex flex-col items-center justify-center p-5'>
            <div className="relative z-10 backdrop-blur-lg bg-black/20 p-4 rounded-xl border border-cyan-500 shadow-lg hover:border-cyan-500 transition-all duration-300">
                <h2 className='relative z-10 text-center mb-4 lg:text-4xl text-2xl font-bold text-cyan-500'>
                    <i className="ri-timer-flash-line" aria-hidden="true"></i> Countdown to Event <i className="ri-timer-flash-line" aria-hidden="true"></i>
                </h2>
                <div className='lg:text-5xl text-xl text-center font-extrabold text-white'>
                    {timeLeft.days !== undefined ? (
                        <>
                            <span>{timeLeft.days}</span> <span className='text-lg'>Days</span> :
                            <span> {timeLeft.hours}</span> <span className='text-lg'>Hours</span> :
                            <span> {timeLeft.minutes}</span> <span className='text-lg'>Mins</span> :
                            <span> {timeLeft.seconds}</span> <span className='text-lg'>Secs</span>
                        </>
                    ) : (
                        <span className='text-lg'>Event has started!</span>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CountdownTimer;
