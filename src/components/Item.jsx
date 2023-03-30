import { useNavigate } from "react-router-dom";

const Item = ({ image, size, name, index, video, id }) => {
  const navigate = useNavigate();
  const loadvideo = (tag, index) => {
    if (video != undefined)
      tag.insertAdjacentHTML(
        "afterend",
        `<video autoplay playsinline src=${video} class="w-full h-full absolute" style="top: 0;left: 0;width: 100%;height: 100%;border-radius: 0.5rem;" onmouseleave="this.remove()"></video>`
      );
  };

  return (
    <div
      className={`item h${size} w${size} INDEX-${index}`}
      onMouseEnter={(e) => {
        loadvideo(e.target, index);
      }}
      onClick={() => {
        navigate("/post?id=" + id);
      }}
    >
      <div className="item-content">
        <div
          className="rounded-lg overflow-hidden hover:scale-105 duration-500 cursor-pointer shadow-lg relative"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center pointer-events-none">
            <span className="visibility-hidden">{name}</span>
            <span className="posttitle z-50 absolute bottom-0 pt-1 pb-2 text-white font-bold left-0 w-full line-height-normal text-center bg-black/5 opacity-0">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
