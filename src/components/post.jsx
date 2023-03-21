import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import "./style.css";
import "./teststyles.css";

export default function Post() {
  const [post, setPost] = useState({ tags: [] });

  useEffect(() => {
    let p = {
      title: "Cow Bay",
      likes: "42.8k",
      dislikes: "6.1k",
      icon: "https://img.poki.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,f=auto/bcb80cf03b9d0ab698ac72f0b8b6f3d0.png",
      content:
        "https://games.poki.com/458768/8f32b0d9-7c3a-48e2-a8ab-22189e4b16e5?tag=pg-v3.76.1&site_id=3&iso_lang=en&country=PK&poki_url=https://poki.com/en/g/cow-bay&categories=4,37,64,69,91,118,1014,1122,1141",
      description:
        "<p>Cow Bay is an idle simulation game where you take the role of a farmer cow who harvests various crops and crafts tools. The governor (who is a cat) asks you to turn this empty but fruitful piece of land into a bustling settlement from scratch. You start simple by picking up berries and collecting wooden logs. Then the quests will evolve into more complex tasks like cutting down trees, sewing seeds, and crafting equipment. As you complete the governor's quests, you will earn coins to unlock and explore more islands that will introduce many improvements like a crafting table where you can make axes, pickaxes, shovels; a campfire that lets you cook recipes to replenish your energy; and storage boxes to unload extra items. Each task costs an energy, so make sure to keep an eye on it at all times. Cow Bay has lots of surprises in its sleeve waiting for you to explore! Play this relaxing pastoral experience on Poki, and don't forget to share it with your friends and find out who can build the best settlement!</p><h3>How to play Cow Bay?</h3><p>Tap or click on any object to harvest or use it. You can tap on the shrubs to collect berries, the logs to collect them, or the buildings or workbench to use them for crafting.</p>",
      tags: ["Farm Games", "Idle Games", "Crafting Games", "New Games"],
    };

    setPost(p);
  }, []);

  return (
    <div className="main min-h-screen">
      <div className="lg:container mx-auto p-5">
        <div className="grid grid-cols-12 items-center justify-center nowra">
          <a
            href="/"
            className="box xs:m-3 sm:m-6 md:m-2 m-0 xxs:m-3 md:col-span-1 xs:col-span-2 xxs:col-span-3 col-span-4 rounded-lg bg-white/100 p-3 aspect-square flex items-center hover:scale-105 duration-500"
          >
            <img src={logo} className="" />
          </a>
        </div>

        <div className="postcard shadow-lg bg-white">
          <iframe className="w-full postcontent" src={post.content}></iframe>
          <div className="flex justify-between">
            <div className="p-3 flex items-center">
              <img src={post.icon} className="rounded-md w-10 h-10" />
              <h3 className="font-extrabold ml-3">{post.title}</h3>
            </div>

            <div className="p-3 flex items-center">
              <div className="text-center cursor-pointer mx-2">
                <img src={up} className="w-6 h-6 mx-auto block" />
                <small className="font-bold postlikes">{post.likes}</small>
              </div>

              <div className="text-center cursor-pointer mx-2">
                <img src={down} className="w-6 h-6 mx-auto block" />
                <small className="font-bold postlikes">{post.dislikes}</small>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 shadow-lg bg-white mt-10">
          <h3 className="font-extrabold text-xl">{post.title}</h3>
          <div className="my-2 flex items-center">
            <div className="text-center cursor-pointer flex items-center">
              <img src={up} className="w-6 h-6 mx-auto" />
              <small className="font-bold postlikes">{post.likes}</small>
            </div>
            <div className="text-center cursor-pointer flex items-center">
              <img src={down} className="w-6 h-6 mx-auto" />
              <small className="font-bold postlikes">{post.dislikes}</small>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.description }}></div>

          <div className="mt-3">
            {post.tags.map((tag, index) => {
              return <span className="tag">{tag}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
