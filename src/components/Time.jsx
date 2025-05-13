import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="text-md font-medium font-mono text-gray-800 align-middle">
            {formattedTime}
        </div>
    );
}

export default DigitalClock;
