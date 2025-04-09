"use client";
import { useEffect, useRef, useState } from "react";
import "./globals.scss";

export default function Page() {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalCounter, setIntervalCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [liNum, setLiNum] = useState(75);
  const [flip, setFlip] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number): string => {
    return time < 10 ? "0" + time.toString() : time.toString();
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setIntervalCounter((prev) => prev + 10);

        if (intervalCounter % 1000 === 0) {
          setCurrentTime((prev) => prev + 1000);
        }

        setLiNum((prev) => (prev > 100 ? 0 : prev + 1));
        if (liNum === 75) {
          setFlip((prev) => !prev);
        }

        const target = document.querySelectorAll("#clockline li")[
          liNum
        ] as HTMLElement;
        if (target) {
          target.style.background = flip ? "#fff" : "#339dac";
        }
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, intervalCounter, liNum, flip]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentTime(0);
    setIntervalCounter(0);
    setLiNum(75);
    setFlip(false);
    document.querySelectorAll("#clockline li").forEach((li) => {
      (li as HTMLElement).style.background = "#fff";
    });
  };

  const hours = formatTime(Math.floor(currentTime / (1000 * 60 * 60)));
  const minutes = formatTime(
    Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatTime(Math.floor((currentTime % (1000 * 60)) / 1000));

  return (
    <div className="wrapper">
      <div className="container">
        <div className="icons" id="btn-start-stop" onClick={handleStartStop}>
          <span className="stop-watch">
            <span className="sw-parts">
              <span className="sw-parts2" id="icn-clock-line"></span>
            </span>
          </span>
          <span className="label" id="label-start-stop">
            {isRunning ? "STOP" : "START"}
          </span>
        </div>
        <div className="clock">
          <p>
            <span id="hr">{hours}</span>:<span id="min">{minutes}</span>:
            <span id="sec">{seconds}</span>
          </p>
        </div>
        <ul className="clockline" id="clockline">
          {Array.from({ length: 150 }, (_, i) => (
            <li key={i}></li>
          ))}
        </ul>
        <div className="btn btn-reset" id="btn-reset" onClick={handleReset}>
          <span className="bl-parts"></span>
          <span className="bl-parts"></span>
          <span className="btn-label">RESET</span>
        </div>
      </div>
    </div>
  );
}
