import "./SmallProj.css"

// images
import image from "../../assets/projects/battle-game.jpg"
import stopwatch from "../../assets/small-proj/ss-stopwatch.png"

const SmallProj = () => {
  return (
    <>
     <div className="small-proj__container">
          <h3 className="sp__header">Small Projects</h3>

          <div className="sp__content">
            <article className="sp-card">
              <a href="" target="_blank" rel="noreferrer"><img src={stopwatch} alt="stopwatch" />
              <p>stopwatch</p></a>
            </article>
            <article className="sp-card">
              <a href="" target="_blank" rel="noreferrer"><img src={stopwatch} alt="stopwatch" />
              <p>stopwatch</p></a>
            </article>
          </div>
        </div>
    </>
  )
}

export default SmallProj