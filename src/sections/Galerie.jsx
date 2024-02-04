import Photos from "../components/Photos";
import Videos from "../components/Videos";

export default function Galerie() {
  return (
    <div id="gallerie" className="container-galerie">
      <h2 className="galerie-txt">Let’s go to the show</h2>
      <Photos />
      <Videos />
      <img
        className="logo-wcs-home"
        src="src/assets/wcs.logo.png"
        alt="wcs.logo"
      />
    </div>
  );
}
