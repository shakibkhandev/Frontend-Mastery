"use client";
import { useEffect, useRef } from "react";

interface SliderComponentProps {
  timelineColor?: string;
  thumbIndicatorColor?: string;
  height?: number;
  previewProgress?: boolean;
  progress?: number;
  onProgress?: (progress: number) => any;
  thumbIndicatorSize?: number;
  increaseScale?: boolean;
  showThumbIndicator?: boolean;
}

export default function SliderComponent({
  timelineColor = "red",
  thumbIndicatorColor = "red",
  height = 5,
  previewProgress = true,
  progress = 0,
  onProgress = () => {},
  thumbIndicatorSize = 1,
  increaseScale = true,
  showThumbIndicator = false,
}: SliderComponentProps) {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  let isScrubbing: boolean;

  function toggleScrubbing(e: MouseEvent) {
    const timelineContainer = timelineContainerRef.current;
    if (!timelineContainer) return;
    isScrubbing = (e.buttons & 1) === 1;
    timelineContainer.classList.toggle("scrubbing", isScrubbing);
    handleTimelineUpdate(e);
  }

  function handleTimelineUpdate(e: MouseEvent) {
    const timelineContainer = timelineContainerRef.current;
    if (!timelineContainer) return;
    const rect = timelineContainer.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    timelineContainer.style.setProperty(
      "--preview-position",
      percent.toString()
    );
    if (isScrubbing) {
      e.preventDefault();
      timelineContainer.style.setProperty(
        "--progress-position",
        percent.toString()
      );
      onProgress(percent);
    }
  }

  useEffect(() => {
    const timelineContainer = timelineContainerRef.current;
    if (!timelineContainer) return;

    const handleMouseUp = (e: MouseEvent) => {
      if (isScrubbing) toggleScrubbing(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isScrubbing) handleTimelineUpdate(e);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    timelineContainer.addEventListener("mousemove", handleTimelineUpdate);
    timelineContainer.addEventListener("mousedown", toggleScrubbing);

    return () => {
      timelineContainer.removeEventListener("mousemove", handleTimelineUpdate);
      timelineContainer.removeEventListener("mousedown", toggleScrubbing);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer) {
      timelineContainer.style.setProperty(
        "--progress-position",
        progress.toString()
      );
    }
  }, [progress]);

  return (
    <div
      ref={timelineContainerRef}
      className={`group relative mx-2 flex cursor-pointer items-center`}
      style={{ height: `${height * 2}px` }}
    >
      <div
        className={`relative h-full w-full bg-gray-400/50 ${
          increaseScale ? "group-hover:h-full scrubbing:h-full" : ""
        }`}
        style={{ height: `${height}px` }}
      >
        {/* Preview bar */}
        {previewProgress && (
          <div
            className="absolute left-0 top-0 bottom-0 bg-gray-300 opacity-0 transition-opacity group-hover:opacity-100 scrubbing:opacity-100"
            style={{
              right: `calc(100% - var(--preview-position) * 100%)`,
            }}
          />
        )}

        {/* Progress bar */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{
            right: `calc(100% - var(--progress-position) * 100%)`,
            backgroundColor: timelineColor,
          }}
        />

        {/* Thumb indicator */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 rounded-full transition-transform duration-150 ease-in-out ${
            showThumbIndicator ? "scale-100" : "scale-0"
          } group-hover:scale-100 scrubbing:scale-100`}
          style={{
            left: `calc(var(--progress-position) * 100%)`,
            transform: `translateX(-50%) scale(${thumbIndicatorSize})`,
            backgroundColor: thumbIndicatorColor,
            width: `${height * 2}px`,
            height: `${height * 2}px`,
          }}
        />
      </div>
    </div>
  );
}
