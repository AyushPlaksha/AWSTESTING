// import logo from './logo.svg';
import image from './Images/Line.gif';
import video from './Video/vdo.mp4';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Navbar img={image} vdo={video} />
        <Slider />
        {/* <h1>Hello SHALINI</h1> */}


    </div>
  ); 
}

export default App;
