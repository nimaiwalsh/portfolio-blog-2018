import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import logo from '../../images/nimaiwalsh-logo-aqua-white.svg';
//Overflow hidden is used to fit the image nicely in the header
const HeaderWrapper = styled('div')`
  overflow: hidden;
  position: relative;
  height: 60vh;
`;

const NavbarWrapper = styled('div')`
  #254B80; 
  background-color: rgba(37, 75, 128, 0.8);
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const NavbarContainer = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  img {
    height: 80px;
    margin: 0;
  }

  a {
    color: #fff;
  }

  ul {
    margin: 0;
  }

  nav > ul > li {
    display: inline-block;
    padding: 10px;
    margin: 0;
  }
`;

const headerImage = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export default class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    //If it is not the homepage, do some animation
    if(this.props.location.pathname === '/') {
      console.log(this.wrapper);
    } else {

    }
  }

  render() {
    const { data } = this.props;
    return (
      //ref prop - Attach the reference of the HeaderWrapper element in the DOM to this.wrapper
      <HeaderWrapper ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)} >
        <NavbarWrapper>
          <NavbarContainer>
            <Link to="/">
              <img src={logo} alt="Nimai Walsh Logo" />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </NavbarContainer>
        </NavbarWrapper>
        <Img style={headerImage} sizes={data.headerImage.sizes} />
      </HeaderWrapper>
    );
  }
}