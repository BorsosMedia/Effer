import { AiOutlineShoppingCart } from "react-icons/ai";

const NormalPlans = ({ TypeOfPlan }) => {
  return (
    <div className={TypeOfPlan === "bf" ? "card-hidden" : "card-wrapper"}>
      {TypeOfPlan === "b" ? null : (
        <div
          className={
            TypeOfPlan === "c"
              ? "card-hidden"
              : TypeOfPlan == "b"
              ? "card-container card-offer-active"
              : "card-container"
          }
        >
          {/*  {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
          {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>}
          <h2
            className={
              TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"
            }
          >
            Normie
          </h2>

          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          {TypeOfPlan == "b" && (
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
                  return "https://coaching.effercoaching.com/normie-monthly";
                case "b":
                  return "https://coaching.effercoaching.com/normie-3-months";
                case "d":
                  return "https://coaching.effercoaching.com/normie-6-months";
                case "e":
                  return "https://coaching.effercoaching.com/normie-annual";
              }
            })()}
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}

      <div
        className={
          TypeOfPlan === "c"
            ? "card-hidden"
            : TypeOfPlan == "b"
            ? "card-hidden"
            : "card-container "
        }
      >
        {/* {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
        {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>}
        <h2
          className={TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"}
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

      <div
        className={
          TypeOfPlan === "c"
            ? "card-hidden"
            : TypeOfPlan == "b"
            ? "card-container card-offer-active"
            : "card-container"
        }
      >
        {/*  {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
        {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>}
        <h2
          className={TypeOfPlan == "b" ? "medium-text text-act" : "medium-text"}
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

      {TypeOfPlan === "c" && (
        <div className="card-container">
          <h2 className="medium-text">
            16-Week <br /> Contest Prep
          </h2>

          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>

          <h4 className="card-text-price">
            $900 <span className="price-description"> /16-weeks</span>
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
