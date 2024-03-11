import "./SkillsCard.css"

const SkillsCard = ({logo, altTitle, logoName}) => {
  return (
    <>
     <article className="icon__container">
            <div className="icon__card">
              <img src={logo} alt={altTitle} />
              <p>{logoName}</p>
            </div>
          </article>
    </>
  )
}

export default SkillsCard