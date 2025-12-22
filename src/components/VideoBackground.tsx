export default function VideoBackground() {
  return (
    <>
      <div className="video-bg-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/img/hero-poster.jpg" 
          className="video-bg"
        >
          <source src="/assets/img/videohome.mp4" type="video/mp4" />
          
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
      
      <div className="video-overlay"></div>
    </>
  )
}