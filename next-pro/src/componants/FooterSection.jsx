import React, { useState, useEffect } from 'react'

function FooterSection() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return(
    <p className='lead'>
        This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>)

    

    //    (
    // <div className='HeaderSection1'>


    //     <h4 className='FooterSection'>
    //         let time = new Date()
    //         This is the current time: {time.toLocaleDateString()}
    //     </h4>
    // </div>
    //   )
}

export default FooterSection;