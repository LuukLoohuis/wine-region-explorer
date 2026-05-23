import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

// App uses localStorage / mapbox-gl which are browser-only — render client-side only.
const App = lazy(() => import("@/App.jsx"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uncorked — Wine Region Finder" },
      {
        name: "description",
        content:
          "Scan wine bottles and explore appellations across France, Italy and Spain on an interactive map.",
      },
      { property: "og:title", content: "Uncorked — Wine Region Finder" },
      {
        property: "og:description",
        content:
          "Scan wine bottles and explore appellations across France, Italy and Spain on an interactive map.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#1C0A00",
          color: "#F5EDD8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Loading…
      </div>
    );
  }
  return (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  );
}
