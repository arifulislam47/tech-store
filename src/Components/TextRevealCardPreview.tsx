"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center">
      <TextRevealCard
        text="Sign Up To Our Newsletter."
        revealText="I know the chemistry. "
      >
        
      </TextRevealCard>
    </div>
  );
}
