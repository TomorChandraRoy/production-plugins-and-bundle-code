 
import { createHashRouter} from "react-router-dom";
import Dashboard from "./Dahsboard";
import About from "./About";
import Settings from "./Settings";
 
 

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "settings",
        element: <Settings/> ,
      },
    ],
  },
]);

export default router;


 
