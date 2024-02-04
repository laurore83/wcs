export default function Thanks() {
  return (
    <div>
      <div className="header-thanks">
        <img
          className="promo-home"
          src="src/assets/promo.home.png"
          alt="promo.home"
        />

        <h1 className="home-title">Merci à vous</h1>
      </div>{" "}
      <div className="header-thanks">
        <img
          className="logo-wcs-home"
          src="src/assets/wcs.logo.png"
          alt="logo.wcs"
        />
        <div className="thanks-txt">
          Une expérience humaine hors du commun. <br />
          Nous avons traversés tant d’épreuves ensembles...du stress, des
          pleures mais surtout beaucoup de partage et de grands moments de fous
          rires. <br /> Je repars avec tant de souvenirs.... <br />
          Merci mes petits chats
        </div>
      </div>
    </div>
  );
}
