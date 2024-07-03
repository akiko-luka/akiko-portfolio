import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import StarterKitCard from "./StarterKitCard.jsx";

// images
import basic from "../../assets/starterkit/basic-server.webp";
import mern from "../../assets/starterkit/mern-starter.webp";

const StarterKitContainer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`flex flex-col flex-wrap items-center border-b-[3px] p-8 pb-12 ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main bg-green-light"}`}
    >
      <h2 className="mb-16 mt-4 font-jp-font text-3xl font-[700]">
        Starter Kits
      </h2>
      <p className="mb-14 px-2 leading-8 md:px-24">
        Here is a series of Starter Kits I developed to spare fellow developers
        from the complexities of configuration and setup. These kits enable you
        to jump right into coding, letting you concentrate on bringing your
        ideas to life rather than on the tedious task of setting up your
        projects from the ground up.
      </p>

      <div className="mb-16 flex h-full w-full flex-wrap justify-center gap-12">
        <StarterKitCard
          starterLink={"https://github.com/akiko-luka/basicServer"}
          starterImg={basic}
          altTitle={"basic-server"}
        />
        <StarterKitCard
          starterLink={"https://github.com/akiko-luka/MERN"}
          starterImg={mern}
          altTitle={"mern-starter"}
        />
        <StarterKitCard
          starterLink={""}
          starterImg={""}
          altTitle={"react-tailwind"}
        />
      </div>
    </section>
  );
};

export default StarterKitContainer;
