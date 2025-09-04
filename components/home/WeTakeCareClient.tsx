"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WeTakeCare from "./WeTakeCare";

// This component uses useSearchParams and must be wrapped in Suspense
const WeTakeCareContent = () => {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") ?? undefined;

  return <WeTakeCare initialTab={product} />;
};

const WeTakeCareClient = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeTakeCareContent />
    </Suspense>
  );
};

export default WeTakeCareClient;
