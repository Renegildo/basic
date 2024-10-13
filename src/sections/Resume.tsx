import ResumeCard from "../components/ResumeCard";

const Resume = () => {
  const cards = [
    {
      title: "PATAGONIA",
      description: "AN ECOMMERCE DRIVEN BY PATAGONIA'S BRAND MISSION",
      image: "https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&fm=webp&q=65",
    },
    {
      title: "WILSON",
      description: "A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE",
      image: "https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=720&fm=webp&q=65",
    },
    {
      title: "GOOGLE STORE",
      description: "AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GOBLE",
      isVideo: true,
      video: "https://cdn.sanity.io/files/8nn8fua5/production/9dc5a490bd877e8685f2089209db192188dd21e7.mp4",
    },
  ];

  return (
    <section className="p-16">
      <div className="flex">
        <div>
          <div className="mb-10">
            <p className="w-[50%] text-3xl font-bold">
              <span className="mr-2 text-4xl">BASIC/DEPT</span>
              is a global branding and digital design
              agency building products, services and
              eCommerce experiences that turn cultural values
              into company value.
            </p>
          </div>

          <button
            className="border border-semiblack px-8 rounded-full text-xs py-1.5 font-bold hover:text-white transition overflow-hidden relative group"
          >
            SEE THE WORK
            <div className="bg-semiblack absolute w-full h-full left-0 top-20 group-hover:top-0 transition-all -z-10 duration-500" />
          </button>
        </div>

        <div className="flex justify-end w-full">
          <svg className="w-[80%] fill-semiblack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100"><path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path></svg>
        </div>
      </div>

      <div className="mt-20 flex gap-10">
        {cards.map((card, index) => {
          return (
            <ResumeCard
              title={card.title}
              description={card.description}
              image={card.image}
              isVideo={card.isVideo}
              video={card.video}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Resume;
