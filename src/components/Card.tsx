export type CardPropType = {
  image: string;
  description: string;
  title: string;
};

const Card: React.FC<CardPropType> = (props) => {
  const { image, description, title } = props;
  return (
    <section className="py-4 sm:py-0 sm:h-72 lg:w-3/5 my-4 border-2 border-slate-400 rounded-xl flex-col sm:flex-row flex justify-start items-center px-4">
      <img
        src={image}
        className="object-cover sm:w-2/5 sm:h-5/6 rounded-xl hidden-on-start hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      />
      <div className="h-5/6 sm:w-3/5 p-4">
        <h6 className="text-xl font-bold my-2">{title}</h6>
        <p className="font-medium text-slate-600 overflow-hidden text-wrap">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Card;
