import ModalVideo from "./ModalVideo";

export default function Videos() {
  return (
    <div>
      <div className="gallerie-sous-title">
        <h2> Videos</h2>
      </div>
      <div className="photos">
        <iframe
          width="100%"
          height="303"
          src="https://www.youtube.com/embed/videoseries?si=_qDwI0r8HNos1Lta&amp;list=PLVJ51pLixCNVID1iGy-gtKeudFP9hkG_D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <ModalVideo />
      </div>
    </div>
  );
}
