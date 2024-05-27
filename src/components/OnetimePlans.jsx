import React from "react";

function OnetimePlans() {
  return (
    <section className="single-plans--container">
      <h2 className="big-text">
        <span className="primary-color-accent">One Time</span> Custom Plans
      </h2>
      <p className="paragraph-text">
        Let me provide you with all the resources so you can reach your fitness
        goals.
      </p>
      <div className="plans-container">
        <div className="one-time-plan--block">
          <h2 className="medium-text">
            One Time <br />
            Meal Plan
          </h2>
          <p>Get a srs meal plan customized to your goals</p>
          <p className="summer-prg"></p>

          <h4>$150</h4>
          <ul>
            <li>Specific programming</li>
            <li>Results orientated</li>
            <li>Tremendous results</li>
          </ul>
          <a
            href="https://coaching.effercoaching.com/one-time-meal-plan"
            target="_blank"
            className="button"
          >
            Purchase
          </a>
        </div>
        <div className="one-time-plan--block">
          <h2 className="medium-text">
            One Time <br />
            Training Plan
          </h2>
          <p>Get a srs training plan customized to your goals</p>
          <p className="summer-prg"></p>
          <h4>$150</h4>
          <ul>
            <li>Specific programming</li>
            <li>Results orientated</li>
            <li>Tremendous results</li>
          </ul>
          <a
            href="https://coaching.effercoaching.com/one-time-training-plan"
            target="_blank"
            className="button"
          >
            Purchase
          </a>
        </div>
        <div className="one-time-plan--block">
          <h2 className="medium-text">
            One Time
            <br /> Training & Meal Plan
          </h2>
          <p>Get srs meals and training plans customized to your goals</p>
          <p className="summer-prg"></p>

          <h4>$250</h4>
          <ul>
            <li>Specific programming</li>
            <li>Results orientated</li>
            <li>Tremendous results</li>
          </ul>
          <a
            href="https://coaching.effercoaching.com/one-time-training-and-meal-plan"
            target="_blank"
            className="button"
          >
            Purchase
          </a>
        </div>
      </div>
    </section>
  );
}

export default OnetimePlans;
