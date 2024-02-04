export default function VideoGallerie() {
  return (
    <div className="container-gallerie-video">
      <div className="home-title">
        VIDEOS
        <div>
          <iframe
            className="container-slide"
            width="360"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=_qDwI0r8HNos1Lta&amp;list=PLVJ51pLixCNVID1iGy-gtKeudFP9hkG_D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
