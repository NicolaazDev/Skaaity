"use client";

import "./track.css";

export default function TrackDemo() {
  return (
    <section className="w-full py-[15vh] bg-foreground mt-[100px] center-col relative mx-auto px-4">
      <h2 className="text-7xl title-gradient font-[400] leading-[1.2] w-auto mx-auto text-start font-poppinsBold">
        Estamos na pista
      </h2>
      <p className="font-poppinsLight leading-[2.5] text-center text-background w-full mt-4">
        Curte aí os vídeos da galera mandando ver com nossos skates!
      </p>
      <div className="video-container mt-8">
        <video muted id="videodemo" autoPlay loop>
          <source src="https://res.cloudinary.com/dmceve2cp/video/upload/v1724556036/skulls_ut0wso.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
