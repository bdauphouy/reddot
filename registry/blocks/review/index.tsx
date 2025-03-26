"use client";

import { Dialog, DialogContent, DialogTitle } from "@/registry/ui/dialog";
import { useCallback, useState } from "react";
import { Experience } from "./components/experience";
import { Improve } from "./components/improve";
import { Thanks } from "./components/thanks";
import { ReviewContextProvider } from "./review-context-provider";
import { Comment, Texts } from "./types";

interface Props {
  texts: Texts;
  onOpenChange?: (open: boolean) => void;
  onGood?: () => void;
  onDontAskAgain?: () => void;
  onComment?: (comment: Comment) => void;
}

export function Review({
  texts,
  onOpenChange = () => {},
  onGood = () => {},
  onDontAskAgain = () => {},
  onComment = () => {},
}: Readonly<Props>) {
  const [currentStep, setCurrentStep] = useState("experience");

  const renderCurrentStep = useCallback(() => {
    switch (currentStep) {
      case "experience":
        return (
          <Experience
            onGood={onGood}
            onDontAskAgain={onDontAskAgain}
            next={(isGood: boolean) =>
              setCurrentStep(isGood ? "thanks" : "improve")
            }
          />
        );
      case "improve":
        return (
          <Improve
            onComment={onComment}
            next={() => setCurrentStep("thanks")}
          />
        );
      case "thanks":
        return <Thanks />;
      default:
        return <></>;
    }
  }, [currentStep]);

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Review</DialogTitle>
      <DialogContent className="w-[calc(100%-32px)] overflow-hidden pt-12 md:max-w-xl">
        <ReviewContextProvider texts={texts}>
          {renderCurrentStep()}
        </ReviewContextProvider>
      </DialogContent>
    </Dialog>
  );
}
