import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
export default function Slideshow() {
  let photos = new Array(222);
  for (let i = 0; i < photos.length; i += 1) {
    photos[i] = {
      url: `/galleriePhoto/photo_${i + 1}.jpg`,
      id: i + 1,
    };
  }

  const shuffledArray = photos.sort(() => 0.5 - Math.random());

  return (
    <MDBCarousel interval={1500} fade={true}>
      {shuffledArray.map((item, index) => (
        <MDBCarouselItem key={index} itemId={index + 1}>
          <img src={item.url} alt={item.url} />
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
}
