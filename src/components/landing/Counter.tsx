import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    triggerOnce: true, // Ensure the animation triggers only once
  });

  const stats = [
    {
      count: 515329,
      text: "Total User",
    },
    {
      count: 798,
      text: "Total Offer",
    },
    {
      count: 177804,
      text: "Offer Completed",
    },
    {
      count: 242580,
      text: "Paid Out",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center">
      {/* <div>
        <h2 className="text-4xl font-bold text-center text-white">Our Stats</h2>
      </div> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12"
        ref={ref}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-left border rounded-md font-sans p-10"
          >
            <div className="text-3xl font-bold text-green-600">
              {stat.text === "Paid Out" ? "$" : ""}
              {inView ? <CountUp start={0} end={stat.count} duration={2} /> : 0}
              {stat.text === "Paid Out" ? "+" : "+"}
            </div>
            <p className="text-base font-semibold text-gray-600 mt-1">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
