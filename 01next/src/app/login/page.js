"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/dashboard");
    console.log("ok");
  }, [router]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        /* Form data */
      }),
    }).then((res) => {
      console.log("ok");
      // Do a fast client-side transition to the already prefetched dashboard page
      router.push("/dashboard");
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
    </form>
  );
}
