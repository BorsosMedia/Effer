import { AiOutlineShoppingCart } from "react-icons/ai";

const NormalPlans = ({ TypeOfPlan }) => {
  return (
    <div className={TypeOfPlan === "bf" ? "card-hidden" : "card-wrapper"}>
      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        {/*  {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
        <h2
          className={TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"}
        >
          {(() => {
            switch (TypeOfPlan) {
              case "b":
                return "Normie ";
              default:
                return "Normie";
            }
          })()}
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        {TypeOfPlan !== "a" && (
          <p className="summer-prg">
            Before{" "}
            <span className="summer-offer">
              {(() => {
                switch (TypeOfPlan) {
                  case "b":
                    return "$600 ";

                  case "d":
                    return "$1200 ";
                  case "e":
                    return "$2400 ";
                }
              })()}
            </span>
          </p>
        )}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$200 ";
              case "b":
                return "$500 ";
              case "c":
                return "$1000 ";
              case "d":
                return "$1000 ";
              case "e":
                return "$1500 ";
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
          <li className="card-list">E-mail me directly</li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/normie-monthly";
              case "b":
                return "https://effercoaching.com/normie-3-months";
              case "d":
                return "https://effercoaching.com/normie-6-months";
              case "e":
                return "https://effercoaching.com/normie-annual";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        {/* {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
        <h2
          className={TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"}
        >
          {(() => {
            switch (TypeOfPlan) {
              case "b":
                return "Ascending";
              default:
                return "Ascending";
            }
          })()}
        </h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and more tweaks
        </p>
        {TypeOfPlan !== "a" && (
          <p className="summer-prg">
            Before{" "}
            <span className="summer-offer">
              {(() => {
                switch (TypeOfPlan) {
                  case "b":
                    return "$900 ";
                  case "d":
                    return "$1800 ";
                  case "e":
                    return "$3600 ";
                }
              })()}
            </span>
          </p>
        )}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$300 ";
              case "b":
                return "$800 ";
              case "c":
                return "$1500 ";
              case "d":
                return "$1500 ";
              case "e":
                return "$2500 ";
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
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/ascending-monthly";
              case "b":
                return "https://effercoaching.com/ascending-3-month";
              case "d":
                return "https://effercoaching.com/ascending-6-month";
              case "e":
                return "https://effercoaching.com/ascending-annual";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        {/*  {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}

        <h2
          className={TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"}
        >
          {(() => {
            switch (TypeOfPlan) {
              case "b":
                return "Srs - Bodybuild";
              default:
                return "Srs - Bodybuild";
            }
          })()}
        </h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and prep secrets
        </p>
        {TypeOfPlan !== "a" && (
          <p className="summer-prg">
            Before{" "}
            <span className="summer-offer">
              {(() => {
                switch (TypeOfPlan) {
                  case "b":
                    return "$1200 ";

                  case "d":
                    return "$2400 ";
                  case "e":
                    return "$4800 ";
                }
              })()}
            </span>
          </p>
        )}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$400 ";
              case "b":
                return "$1000 ";
              case "d":
                return "$2000 ";
              case "e":
                return "$3500 ";
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
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/srs-bodybuild-monthly";
              case "b":
                return "https://effercoaching.com/srs-bodybuild-3-months";
              case "d":
                return "https://effercoaching.com/srs-bodybuild-6-months";
              case "e":
                return "https://effercoaching.com/srs-bodybuild-annual";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      {TypeOfPlan === "c" && (
        <div className="card-container">
          <h2 className="medium-text">
            16-Week <br /> Contest Prep
          </h2>

          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          <h4 className="card-text-price">
            $1500
            <span className="price-description"> /16-weeks</span>
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
            href="https://effercoaching.com/16-week-contest-prep"
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
