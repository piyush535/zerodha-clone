import React from 'react';

function NotFound() {
    return ( 
        <div className = 'container p-5 mb-5'>
            <div className='row' style = {{ textAlign: "center" }}>
                <h2 style = {{ color: "black" }} className='mt-5 fs-3'>404 Not Found !!</h2>
                <p className='lead mb-5'>Sorry, the page you are looking for could not be found.</p>
            </div>
        </div>
     );
}

export default NotFound;