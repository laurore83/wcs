import { Link } from "react-router-dom";
import Modal from "../components/modal";

export default function PhotoGallerie() {
  let photos = new Array(222);
  for (let i = 0; i < photos.length; i += 1) {
    photos[i] = i + 1;
  }
  const shuffledArray = photos.sort(() => 0.5 - Math.random());

  return (
    <div>
      <div>photo</div>
      <div>show</div>
      <Link to="/diapo" className="btn-photo">
        {" "}
        Diapo
      </Link>
      <Modal />
      <div>
        {shuffledArray.map((img) => (
          <div key={img} style={{ width: 200, height: 300 }}>
            <img
              src={`/galleriePhoto/photo_${img}.jpg`}
              alt={`photo_${img}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
