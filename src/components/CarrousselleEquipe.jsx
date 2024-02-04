import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarrousselleEquipe() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const imgEquipe = [
    { id: 1, img: "src/assets/equipe/lulu.png" },
    { id: 2, img: "src/assets/equipe/moi.png" },
    { id: 3, img: "src/assets/equipe/toitoine.png" },
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
        {imgEquipe.map((img) => (
          <div key={img.id} style={{ width: 200, height: 300 }}>
            <img
              src={img.img}
              alt={`Slide${img.id}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarrousselleEquipe;
