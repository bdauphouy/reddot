"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Rating, Texts } from "./types";

interface ReviewContextValue {
  texts: Texts;
  rating: Rating | null;
  setRating: Dispatch<SetStateAction<ReviewContextValue["rating"]>>;
}

const defaultTexts: Texts = {
  experience: {
    title: "How do you rate your experience?",
    description:
      "Your feedback is important to us. Please take a moment to rate your experience.",
    good: "Good",
    average: "Average",
    bad: "Bad",
    dontAskAgain: "Don't ask me again",
  },
  improve: {
    title: "What could have improved your experience?",
    label: "Share your suggestions to help us improve",
    placeholder: "Type your message...",
    cta: "Send message",
  },
  thanks: {
    title: "Thank you for your review!",
    description:
      "We deeply appreciate the time you took to share your experience with us.",
  },
};

export const ReviewContext = createContext<ReviewContextValue>({
  texts: defaultTexts,
  rating: null,
  setRating: () => {},
});

interface Props extends PropsWithChildren {
  texts?: Texts;
}

export function ReviewContextProvider({
  texts = defaultTexts,
  children,
}: Readonly<Props>) {
  const [rating, setRating] = useState<ReviewContextValue["rating"]>(null);
  const value = useMemo(() => ({ rating, texts, setRating }), [rating]);

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
}

export const useReview = () => useContext(ReviewContext);
