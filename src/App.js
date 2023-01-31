// import logo from './logo.svg';
import image from './Images/Line.gif';
import video from './Video/vdo.mp4';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import FourColumn from './Component/Navbar/Columns/FourColumn';
import Upcomming from './Component/Upcomming/Upcomming';


function App() {
  return (
    <div className="App">
        <Navbar img={image} vdo={video} />
        <Slider />
        <FourColumn />
        <Upcomming />
      

    </div>
  ); 
}

export default App;
