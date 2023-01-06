import React, { Component } from 'react'
import '../../public/style.css'
import logo from '../../Images/logo-green.png'
import Form from '../../Pages/Form'

class Navbar extends Component {

 

  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      message: "This is data",
      video: true,
    }
  }

  chnageBg = () => {
    if (this.state.video) {
      this.setState({
        video: false,
      })
    } else {
      this.setState({
        video: true,
      })
    }
  }

    render(){
      const LISTS =['Research','NewData','GCSP','Non-Tech'];
      const List = LISTS.map((name,index ) => <li key={index}>{name}</li>);
      console.log(List[0]['props'])
      return (
        <div className=''>
          <div className='running-text'>
            <p>Sign up for Virtual Chats here. | View Academic Calendar 2022-23 here. | Admissions for TLP Class of 2024 are now open. Click here to Apply</p>
          </div>
          <div className='upperNav'>
            <div className='left'>
              <div className='logo'>
                <img src={logo} />
              </div>
            </div>
            <div className='mid'>
              <nav>
                <ul>
                {List}
                </ul>
              </nav>
            </div>
            <div className='right'>
              <button>Apply now</button>
            </div>
          </div>
          <div className='lowernav'>
            <ul>
              <li>
                Home
              </li>
            </ul>
          </div>
          {(this.state.video) ? <video src={this.props.vdo} autoplay='infinite' className='vedio' /> : <img src={this.props.img}  className='image'/>}
        </div>

      )
    }
  }

export default Navbar;