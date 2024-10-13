interface ResumeCardProps {
  title: string,
  description: string,
  image?: string,
  isVideo?: boolean,
  video?: string,
}

const ResumeCard = ({title, description, image, isVideo, video}: ResumeCardProps) => {
  const CardContent = () => {
    const commonClasses = "w-full h-[500px] object-cover absolute -z-10 scale-125 group-hover:scale-100 trasition-all duration-300";

    return isVideo ? (
      <video src={video} autoPlay muted loop className={commonClasses} />
    ) : (
      <img src={image} className={commonClasses} />
    );
  };

  return (
    <div className="flex flex-col w-full group hover:cursor-pointer">
      <div className="w-full relative overflow-hidden h-[500px]">
        <CardContent />
      </div>
      <div>
        <h1 className="font-bold text-xl my-3 tracking-wide group-hover:underline">{title}</h1>
        <p className="text-sm w-48">{description}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
