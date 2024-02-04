export default function Partenaires() {
  return (
    <div>
      <div className="container-partenaires">
        <h2 className="equipe-title">
          Nos <br /> Partenaires
        </h2>

        <div className="sponsor">
          <img
            className="sponsor-img"
            src="src/assets/sponsors/mybeers.logo.png"
            alt="MyBeers"
          />

          <h3>
            Prêt à nous accueillir tous les vendredis <br /> A PARTIR de 17h30..
          </h3>
        </div>
        <div className="sponsor">
          <img
            className="sponsor-img"
            src="src/assets/sponsors/logos-mcdo-burgerking_8cb494aaa1.jpg"
            alt="McDo"
          />
          <h3>Cantine de secours...et distributeur RedBull</h3>
        </div>
        <div className="sponsor">
          <img
            className="sponsor-img"
            src="src/assets/sponsors/aldi.png"
            alt="aldi"
          />
          <h3>
            Venez comme vous êtes... <br />
            Slogan abrogé après notre passage
          </h3>
        </div>
      </div>
    </div>
  );
}
