import "./SmallProj.css"

// images
import image from "../../assets/projects/battle-game.jpg"

const SmallProj = () => {
  return (
    <>
     <div className="small-proj__container">
          <h3 className="sp__header">Small Projects</h3>

          <div className="sp__content">
            <article className="sp-card">
              <a href="https://github.com/akiko-luka/battle-game" target="_blank" rel="noreferrer"><img src={image} alt="battle-game" />
              <p>battle game</p></a>
            </article>
            <article className="sp-card">
              <a href="https://github.com/akiko-luka/battle-game" target="_blank" rel="noreferrer"><img src={image} alt="battle-game" />
              <p>battle game</p></a>
            </article>
          </div>
        </div>
    </>
  )
}

export default SmallProj