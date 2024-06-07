import avatar from "../assets/avatar.png";
const Hero = () => {
  return (
    <>
      <section className="border-gray-main flex h-[calc(90vh-100px)] items-center justify-center border-b-[3px]">
        <div>
          <img
            src={avatar}
            alt="avatar"
            className=" m-4 h-auto w-[150px] md:mr-8 md:w-[250px]"
          />
        </div>
        <div>
          <h1 className="mb-4 p-[5px] text-4xl font-[900] md:text-6xl">
            Akiko Luka
          </h1>
          <h3 className="ml-2 text-2xl">Full-Stack Web Developer</h3>
          {/* animation and responsiveness*/}
        </div>
      </section>
    </>
  );
};

export default Hero;
