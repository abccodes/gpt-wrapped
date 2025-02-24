import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 20, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-2xl font-semibold mb-4">Processing...</h1>
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
};

export default Loading;
