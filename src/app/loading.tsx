import React from "react";
import { PiSpinnerGapBold } from "react-icons/pi";
function Loading() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-4 p-4">
      <PiSpinnerGapBold size={80} className="animate-spin" />
    </section>
  );
}

export default Loading;
