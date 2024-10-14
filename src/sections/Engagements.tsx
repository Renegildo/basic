import SponsorCard from "../components/SponsorCard";

const Engagements = () => {
  const sponsors = [
    {
      title: "GOOGLE",
      text: "Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership",
      logo: "https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65",
      link: "#",
    },
    {
      title: "KFC",
      text: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership",
      logo: "https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65",
      link: "#",
    },
    {
      title: "WILSON",
      text: "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study",
      logo: "https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65",
      link: "#",
    },
    {
      title: "AT&T",
      text: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.",
      logo: "https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65",
    },
    {
      title: "PATAGONIA",
      text: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study",
      logo: "https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65"
    },
  ];

  return (
    <section className="p-16">
      <h1 className="text-2xl text-semiblack font-bold">
        FEATURED ENGAGEMENTS
      </h1>
      <div className="flex gap-20 overflow-x-scroll mt-20 no-scrollbar">
        {sponsors.map(({title, text, logo}) => (
          <SponsorCard
            text={text}
            title={title}
            logo={logo}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Engagements;
