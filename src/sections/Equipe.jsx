import CarrousselleEquipe from "../components/CarrousselleEquipe";

export default function Equipe() {
  return (
    <div className="container-equipe">
      <div className="section-white">
        <div className="carroussel-equipe">
          <CarrousselleEquipe />
        </div>
        <h2 className="equipe-title">{"L'Équipe"}</h2>
        <h3 className="equipe-txt">
          Tous en reconversion... <br />
          Issus de milieux différents ... <br />
          Un cocktail détonnant!!!
        </h3>
      </div>
    </div>
  );
}
