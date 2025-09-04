"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OpenPositions from "./OpenPositions";

// This component uses useSearchParams and must be wrapped in Suspense
const OpenPositionsContent = () => {
  const searchParams = useSearchParams();
  const careerSection = searchParams.get("career") ?? "";
  return <OpenPositions career={careerSection} />;
};

const OpenPositionsClient = () => {
  return (
    <Suspense fallback={<div>Loading positions...</div>}>
      <OpenPositionsContent />
    </Suspense>
  );
};

export default OpenPositionsClient;
