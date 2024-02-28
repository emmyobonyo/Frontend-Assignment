import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Statistics() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div class="d-none d-md-block statistics__section p-5">
        <div class="p-5 d-md-flex justify-content-between statistics__content">
          <div class="text-center statistics__numbers">
            {counterOn && <CountUp start={0} end={4} duration={2} delay={0} />}
            <p class="fs-4 fw-normal statistics__paragraphs">Programmes</p>
          </div>
          <div class="text-center statistics__numbers">
            {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
            <p class="fs-4 fw-normal statistics__paragraphs">Courses</p>
          </div>
          <div class="text-center statistics__numbers">
            {counterOn && <CountUp start={0} end={5} duration={2} delay={0} />}
            <p class="fs-4 fw-normal statistics__paragraphs">Campuses</p>
          </div>
          <div class="text-center statistics__numbers">
            {counterOn && (
              <CountUp start={0} end={5000} duration={2} delay={0} />
            )}
            <p class="fs-4 fw-normal statistics__paragraphs">Students</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Statistics;
