import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarrousselleEquipePedago() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imgEquipePedago = [
    { id: 1, img: "src/assets/equipepedago/angeline.png" },
    { id: 2, img: "src/assets/equipepedago/clothilde.png" },
    { id: 3, img: "src/assets/equipepedago/Dieu.jpg" },
    { id: 4, img: "src/assets/equipepedago/manon.png" },
    { id: 5, img: "src/assets/equipepedago/elea.png" },
  ];
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplayDelay="700"
        autoplay="true"
        delay="700"
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {imgEquipePedago.map((img) => (
          <div key={img.id} style={{ width: 200, height: 300 }}>
            <img
              src={img.img}
              alt={`Slide${img.id}`}
              style={{
                width: "200px", // Largeur fixe de 200px
                height: "300px", // Hauteur fixe de 300px
                objectFit: "cover", // Pour ajuster les images sans déformer leur aspect
              }}
            />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarrousselleEquipePedago;
