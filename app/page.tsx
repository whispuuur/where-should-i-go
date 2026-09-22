"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import {
  TravelPreference,
  getRecommendations,
} from "./data/destinations";
import Hero from "./components/Hero";
import DateSection from "./components/DateSection";
import PreferenceSection from "./components/PreferenceSection";
import RecommendationSection from "./components/RecommendationSection";

export default function Home() {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [preferences, setPreferences] = useState<TravelPreference[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const selectedMonth = useMemo(() => {
    if (!departureDate) return "";
    const date = new Date(departureDate + "T00:00:00");
    return date.toLocaleString("en-US", { month: "long" });
  }, [departureDate]);

  const recommendations = useMemo(() => {
    if (!hasSubmitted || !selectedMonth || preferences.length === 0) {
      return { top: [], more: [], totalResults: 0 };
    }
    return getRecommendations(selectedMonth, preferences);
  }, [hasSubmitted, selectedMonth, preferences]);

  const handleTogglePreference = useCallback((pref: TravelPreference) => {
    setPreferences((prev) => {
      if (prev.includes(pref)) {
        return prev.filter((p) => p !== pref);
      }
      return [...prev, pref];
    });
  }, []);

  const handleSubmit = () => {
    if (preferences.length === 0) return;
    setHasSubmitted(true);
    setTimeout(() => setShowRecommendations(true), 1500);
  };

  return (
    <main className="bg-[#0A0A09] text-[#E8E4DC]">
      {/* Section 01: Destination Universe */}
      <Hero />

      {/* Section 02: When Are You Leaving? */}
      <DateSection
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        onSubmit={handleSubmit}
      />

      {/* Section 03: What Are You Looking For? */}
      <PreferenceSection
        selectedPreferences={preferences}
        onTogglePreference={handleTogglePreference}
      />

      {/* Section 04: What Makes Sense Right Now? */}
      <AnimatePresence mode="wait">
        {hasSubmitted && showRecommendations && (
          <RecommendationSection
            key="recommendations"
            recommendations={recommendations}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
