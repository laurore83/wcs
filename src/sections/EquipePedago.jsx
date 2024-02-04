import CarrousselleEquipePedago from "../components/CarrousselleEquipePedago";

export default function EquipePedago() {
  return (
    <div className="container-equipepedago">
      <div className="section-white">
        <div className="carroussel-equipepedago">
          <CarrousselleEquipePedago />
        </div>

        <h2 className="equipepedago-title">{"L'Équipe"} Pédagogique</h2>
        <h3 className="equipepedago-txt">
          Constituée de professionnels, stagiaires et de notre responsable de
          campus.
        </h3>
      </div>
    </div>
  );
}
