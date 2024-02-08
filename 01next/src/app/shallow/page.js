"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Current URL is '/'
function Page() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("shallow/?counter=10", undefined, { shallow: true });
  }, []);

    useEffect(() => {
        console.log("ok");
        // The counter changed!
    }, [router.query.counter]);
}

export default Page;
