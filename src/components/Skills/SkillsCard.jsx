import "./SkillsCard.css"

const SkillsCard = ({logo, altTitle, logoName}) => {
  return (
    <>
     <article class="skills__icon">
            <div className="card-logo">
              <img src={logo} alt={altTitle} />
              <p>{logoName}</p>
            </div>
          </article>
    </>
  )
}

export default SkillsCard