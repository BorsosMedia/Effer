import { useRef, useState, lazy } from "react";
import Header from "./components/Header";
import { IoIosFitness } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FIPreview from "./media/fi-preview.png";
import Footer from "./components/Footer";
import background from "./media/presentation-background.png";
import johnCollage from "./media/john-collage.png";
import johnCrop from "./media/jonh-crop.png";
import maskGroup from "./media/mask-group.png";

import NormalPlans from "./components/NormalPlans";
import DiscordSection from "./components/DiscordSection";
import BlackFriday from "./components/BlackFriday";
import OnetimePlans from "./components/OnetimePlans";

const InstagramWidget = lazy(() => import("./components/InstagramWidget"));
const TiktokWidget = lazy(() => import("./components/TiktokWidget"));

function App() {
  /*   const InstagramWidget  */

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
  const [TypeOfPlan, setTypeOfPlan] = useState("f");

  return (
    <div className="App">
      <Header />

      <main className="hero-section">
        <div className="heroImg"></div>
        <img src={johnCrop} className="john-crop" alt="" />
        <img src={maskGroup} className="maskImg" alt="" />
        <div className="hero-container">
          <div className="hero-text">
            <p className="paragraph-text hero-paragraph">
              <span className="primary-color-accent">IFBB</span> Pro
            </p>
            <h1 className="heading-text">
              The biggest sale <br />
              I'm <span className="primary-color-accent">
                ever
              </span> running <br />
              and <span className="primary-color-accent">never</span> doing
              again.
            </h1>
            <p className="paragraph-text hero-paragraph">
              Sale Ends on Jan. 31st... srs
            </p>
            {/*  <p>
              EVERYTHING at half price until <span>Nov. 2nd</span>
            </p> */}
            <button onClick={handleCTA} className="button">
              <IoIosFitness className="icon" />
              Right nah?
            </button>
          </div>
        </div>
      </main>
      <section className="FI--section-block">
        <div>
          <h1>
            Where’s Your <br />
            <span>
              FEROCIOUS <br />
              <span>INTENSITY?</span>
            </span>
          </h1>
          <p className="FI--text">
            You thought you knew srs training? We're going to go{" "}
            <span className="primary-color-accent">FULL THROTTLE</span> with a
            new ferociously intense workout everyday.
          </p>
          <a
            href="https://www.ferociousintensity.com/"
            target="_blank"
            className="button FI--button-lg"
            aria-label="Join Ferocious Intensity"
          >
            Start Your Free 7-Day Trial
          </a>
        </div>
        <div className="FI--desc-block">
          <img
            src={FIPreview}
            alt=""
            className="fi--preview-mock"
            loading="lazy"
          />
          <div>
            <h5>Daily Routine:</h5>
            <ul>
              <li>$6 /Month</li>
              <li>$60 /Year</li>
            </ul>
          </div>
          <a
            href="https://www.ferociousintensity.com/"
            className="button FI--button-sm"
          >
            Start Your Free 7-Day Trial
          </a>
        </div>
      </section>
      <section className="pricing-container">
        {/*         <h4 className="black-friday-heading">Black Friday Sale Ends In:</h4>
        <Timer /> */}

        <h2 className="big-text">
          <span className="primary-color-accent">Affordable</span> Coaching
          Plans
        </h2>
        <p className="paragraph-text hero-paragraph">
          <span className="primary-color-accent">Effer Coaching</span> is a
          fully customized plan, workout regiment, and direct support from me
          during weekly check-ins with updates on your progress.
          <br />
          <br />
          Additionally, the higher tier plans allow you to connect with me
          anytime you want. Text, call... I'll critique your form or adjust your
          diet on the fly. I'm committed to keeping my prices low because
          getting in shape shouldn't cost a fortune!
        </p>

        <h2 className="big-text" ref={ref}>
          Srs Sale
        </h2>
        {/*       <h2 className="big-text">Purchase now, start whenever you want!</h2> */}
        <div className="plan-toggle">
          {/*  <div
            className={
              TypeOfPlan === "bf"
                ? "plan-type-container black-friday-button"
                : "plan-type-container bf-hover"
            }
            onClick={() => setTypeOfPlan("bf")}
          >
            <TbChristmasTree className="icon" />
            <h4 className="medium-text">New Year's Deal</h4>
          </div> */}
          <div
            className={
              TypeOfPlan === "f"
                ? "plan-type-container nys-offer-button color-accent"
                : "plan-type-container nys-offer-button"
            }
            onClick={() => setTypeOfPlan("f")}
          >
            <h4 className="medium-text">Effer’s Last Sale Ever</h4>
          </div>
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
                : "plan-type-container"
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

        {/*    <BlackFriday TypeOfPlan={TypeOfPlan} /> */}
        <NormalPlans TypeOfPlan={TypeOfPlan} />
        {/*     <SpecialSale TypeOfPlan={TypeOfPlan} /> */}
        {/* */}
      </section>
      <OnetimePlans />

      <section className="pricing-container">
        <h2 className="big-text">
          <span className="primary-color-accent">Single</span> Time, Posing
          Session
        </h2>
        <p className="paragraph-text hero-paragraph">
          What’s the point of having an outstanding physique if you can’t show
          it properly? Presentation makes all the difference!
        </p>

        <div className="card-wrapper ">
          <div className="card-container posing-card">
            <h2 className="medium-text">20-Minute Posing Session</h2>
            {/*    <p className="BF-deal">
              Before <span>$50</span>
            </p> */}
            <h4 className="card-text-price">$50</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn how to pose properly</li>
              <li className="card-list">
                20-minutes session (Better for advanced athletes)
              </li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href="https://coaching.effercoaching.com/20-minute-posing-session"
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>

          <div className="card-container posing-card">
            <h2 className="medium-text">40-Minute Posing Session</h2>
            {/*  <p className="BF-deal">
              Before <br />
              <span>$90</span>
            </p> */}
            {/*    <p className="BF-deal">
              Before <span>$90</span>
            </p> */}
            <h4 className="card-text-price">$90</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn the principles of posing</li>
              <li className="card-list">
                40-minutes session (Better for new athletes)
              </li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href="https://coaching.effercoaching.com/40-minute-posing-session"
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>
        </div>
        <BlackFriday />
      </section>

      <section className="presentation-container">
        <div className="presentation-background">
          <img src={background} alt="" />
        </div>
        <DiscordSection />

        <div className="presentation-wrapper">
          <div className="presentation-item">
            <h2 className="big-text">Only The Objective Is What Matters</h2>
            <p className="paragraph-text">
              You are in control of your progress. You make the effort. I am
              here to guide you in making the process as efficient as possible.
              <br />
              <br />– Giovanni “The Lad” DelBiondo
            </p>
          </div>
          <div className="presentation-item-wrapper">
            <img
              src={johnCollage}
              alt="Collage with photos of John Effer"
              className="john-collage"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TiktokWidget />
      <InstagramWidget />

      <Footer />
    </div>
  );
}

export default App;
