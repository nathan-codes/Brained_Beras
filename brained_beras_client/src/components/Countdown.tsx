import React, { useState, useEffect } from "react";
import { Colons } from "../assets"; // Ensure this import path is correct

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d,
          hours: h,
          minutes: m,
          seconds: s,
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format number to two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0").split("");
  };

  const timerUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-between">
      {timerUnits.map(({ label, value }, index) => (
        <div key={label} className="flex flex-col">
          <h3 className="text-center text-[#FEDB63] font-outline-2 text-[15px]">{label}</h3>
          <div className="flex gap-1 items-center">
            {formatNumber(value).map((digit, idx) => (
              <span
                key={idx}
                className="bg-white rounded-[13px] border-2 w-[30px] lg:w-[35px] flex items-center justify-center h-[38px] text-[20px] font-[400]"
              >
                {digit}
              </span>
            ))}
            {/* Don't show colon for the last unit */}
            {index < timerUnits.length - 1 && (
              <span>
                <img src={Colons} alt=":" className="h-[18px] w-[5px] " />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
