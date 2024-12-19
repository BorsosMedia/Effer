import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NormalPlans = ({ TypeOfPlan }) => {
  const [TypeOfOffer, setTypeOfOffer] = useState("2");

  const isCardHidden = (type) => TypeOfPlan === "f" || TypeOfPlan === "c";

  return (
    <div className="card-wrapper">
      <div
        className={
          TypeOfPlan === "f"
            ? " card-container  card-offer-active annual-offer"
            : "card-hidden"
        }
      >
        {TypeOfPlan === "f" && (
          <div className="item-price">Effer’s Last Sale Ever!</div>
        )}

        <div className="hdn-but">
          <h2 className="medium-text">Annual Coaching</h2>
          <div className="too-buttons-container">
            <button
              className={TypeOfOffer === "2" ? "too too-active" : "too"}
              onClick={() => setTypeOfOffer("2")}
            >
              Lifestyle
            </button>
            <button
              className={TypeOfOffer === "1" ? "too too-active" : "too"}
              onClick={() => setTypeOfOffer("1")}
            >
              Competitors
            </button>
          </div>
        </div>
        {TypeOfOffer === "2" && (
          <p className="paragraph-text">
            For just a young lad or ladette trying to improve their physique in
            whatever way, the same attention will be given to you by being in
            frequent communication with me directly.
          </p>
        )}

        {TypeOfOffer === "1" && (
          <p className="paragraph-text">
            For competitors this includes posing sessions via facetime, or in
            person if you are local to Long Island, as many updates as needed,
            supplement guidance, and very frequent communication.
          </p>
        )}

        <h4 className="card-text-price">
          $1500
          <span className="price-description"> /year</span>
        </h4>

        {TypeOfOffer === "1" && (
          <ul>
            <li className="card-list">
              Posing Sessions (FaceTime or in-person if local to Long Island)
            </li>
            <li className="card-list">Frequent Communication</li>
            <li className="card-list">Direct Email & Text Access</li>
            <li className="card-list">Supplement Guidance</li>
          </ul>
        )}
        {TypeOfOffer === "2" && (
          <ul>
            <li className="card-list">Customized Nutrition & Training Plan</li>
            <li className="card-list">Unlimited Updates</li>
            <li className="card-list">Direct Email & Text Access</li>
            <li className="card-list">Supplement Guidance</li>
          </ul>
        )}

        <a
          target="_blank"
          className="purchase-button-link"
          href="https://coaching.effercoaching.com/annual-coaching-package
"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      {!isCardHidden("Normie") && (
        <div
          className={
            TypeOfPlan === "b"
              ? "card-container card-offer-active"
              : "card-container"
          }
        >
          {TypeOfPlan === "b" && <div className="item-price">20% OFF!</div>}
          <h2
            className={
              TypeOfPlan === "b" ? "medium-text text-act" : "medium-text"
            }
          >
            Normie
          </h2>
          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          {TypeOfPlan === "b" && (
            <p className="summer-prg">
              Before <span className="summer-offer">$300</span>
            </p>
          )}
          <h4 className="card-text-price">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "$100 ";
                case "b":
                  return "$240 ";
                case "d":
                  return "$600 ";
                case "e":
                  return "$1200 ";
                default:
                  return "";
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
                  default:
                    return "";
                }
              })()}
            </span>
          </h4>
          <ul>
            <li className="card-list">Custom workout regimen and diet</li>
            <li className="card-list">Bi-weekly programming tweaks</li>
            <li className="card-list">E-mail me directly</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href={(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "https://coaching.effercoaching.com/normie-monthly";
                case "b":
                  return "https://coaching.effercoaching.com/normie-3-months";
                case "d":
                  return "https://coaching.effercoaching.com/normie-6-months";
                case "e":
                  return "https://coaching.effercoaching.com/normie-annual";
                default:
                  return "#";
              }
            })()}
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}

      {!isCardHidden("Ascending") && (
        <div
          className={
            TypeOfPlan === "b"
              ? "card-container card-offer-active"
              : "card-container"
          }
        >
          {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>}

          <h2
            className={
              TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"
            }
          >
            Ascending
          </h2>
          <p className="paragraph-text">
            Custom programming with constant feedback and more tweaks
          </p>

          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return null;
              case "b":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$550</span>
                  </p>
                );
              case "d":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$1200</span>
                  </p>
                );
              case "e":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$2400</span>
                  </p>
                );
            }
          })()}

          <h4 className="card-text-price">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "$200 ";
                case "b":
                  return "$440 ";

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
            <li className="card-list">FaceTime consult</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href={(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "https://coaching.effercoaching.com/ascending-monthly";
                case "b":
                  return "https://coaching.effercoaching.com/ascending-3-month";
                case "d":
                  return "https://coaching.effercoaching.com/ascending-6-month";
                case "e":
                  return "https://coaching.effercoaching.com/ascending-annual";
              }
            })()}
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}

      {!isCardHidden("SrsBodybuild") && (
        <div
          className={
            TypeOfPlan === "b"
              ? "card-container card-offer-active"
              : "card-container"
          }
        >
          {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>}
          <h2
            className={
              TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"
            }
          >
            Srs - Bodybuild
          </h2>
          <p className="paragraph-text">
            Custom programming with constant feedback and prep secrets
          </p>

          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return null;
              case "b":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$750</span>
                  </p>
                );
              case "d":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$1650</span>
                  </p>
                );
              case "e":
                return (
                  <p className="summer-prg">
                    Before <span className="summer-offer">$3300</span>
                  </p>
                );
            }
          })()}

          {/*   {TypeOfPlan == "b" && (
          
        )} */}

          <h4 className="card-text-price">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "$275 ";
                case "b":
                  return "$600 ";
                case "d":
                  return "$1450 ";
                case "e":
                  return "$2550 ";
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
            <li className="card-list">E-mail and text me directly</li>
            <li className="card-list">FaceTime consult</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href={(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "https://coaching.effercoaching.com/srs-bodybuild-monthly";
                case "b":
                  return "https://coaching.effercoaching.com/srs-bodybuild-3-months";
                case "d":
                  return "https://coaching.effercoaching.com/srs-bodybuild-6-months";
                case "e":
                  return "https://coaching.effercoaching.com/srs-bodybuild-annual";
              }
            })()}
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}

      {TypeOfPlan === "c" && (
        <div className="card-container">
          <h2 className="medium-text">
            16-Week <br /> Contest Prep
          </h2>
          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          <h4 className="card-text-price">
            $900 <span className="price-description">/16-weeks</span>
          </h4>
          <ul>
            <li className="card-list">Custom workout regimen and diet</li>
            <li className="card-list">Unlimited programming tweaks</li>
            <li className="card-list">Posing lessons and prep tips</li>
            <li className="card-list">E-mail me directly</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href="https://coaching.effercoaching.com/16-week-contest-prep"
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default NormalPlans;
