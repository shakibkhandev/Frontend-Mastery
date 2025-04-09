"use client";

import { useEffect, useState } from "react";

interface ClockProps {
  international?: boolean;
  clockType?: "digital" | "analog" | "both";
  theme?: "dark" | "light" | "sunset" | "ocean" | "forest" | "neon";
  size?: "sm" | "md" | "lg" | "xl";
  showSeconds?: boolean;
  showDate?: boolean;
  animationSpeed?: "slow" | "normal" | "fast";
  customColors?: {
    hourHand?: string;
    minuteHand?: string;
    secondHand?: string;
    hourMarkers?: string;
    minuteMarkers?: string;
    numbers?: string;
    digitalTime?: string;
    digitalDate?: string;
  };
  className?: string;
  time?: Date;
  onTimeChange?: (time: Date) => void;
  updateInterval?: number;
}

export default function Clock({
  international = true,
  clockType = "both",
  theme = "dark",
  size = "md",
  showSeconds = true,
  showDate = true,
  animationSpeed = "normal",
  customColors,
  className = "",
  time: externalTime,
  onTimeChange,
  updateInterval = 1000,
}: ClockProps) {
  const [internalTime, setInternalTime] = useState(new Date());
  const time = externalTime || internalTime;

  useEffect(() => {
    if (!externalTime) {
      const timer = setInterval(() => {
        const newTime = new Date();
        setInternalTime(newTime);
        onTimeChange?.(newTime);
      }, updateInterval);

      return () => clearInterval(timer);
    }
  }, [externalTime, onTimeChange, updateInterval]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  const sizeClasses = {
    sm:
      clockType === "digital"
        ? "w-auto h-auto"
        : "w-auto h-auto min-w-48 min-h-48",
    md:
      clockType === "digital"
        ? "w-auto h-auto"
        : "w-auto h-auto min-w-96 min-h-96",
    lg:
      clockType === "digital"
        ? "w-auto h-auto"
        : "w-auto h-auto min-w-[32rem] min-h-[32rem]",
    xl:
      clockType === "digital"
        ? "w-auto h-auto"
        : "w-auto h-auto min-w-[40rem] min-h-[40rem]",
  };

  const sizeMultiplier = {
    sm: 1.7,
    md: 1,
    lg: 1.5,
    xl: 2,
  };

  const digitalTextSizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  const digitalDateSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  const animationClasses = {
    slow: "transition-transform duration-1000",
    normal: "transition-transform duration-500",
    fast: "transition-transform duration-300",
  };

  const themeClasses = {
    dark: {
      clockFace: "border-gray-700 bg-black/20",
      hourMarker: "bg-white",
      minuteMarker: "bg-gray-500",
      hourHand: "bg-white",
      minuteHand: "bg-blue-400",
      secondHand: "bg-red-500",
      centerDot: "bg-white",
      centerDotInner: "bg-red-500",
      digitalTime: "text-white",
      digitalDate: "text-gray-400",
    },
    light: {
      clockFace: "border-gray-300 bg-white/80",
      hourMarker: "bg-gray-800",
      minuteMarker: "bg-gray-400",
      hourHand: "bg-gray-800",
      minuteHand: "bg-blue-600",
      secondHand: "bg-red-600",
      centerDot: "bg-gray-800",
      centerDotInner: "bg-red-600",
      digitalTime: "text-gray-800",
      digitalDate: "text-gray-600",
    },
    sunset: {
      clockFace:
        "border-orange-500 bg-gradient-to-br from-orange-500/20 to-purple-500/20",
      hourMarker: "bg-orange-300",
      minuteMarker: "bg-orange-200/50",
      hourHand: "bg-orange-300",
      minuteHand: "bg-yellow-400",
      secondHand: "bg-pink-500",
      centerDot: "bg-orange-300",
      centerDotInner: "bg-pink-500",
      digitalTime: "text-orange-300",
      digitalDate: "text-orange-200",
    },
    ocean: {
      clockFace:
        "border-blue-400 bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      hourMarker: "bg-cyan-300",
      minuteMarker: "bg-blue-200/50",
      hourHand: "bg-cyan-300",
      minuteHand: "bg-blue-400",
      secondHand: "bg-teal-500",
      centerDot: "bg-cyan-300",
      centerDotInner: "bg-teal-500",
      digitalTime: "text-cyan-300",
      digitalDate: "text-blue-200",
    },
    forest: {
      clockFace:
        "border-green-600 bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      hourMarker: "bg-emerald-300",
      minuteMarker: "bg-green-200/50",
      hourHand: "bg-emerald-300",
      minuteHand: "bg-green-400",
      secondHand: "bg-lime-500",
      centerDot: "bg-emerald-300",
      centerDotInner: "bg-lime-500",
      digitalTime: "text-emerald-300",
      digitalDate: "text-green-200",
    },
    neon: {
      clockFace: "border-purple-500 bg-black/40",
      hourMarker: "bg-purple-400",
      minuteMarker: "bg-purple-300/30",
      hourHand: "bg-purple-400",
      minuteHand: "bg-pink-400",
      secondHand: "bg-cyan-400",
      centerDot: "bg-purple-400",
      centerDotInner: "bg-cyan-400",
      digitalTime: "text-purple-400",
      digitalDate: "text-pink-300",
    },
  };

  const currentTheme = themeClasses[theme];
  const currentSize = sizeClasses[size];
  const currentAnimation = animationClasses[animationSpeed];

  const colors = {
    ...currentTheme,
    ...(customColors && {
      hourHand: customColors.hourHand || currentTheme.hourHand,
      minuteHand: customColors.minuteHand || currentTheme.minuteHand,
      secondHand: customColors.secondHand || currentTheme.secondHand,
      hourMarker: customColors.hourMarkers || currentTheme.hourMarker,
      minuteMarker: customColors.minuteMarkers || currentTheme.minuteMarker,
      digitalTime: customColors.numbers || currentTheme.digitalTime,
      digitalDate: customColors.digitalDate || currentTheme.digitalDate,
    }),
  };

  return (
    <div className={`relative inline-block ${currentSize} ${className}`}>
      {/* Clock face */}
      {clockType !== "digital" && (
        <div
          className={`absolute w-full h-full rounded-full border-4 shadow-2xl backdrop-blur-sm ${colors.clockFace}`}
        >
          {/* Hour numbers and markers */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: "0",
                width: "100%",
                height: "100%",
                transform: `rotate(${i * 6}deg)`,
              }}
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${
                  i % 5 === 0 ? "w-[3px] h-4" : "w-[1px] h-2"
                } ${i % 5 === 0 ? colors.hourMarker : colors.minuteMarker}`}
              />
              {i % 5 === 0 && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 text-sm font-light ${colors.digitalTime}`}
                  style={{
                    top: "8%",
                    transform: `rotate(${-i * 6}deg)`,
                  }}
                >
                  {international
                    ? (i / 5 === 0 ? 24 : i / 5 + 12).toString()
                    : (i / 5 === 0
                        ? 12
                        : i / 5 > 12
                        ? i / 5 - 12
                        : i / 5
                      ).toString()}
                </div>
              )}
            </div>
          ))}

          {/* Hour hand */}
          <div
            className={`absolute w-[4px] rounded-full origin-bottom shadow-lg ${colors.hourHand} ${currentAnimation}`}
            style={{
              left: "calc(50% - 2px)",
              bottom: "50%",
              height: `${20 * sizeMultiplier[size]}px`,
              transform: `rotate(${hourDegrees}deg)`,
            }}
          />

          {/* Minute hand */}
          <div
            className={`absolute w-[3px] rounded-full origin-bottom shadow-lg ${colors.minuteHand} ${currentAnimation}`}
            style={{
              left: "calc(50% - 1.5px)",
              bottom: "50%",
              height: `${28 * sizeMultiplier[size]}px`,
              transform: `rotate(${minuteDegrees}deg)`,
            }}
          />

          {/* Second hand */}
          {showSeconds && (
            <div
              className={`absolute w-[1px] rounded-full origin-bottom shadow-lg ${colors.secondHand} ${currentAnimation}`}
              style={{
                left: "calc(50% - 0.5px)",
                bottom: "50%",
                height: `${32 * sizeMultiplier[size]}px`,
                transform: `rotate(${secondDegrees}deg)`,
              }}
            />
          )}

          {/* Center dot */}
          <div
            className={`absolute rounded-full shadow-lg ${colors.centerDot}`}
            style={{
              width: `${4 * sizeMultiplier[size]}px`,
              height: `${4 * sizeMultiplier[size]}px`,
              left: `calc(50% - ${2 * sizeMultiplier[size]}px)`,
              top: `calc(50% - ${2 * sizeMultiplier[size]}px)`,
            }}
          >
            <div
              className={`absolute rounded-full ${colors.centerDotInner}`}
              style={{
                width: `${2 * sizeMultiplier[size]}px`,
                height: `${2 * sizeMultiplier[size]}px`,
                left: `${sizeMultiplier[size]}px`,
                top: `${sizeMultiplier[size]}px`,
              }}
            />
          </div>
        </div>
      )}

      {/* Digital time display */}
      {clockType !== "analog" && (
        <div
          className={`text-center ${
            clockType === "digital"
              ? "p-4"
              : "absolute -bottom-24 left-0 right-0"
          }`}
        >
          <div
            className={`${digitalTextSizes[size]} font-light tracking-widest ${colors.digitalTime}`}
          >
            {time
              .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: showSeconds ? "2-digit" : undefined,
                hour12: !international,
              })
              .toUpperCase()}
          </div>
          {showDate && (
            <div
              className={`${digitalDateSizes[size]} mt-2 tracking-wider ${colors.digitalDate}`}
            >
              {time.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
