'use client';

import {useState} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import styles from './header.module.scss';

const Header = () => {

  const [showFullNav, setShowFullNav] = useState(false);

  return (
    <div className={styles.Header}>
      <MDBNavbar expand={'lg'}>
        <MDBContainer fluid>
          <MDBNavbarBrand href={'#'}>
            IMG HERE
          </MDBNavbarBrand>
          <MDBNavbarToggler
                  aria-controls={`navbarContent`}
                  aria-expanded={false}
                  aria-label={'Toggle navigation'}
                  onClick={() => setShowFullNav(!showFullNav)}>
            <MDBIcon icon={'bars'} fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showFullNav}>
            <MDBNavbarNav className={`mb-2 mb-lg-0 flex-grow-1`}>
              <MDBNavbarItem>
                <MDBNavbarLink href={'#top'}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href={'#schedule'}>
                  Schedule
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                {/* What does Next Router want us to do with this? */}
                <MDBNavbarLink href={'/rules'}>
                  Rules
                </MDBNavbarLink>
              {/* ****** */}
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink href={'#location'}>
                  Bowling Center
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink href={'#contact'}>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                <MDBNavbarLink href={'#dallas'}>
                  Dallas
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* Let's put the Register link on the right on larger viewports */}
              <MDBNavbarItem className={`nav-item ms-lg-auto`}>
                <MDBNavbarLink href={'#top'}>
                  Register
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header;
