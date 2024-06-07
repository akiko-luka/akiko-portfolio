import SmallProjCard from "./SmallProjCard";
// import { Link, NavLink } from "react-router-dom";

// icon
import { BsGithub } from "react-icons/bs";

// images
import stopwatch from "../../assets/small-proj/ss-stopwatch.png";
import todo from "../../assets/small-proj/ss-todo.png";
import pokemon from "../../assets/small-proj/ss-pokemon-api.jpg";

const SmallProj = () => {
  return (
    <section className="flex flex-col flex-wrap items-center border-b-[3px] border-gray-main p-8 pb-12">
      <h2 className="mb-16 mt-4 text-2xl font-[700]">Small Projects</h2>
      <div className="mb-16 flex h-full flex-wrap justify-center gap-12">
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/pokemon-api/"}
          spImage={pokemon}
          altTitle={"ss-pokemon"}
          spTitle={"Pokemon api"}
        />
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/stopwatch/"}
          spImage={stopwatch}
          altTitle={"stopwatch"}
          spTitle={"stopwatch"}
        />
        <SmallProjCard
          spUrl={"https://akiko-luka.github.io/todo-list/"}
          spImage={todo}
          altTitle={"todo-list"}
          spTitle={"todo-list"}
        />
      </div>

      <div className="">
        <a
          href="https://github.com/akiko-luka"
          target="_blank"
          className="m-2 flex w-56 items-center justify-center gap-[10px] border-[3px] border-solid border-blue-main p-2 text-base font-[500] shadow-box-shadow transition-all duration-200 ease-in-out hover:bg-blue-main hover:text-white-main hover:shadow-none"
        >
          See more on my Github <BsGithub />
        </a>
      </div>
    </section>
  );
};

export default SmallProj;
