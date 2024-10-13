interface SponsorCardProps {
  title: string,
  text: string,
  logo: string,
  link?: string,
}

const SponsorCard = ({title, text, logo, link}: SponsorCardProps) => {
  return (
    <div className="min-w-[400px]">
      <img src={logo} className="h-12" />
      <div className="h-[2px] w-10 bg-semiblack mt-2" />
      <h2 className="text-lg text-semiblack font-bold my-4">{title}</h2>
      <p className="text-sm">
        {text}

        {link && (
          <a href={link}>here</a>
        )}
      </p>
    </div>
  );
};

export default SponsorCard;
