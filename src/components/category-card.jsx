const CategoryCard = ({ name, image, url }) => {
  return (
    <div className="rect rounded-lg bg-white/100 overflow-hidden hover:scale-105 duration-500 relative">
      <a
        className="grid grid-cols-2 items-center text-black cursor-pointer"
        href={url}
      >
        <img
          src={image}
          className=" w-full h-full object-cover object-center"
        />
        <p className="p-1 font-semibold text-sm">{name}</p>
      </a>
    </div>
  );
};
export default CategoryCard;
