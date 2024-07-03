import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import SmallProjCard from "./SmallProjCard";

// icon
import { BsGithub } from "react-icons/bs";

// images
import stopwatch from "../../assets/small-proj/ss-stopwatch.webp";
import todo from "../../assets/small-proj/ss-todo.webp";
import pokemon from "../../assets/small-proj/ss-pokemon-api.webp";
import qrcode from "../../assets/small-proj/ss-qrcode-gen.webp";
import drum from "../../assets/small-proj/virtualDrum.webp";
import passGen from "../../assets/small-proj/pass-gen.webp";

const SmallProj = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`flex flex-col flex-wrap items-center border-b-[3px] p-8 pb-12 ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main"}`}
    >
      <h2 className="mb-16 mt-4 text-2xl font-[700]">Small Projects</h2>
      <div className="w-full mb-16 flex h-full flex-wrap justify-center gap-12">
        <SmallProjCard
          spUrl={"https://the-projects-js.netlify.app/03-passgen/"}
          spImage={passGen}
          altTitle={"pass-gen"}
          spTitle={"password generator"}
        />
        <SmallProjCard
          spUrl={"https://qr-code-1generator.netlify.app/"}
          spImage={qrcode}
          altTitle={"qrcode-generator"}
          spTitle={"QR-Code Generator"}
        />
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/pokemon-api/"}
          spImage={pokemon}
          altTitle={"ss-pokemon"}
          spTitle={"Pokemon api"}
        />
        <SmallProjCard
          spUrl={"https://the-projects-js.netlify.app/12-virtualdrum/"}
          spImage={drum}
          altTitle={"virtual-drum"}
          spTitle={"virtual drum"}
        />
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/todo-list/"}
          spImage={todo}
          altTitle={"todo-list"}
          spTitle={"todo-list"}
        />
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/stopwatch/"}
          spImage={stopwatch}
          altTitle={"stopwatch"}
          spTitle={"stopwatch"}
        />
      </div>

      <div className="">
        <a
          href="https://github.com/akiko-luka"
          target="_blank"
          className={`m-2 flex w-56 items-center justify-center gap-[10px] border-[3px] border-solid p-2 text-base font-[500] transition-all duration-200 ease-in-out hover:bg-green-light hover:text-blue-main hover:shadow-none ${darkMode ? "border-gray-main bg-gray-dark shadow-box-shadow-dark" : "border-black-main bg-gray-main shadow-box-shadow"}`}
        >
          See more on my Github <BsGithub />
        </a>
      </div>
    </section>
  );
};

export default SmallProj;
