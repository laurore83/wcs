import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar className="navbar" expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            className="logo-navbar"
            src="src/assets/wcs.logo.png"
            alt="logo.wcs"
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Accueil
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#equipe">Equipe</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#equipepedago">
                Equipe Pédagogique
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#partenaires">Partenaires</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#galerie">Galerie</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/photo">Galerie Photos</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/video">Galerie Videos</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
