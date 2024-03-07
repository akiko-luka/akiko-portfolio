import "./SmallProj.css"

// images
import stopwatch from "../../assets/small-proj/ss-stopwatch.png"

const SmallProj = () => {
  return (
    <>
     <div className="small-proj__container">
          <h3 className="sp__header">Small Projects</h3>

          <div className="sp__content">
            <article className="sp-card">
              <a href="https://akiko-luka.github.io/stopwatch/" target="_blank" rel="noreferrer"><img src={stopwatch} alt="stopwatch" />
              <p>stopwatch</p></a>
            </article>
            {/* add small proj --this stopwatch is temporary-- */}
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