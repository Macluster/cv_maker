import './css/Homepage.css'
import { Outlet, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage()
{

    return(
        <div className="bodyy" >
           
            <div className="header">
            <h1 className=''>Welcome to cv_maker</h1>
            <Link to="/DetailsPage">  <Button>Let's Create</Button></Link>
           
            </div>
        </div>

    );
}

export default HomePage;