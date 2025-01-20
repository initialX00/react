import React, { useEffect } from 'react';

function Route({ path, element }) {

    return (
        <>
            {
                window.location.pathname === path && element
            }
        </>
    );
}

export default Route;


// import React from 'react';

// function Route({ pathname, path, element }) {
    
//     return (
//         <>
//             {
//                 pathname === path && element
//             }        
//         </>
//     );
// }

// export default Route;