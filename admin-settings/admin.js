import domReady from '@wordpress/dom-ready';
import { createRoot  } from '@wordpress/element';
import Dashboard from './Components/Dahsboard';
import { RouterProvider } from 'react-router-dom';
import router from './Components/route';

domReady( () => {
    
    const adminEle = document.getElementById('bp-admin-settings');

    const root = createRoot(adminEle);
    root.render( <RouterProvider router={router}><Dashboard/></RouterProvider>);
    
//     //do something after DOM loads.
} );