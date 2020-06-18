import React from 'react';
import Preloader from '../Preloader/Preloader';


export let withLazy = (Component) => (props) => {
    return (<React.Suspense fallback={<Preloader />}>
                 <Component {...props}/>
            </React.Suspense>)
}
