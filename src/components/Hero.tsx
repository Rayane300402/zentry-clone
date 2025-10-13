/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";

const TOTAL = 4;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVdRef = useRef(null); // when u want to target specific dom
  const handleVdLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVdIndex = (currentIndex % TOTAL) + 1;

  const handleMiniVdClick = () => {
    // on click change video to another one
    setHasClicked(true);

    setCurrentIndex(upcomingVdIndex);
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video=frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-lavender-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVdRef}
                src={getVideoSrc(upcomingVdIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVdLoad}
              />
            </div>
          </div>
          <video 
          ref={nextVdRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVdLoad}
           />
           <video
            src={getVideoSrc(currentIndex === TOTAL  - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVdLoad}
           />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5  right-5 text-lavender-75 z-40">
            G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-lavender-100">redefi<b>n</b>e</h1>
                <p className="mb-5 max-w-64 font-robert-regular text-lavender-100">Enter the Metagame Layer <br />
                Unleash the Play Economy
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
