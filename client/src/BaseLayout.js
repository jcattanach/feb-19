import React, { Component } from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'
import './components/style/BaseLayout.css'

class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
      <Menu/>
      <div className="heroImg">
      Jack Cattanach
      </div>
      <Footer/>
      </div>
    );
  }
}

export default BaseLayout;
