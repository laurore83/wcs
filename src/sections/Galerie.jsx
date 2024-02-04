import Photos from "../components/Photos";
import Videos from "../components/Videos";

export default function Galerie() {
  return (
    <div className="container-galerie">
      <h2 className="galerie-txt">Let’s go to the show</h2>
      <div className=" gallerie-composant">
        <Photos />
        <Videos />
      </div>
      <img
        className="logo-wcs-home"
        src="src/assets/wcs.logo.png"
        alt="wcs.logo"
      />
    </div>
  );
}
