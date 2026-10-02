import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found__glow" />

      <div className="not-found__content">
        <div className="not-found__illustration" aria-hidden="true">
          <span className="planet planet--one" />
          <span className="planet planet--two" />
          <span className="star star--one">✦</span>
          <span className="star star--two">✦</span>

          <div className="error-number">
            <span>4</span>
            <div className="zero">
              <div className="zero__planet" />
            </div>
            <span>4</span>
          </div>
        </div>

        <p className="not-found__eyebrow">PAGE NOT FOUND</p>

        <h1>
          Looks like you’re
          <br />
          <span>lost in space.</span>
        </h1>

        <p className="not-found__description">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back somewhere familiar.
        </p>

        <div className="not-found__actions">
          <a href="/" className="button button--primary">
            <span>←</span>
            Go back home
          </a>

          <button
            className="button button--secondary"
            onClick={() => window.history.back()}
          >
            Previous page
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
