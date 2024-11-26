"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export default function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Button
      className="rounded-full"
      data-cal-namespace="30min"
      data-cal-link="gurkan-taner/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      Réserver un appel
    </Button>
  );
}
