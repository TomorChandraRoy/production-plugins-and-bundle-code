import { Outlet } from "react-router-dom";
 
import Navigation from "./Navigation";


const Dashboard = () => {
    return  <div className="wrap">
        <h1>Dashboard</h1>
          <Navigation/>
         <Outlet/>
        </div>
}
export default Dashboard;