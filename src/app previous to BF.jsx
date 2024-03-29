import { useRef, useState } from "react";
import Header from "./components/Header";
import { IoIosFitness } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import heroImg from "./media/background-gradient.jpg";
import Footer from "./components/Footer";
import background from "./media/presentation-background.png";
import johnCollage from "./media/john-collage.png";
import johnCrop from "./media/jonh-crop.png";
import maskGroup from "./media/mask-group.png";
import BlackFriday from "./components/BlackFriday";

function App() {
  const ref = useRef();
  const handleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  /* las personas que entren al website ya sabran de el, tendran informacion previa sobre lo 
  que hace, 2 step order form
  
  Normie, bronze
  Serious, silver
  Bodybuild, gold

  Foto de el en el medio
  Solo un hero y los planes debajo de el
  Alrededor del hero (imagen de el) 

  CAMBIAR LOS MESES MONTH
  Get started en mayusculas y subirle la fuente

  */

  /* Hacer un justify content abajo del boton de CTA con lo que ofrece John */
  const [TypeOfPlan, setTypeOfPlan] = useState("a");
  /*   const [ThreeMonths,setThreeMonths] = useState(false)
  const [SixteenWeeks,setSixteenWeeks] = useState(false)
  const [SixMonths,setSixMonths] = useState(false)
  const [Annual,setAnnual] = useState(false) */

  return (
    <div className="App">
      <Header />

      <main className="hero-section">
        <div className="heroImg"></div>
        <img src={johnCrop} className="john-crop" alt="" />
        <img src={maskGroup} className="maskImg" alt="" />
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="heading-text">
              A srs <br />
              <span>transformation</span>
              <br /> awaits {/* Ready to get buffed up? */}
            </h1>
            <button onClick={handleCTA} className="button">
              <IoIosFitness className="icon" />
              Get started
            </button>
          </div>
        </div>
      </main>

      <section ref={ref} className="pricing-container">
        <h2 className="big-text">
          <span className="primary-color-accent">Affordable</span> Coaching
          Plans
        </h2>
        <p className="paragraph-text hero-paragraph">
          <span className="primary-color-accent">EFFER</span> coaching plans
          offer you a fully customized plan, workout regimen, and direct support
          from John during weekly check-ins with updates on your progress.
          <br />
          <br />
          Additionally, our higher tier plans allow you to connect with John
          anytime you want. Text him, call him, let him critique your form or
          adjust your diet on the fly. We are committed to keeping our prices
          low—getting in shape shouldn't cost a fortune!
        </p>

        <h2 className="big-text">Payment Plans</h2>
        <h2 className="big-text">Purchase now, start whenever you want!</h2>
        <div className="plan-toggle">
          <div
            className={
              TypeOfPlan === "a"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("a")}
          >
            <h4 className="medium-text">Monthly</h4>
          </div>
          <div
            className={
              TypeOfPlan === "b"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("b")}
          >
            <h4 className="medium-text">3 Months</h4>
          </div>

          <div
            className={
              TypeOfPlan === "d"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("d")}
          >
            <h4 className="medium-text">6 Months</h4>
          </div>
          <div
            className={
              TypeOfPlan === "e"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("e")}
          >
            <h4 className="medium-text">Annual</h4>
          </div>
          <div
            className={
              TypeOfPlan === "c"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("c")}
          >
            <h4 className="medium-text">Contest Prep </h4>
          </div>
        </div>
        {/*   <BlackFriday TypeOfPlan={TypeOfPlan} /> */}
        <div className="card-wrapper">
          <div
            className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}
          >
            <h2 className="medium-text">Normie</h2>

            <p className="paragraph-text">
              Custom programming in the most afforable way possible
            </p>
            <h4 className="card-text-price">
              {(() => {
                switch (TypeOfPlan) {
                  case "a":
                    return "$100 ";
                  case "b":
                    return "$300 ";
                  case "c":
                    return "$600 ";
                  case "d":
                    return "$600 ";
                  case "e":
                    return "$1200 ";
                  default:
                    return "$100 ";
                }
              })()}
              <span className="price-description">
                {(() => {
                  switch (TypeOfPlan) {
                    case "a":
                      return "/month";
                    case "b":
                      return "/3 months";
                    case "d":
                      return "/6 months";
                    case "e":
                      return "/year";
                  }
                })()}
              </span>
            </h4>
            <ul>
              <li className="card-list">Custom workout regimen and diet</li>
              <li className="card-list">Bi-weekly programming tweaks</li>
              <li className="card-list">E-mail and text me directly</li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href={
                TypeOfPlan === "a" &&
                "https://app.businessoperatingsystem.ca/v2/preview/GJHNN317do8Z1x7XCUjR"
              }
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>

          <div
            className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}
          >
            <h2 className="medium-text">Ascending</h2>
            <p className="paragraph-text">
              Custom programming with constant feedback and more tweaks
            </p>
            <h4 className="card-text-price">
              {(() => {
                switch (TypeOfPlan) {
                  case "a":
                    return "$200 ";
                  case "b":
                    return "$550 ";
                  case "c":
                    return "$1000 ";
                  case "d":
                    return "$1000 ";
                  case "e":
                    return "$1950 ";
                }
              })()}
              <span className="price-description">
                {(() => {
                  switch (TypeOfPlan) {
                    case "a":
                      return "/month";
                    case "b":
                      return "/3 months";
                    case "d":
                      return "/6 months";
                    case "e":
                      return "/year";
                  }
                })()}
              </span>
            </h4>
            <ul>
              <li className="card-list">Custom workout regimen and diet</li>
              <li className="card-list">Weekly programming tweaks</li>
              <li className="card-list">E-mail and text me directly</li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href={
                TypeOfPlan === "a" &&
                "https://app.businessoperatingsystem.ca/v2/preview/89tP85PAcJdSfG0Oct4i"
              }
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>

          <div
            className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}
          >
            <h2 className="medium-text">Srs - Bodybuild</h2>
            <p className="paragraph-text">
              Custom programming with constant feedback and prep secrets
            </p>
            <h4 className="card-text-price">
              {(() => {
                switch (TypeOfPlan) {
                  case "a":
                    return "$250 ";
                  case "b":
                    return "$680 ";
                  case "d":
                    return "$1300 ";
                  case "e":
                    return "$2250 ";
                }
              })()}
              <span className="price-description">
                {(() => {
                  switch (TypeOfPlan) {
                    case "a":
                      return "/month";
                    case "b":
                      return "/3 months";
                    case "d":
                      return "/6 months";
                    case "e":
                      return "/year";
                  }
                })()}
              </span>
            </h4>
            <ul>
              <li className="card-list">Custom workout regimen and diet</li>
              <li className="card-list">Unlimited programming tweaks</li>
              <li className="card-list">Posing lessons and prep tips</li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href={
                TypeOfPlan === "a" &&
                "https://app.businessoperatingsystem.ca/v2/preview/RJOfQ9VNwRD2b4rGG25G"
              }
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>

          {TypeOfPlan === "c" && (
            <div className="card-container">
              <h2 className="medium-text">
                16-week <br /> Contest Prep
              </h2>

              <p className="paragraph-text">
                Custom programming in the most affordable way possible
              </p>
              <h4 className="card-text-price">
                $900
                <span className="price-description"> /16-weeks</span>
              </h4>
              <ul>
                <li className="card-list">Custom workout regimen and diet</li>
                <li className="card-list">Bi-weekly programming tweaks</li>
                <li className="card-list">E-mail and text me directly</li>
              </ul>
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </div>
          )}
        </div>

        {/*        <span className="subtitle-bottom">
          <p className="description-text">Top in the US</p>
        </span> */}
      </section>

      <section className="pricing-container">
        <h2 className="big-text">
          <span className="primary-color-accent">Single</span> Time, Posing
          Session
        </h2>
        <p className="paragraph-text hero-paragraph">
          What’s the point of having an outstanding physique if you can’t show
          it properly? Presentation makes all the difference!
        </p>

        <div className="card-wrapper">
          <div className="card-container">
            <h2 className="medium-text">20-minute posing session</h2>

            <h4 className="card-text-price">$50</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn how to pose properly</li>
              <li className="card-list">
                20-minutes session (Better for advanced athletes)
              </li>
            </ul>
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </div>

          <div className="card-container">
            <h2 className="medium-text">40-minute posing session</h2>

            <h4 className="card-text-price">$90</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn the principles of posing</li>
              <li className="card-list">
                40-minutes session (Better for new athletes)
              </li>
            </ul>
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </div>
        </div>
      </section>

      <section className="presentation-container">
        <div className="presentation-background">
          <img src={background} alt="" />
        </div>
        <div className="presentation-wrapper">
          <div className="presentation-item">
            <h2 className="big-text">
              Anyone can construct a diet plan and workout regimen
            </h2>
            <p className="paragraph-text">
              I've been very fortunate to have people around me both on and
              offline who push me and motivate me. I would like to be there for
              you during your journey as well.
              <br />
              <br />– Giovanni “The Lad” DelBiondo
            </p>
          </div>
          <div className="presentation-item-wrapper">
            <img src={johnCollage} alt="" className="john-collage" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
