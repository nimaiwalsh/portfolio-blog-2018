import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import logo from '../../images/nimaiwalsh-logo-aqua-white.svg';

const HeaderWrapper = styled('div')`
  background: #254B80;
  marginBottom: 1.45rem;

  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({data}) => (

  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <img src={logo} alt="Nimai Walsh Logo" />
        </Link>
      </h1>
      <p>{data.site.siteMetadata.title}</p>
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
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
