import React, { useState, useEffect } from "react";
import "./style.css";
import CountUp from "react-countup";
function CountUpProgress() {
  return (
    <div className="App flex justify-center items-center gap-12 my-8">
      <div className="circle-progress">
        <div>
          <h2 className="text-blue-600 font-bold">Diagonistic</h2>
          <CountUp delay={2} end={3000} className="mx-4 text-2xl" />
        </div>
      </div>
      <div className="circle-progress1 circle-progress">
        <div>
          <h2 className="text-yellow-600 font-bold">Gynocology</h2>
          <CountUp delay={2} end={5000} className="mx-4 text-2xl after: +" />
        </div>
      </div>
      <div className="circle-progress2 circle-progress">
        <div>
          <h2 className="text-purple-600 font-bold">Surgery</h2>
          <CountUp delay={2} end={7000} className="mx-4 text-2xl after: +" />
        </div>
      </div>
      <div className="circle-progress3 circle-progress">
        <div>
          <h2 className="text-pink-600 font-bold">Free Medicine</h2>
          <CountUp delay={2} end={15000} className="mx-4 text-2xl after: +" />
        </div>
      </div>
    </div>
  );
}

export default CountUpProgress;
