import Equipe from "../sections/Equipe";
import EquipePedago from "../sections/EquipePedago";
import Galerie from "../sections/Galerie";
import Partenaires from "../sections/Partenaires";

export default function Home() {
  return (
    <>
      <div id="home" className="container-home">
        <img
          className="logo-wcs-home"
          src="src/assets/wcs.logo.png"
          alt="logo.wcs"
        />
        <h2 className="home-txt">
          Promo JS WCS Bordeaux 2023/2024 <br />
          Découvrez les artistes !
        </h2>
        <h1 className="home-title">
          Promo JS <br />
          2023/2024
        </h1>
        <img
          className="promo-home"
          src="src/assets/promo.home.png"
          alt="promo.home"
        />
        <div id="equipe" className="container-equipe">
          <Equipe />
        </div>
        <div id="equipepedago" className="container-equipepedago">
          <EquipePedago />
        </div>
        <div id="partenaires" className="container-partenaires">
          <Partenaires />
        </div>
        <div id="galerie" className="container-galerie">
          <Galerie />
        </div>
      </div>
    </>
  );
}
