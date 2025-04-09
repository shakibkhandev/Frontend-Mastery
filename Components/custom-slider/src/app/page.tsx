"use client";
import { useState } from "react";
import SliderComponent from "../components/Slider";

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 p-20">
      <div className="pt-20">
        <SliderComponent
          timelineColor="white"
          thumbIndicatorColor="white"
          previewProgress={false}
          progress={progress}
          onProgress={setProgress}
          thumbIndicatorSize={2}
          increaseScale={false}
          showThumbIndicator={true}
        />
      </div>
      <div className="pt-20">
        <SliderComponent />
      </div>
      <div className="pt-20">
        <SliderComponent onProgress={setProgress} />
      </div>
    </div>
  );
}
