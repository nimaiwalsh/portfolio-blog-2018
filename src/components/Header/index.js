import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';

import logo from '../../images/nimaiwalsh-logo-aqua-white.svg';
//Overflow hidden is used to fit the image nicely in the header
const HeaderWrapper = styled('div')`
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '100vh' : '20vh')};
  background-color: #000;
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const HeaderContent = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
  color: #ffffff;

  div {
    text-align
  }

  span {
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1s;
  }

  h1 {
    opacity: 0;
    animation: ${fadein} 3s ease both;
    animation-delay: 1.5s;
    color: #94E0D1;
  }
`;

const NavbarWrapper = styled('div')`
  #254B80; 
  background-color: rgba(37, 75, 128, 0.8);
  position: fixed;
  width: 100%;
  z-index: 2;
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
`;

const MainNav = styled('nav')`
  ul {
    margin: 0;
    list-style: none;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        border-bottom: 4px solid #94E0D1;
      }
    }
    li {
      display: inline-block;
      padding: 10px;
      margin: 0;
    }
  }

`

const headerImage = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.6
};

export default class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    //Do not animate if you are already on the same page
    if (location.pathname !== prevProps.location.pathname) {
      //If it is not the homepage, animate the header by making it smaller
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: '20vh' }, { height: '100vh' }], {
          duration: 500,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      } else {
        this.wrapper.animate([{ height: '100vh' }, { height: '20vh' }], {
          duration: 500,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      }
    }
  }

  render() {
    const { data, location } = this.props;
    return (
      //ref prop - Attach the reference of the HeaderWrapper element in the DOM to this.wrapper
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <NavbarWrapper>
          <NavbarContainer>
            <Link to="/">
              <img src={logo} alt="Nimai Walsh Logo" />
            </Link>
            <MainNav>
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/journal">Journal</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </MainNav>
          </NavbarContainer>
        </NavbarWrapper>
        <HeaderContent>
          <div>
            <span>Hello beautiful earth</span>
            <h1>Nimai Walsh - Web Developer</h1>
          </div>
        </HeaderContent>
        <Img style={headerImage} sizes={data.headerImage.sizes} />
      </HeaderWrapper>
    );
  }
}
