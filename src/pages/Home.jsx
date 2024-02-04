import Equipe from "../sections/Equipe";
import EquipePedago from "../sections/EquipePedago";
import Galerie from "../sections/Galerie";
import Partenaires from "../sections/Partenaires";

export default function Home() {
  return (
    <>
      <div id="home" className="container-home">
        <div className=" header-home">
          <img
            className="logo-wcs-home"
            src="src/assets/wcs.logo.png"
            alt="logo.wcs"
          />
          <h1 className="home-title">
            Promo JS WCS <br />
            Bordeaux 2023/2024
          </h1>
        </div>
        <div className="home-promo">
          <h2 className="home-txt">Découvrez les artistes !</h2>
          <img
            className="promo-home"
            src="src/assets/promo.home.png"
            alt="promo.home"
          />
        </div>
        <div id="equipe" className="container-equipe">
          <Equipe />
        </div>
        <div id="equipepedago" className="container-equipepedago">
          <EquipePedago />
        </div>
        <div id="partenaires" className="container-partenaires">
          <Partenaires />
        </div>
        <div id="gallerie" className="container-galerie">
          <Galerie />
        </div>
      </div>
    </>
  );
}
