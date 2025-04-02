import Button from "@/components/common/Button";
import { startProjectIcons } from "@/constants/pages/start-project/imagesDataSet";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const data = [
  {
    id: 0,
    title: "Start Today",
    description:
      "Is there something you're passionate about—food, clothing, your community? It can be anything, as long as it inspires you. Start a project and put your creativity to the test—the opportunities are endless.",
  },
  {
    id: 1,
    title: "Tools Built for You",
    description:
      "Whether you're just starting out or looking to scale, our team is here to help. Kamaharan gives you the tools and support to kick start a project with practical expertise and a team ready to guide you every step of the way.",
  },
  {
    id: 2,
    title: " The Kamaharan Network",
    description:
      "Connect with like-minded innovators and tap into Kamaharans vast ecosystem of industry partnerships who are turning their passions into reality. Join our thriving community of project leaders who share insights, collaborate on challenges, inspiration and celebrate every success. Your next collaboration, mentor, or breakthrough idea could be just one connection away. See what's possible when passion meets opportunity.",
  },
];

const StartProject = () => {
  return (
    <PagesContentLayout>
      <div className="relative left-1/2 ml-[-50vw] flex w-screen justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/start-project-bg.png"
            alt="Background"
            className="size-full object-cover"
          />
        </div>
        <div className="relative flex max-w-[1440px] flex-col items-center justify-center gap-6 px-4 py-8 md:gap-[24px] md:py-[48px]">
          <h1 className="max-w-[632px] text-center font-syne text-2xl font-bold leading-8 tracking-normal text-[#FCFCFC] md:text-4xl md:leading-10">
            Everything you need to start a project
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-[48px]">
            {startProjectIcons.map((icon) => (
              <img
                key={icon.urlIcon}
                src={icon.urlIcon}
                alt={icon.labelIcon}
                className="size-auto"
              />
            ))}
          </div>

          <h2 className="max-w-[632px] text-center font-body text-lg font-570 text-[#FCFCFC] md:text-2xl">
            Every big achievement starts with a small, intentional step. Your
            project is the foundation for something greater. Imagine the
            possibilities
          </h2>

          <div className="grid max-w-[632px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-[32px]">
            {data.map((item) => (
              <div className="text-[#FCFCFC]" key={item.id}>
                <h3 className="mb-2 text-center text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <Button>Start Now</Button>
        </div>
      </div>
    </PagesContentLayout>
  );
};

export default StartProject;
