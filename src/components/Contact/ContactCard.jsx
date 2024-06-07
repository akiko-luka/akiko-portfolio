const ContactCard = ({ link, title, icon }) => {
  return (
    <>
      <div className="flex h-[50px] w-[50px] items-center justify-center border-2 border-solid border-blue-main text-[2rem] shadow-box-shadow transition-all duration-100 ease-in-out hover:shadow-none">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          title={title}
          className=""
        >
          {icon}
        </a>
      </div>
    </>
  );
};

export default ContactCard;
