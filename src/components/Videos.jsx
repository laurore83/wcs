import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <div>
      <div className="gallerie-sous-title">
        <h2> Videos</h2>
      </div>
      <div className="photos">
        {" "}
        <div>
          <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=_qDwI0r8HNos1Lta&amp;list=PLVJ51pLixCNVID1iGy-gtKeudFP9hkG_D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Link to="/video" className="btn-photo">
          Visionner
        </Link>
      </div>
    </div>
  );
}
