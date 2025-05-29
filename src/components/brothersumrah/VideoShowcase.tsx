import { FC } from "react";

const VideoShowcase: FC = () => {
  // Set this to true to enable the component, false to disable it
  const isEnabled = true;

  // If disabled, return null (component won't render at all)
  if (!isEnabled) {
    return null;
  }

  return (
    <section className="bg-umrah-cream py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-umrah-darkPurple">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Hear from our brothers who have embarked on this journey and how it
            transformed their personal and professional lives.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* First video - Umrah Video */}
          <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              <video
                className="absolute left-0 top-0 h-full w-full"
                controls
                preload="metadata"
              >
                <source src="/videos/Umrahvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-umrah-darkPurple">
                Umrah Journey
              </h3>
              <p className="text-sm text-gray-600">
                Watch highlights from our Umrah journey and see how this
                experience has impacted our community.
              </p>
            </div>
          </div>

          {/* Second video - D's Kitchen Part 2 */}
          <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              <video
                className="absolute left-0 top-0 h-full w-full"
                controls
                preload="metadata"
              >
                <source src="/videos/D's Kitchen Part 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-umrah-darkPurple">
                D's Kitchen Part 2
              </h3>
              <p className="text-sm text-gray-600">
                Experience our community kitchen and the brotherhood we share
                through food and hospitality.
              </p>
            </div>
          </div>

          {/* Third video - testabd with additional formats */}
          <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              <video
                className="absolute left-0 top-0 h-full w-full"
                controls
                preload="metadata"
                playsInline
                crossOrigin="anonymous"
              >
                <source
                  src="/videos/testabd.mp4"
                  type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'"
                />
                <source src="/videos/testabd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-umrah-darkPurple">
                Community Gathering
              </h3>
              <p className="text-sm text-gray-600">
                Recent highlights from our community event showcasing the
                brotherhood and connections we've built together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
