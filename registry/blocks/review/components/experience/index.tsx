"use client";

import { DialogClose } from "@/registry/ui/dialog";
import { useCallback } from "react";
import { useReview } from "../../review-context-provider";
import { Rating } from "../../types";
import { EmojiCard } from "./components/emoji-card";

interface Props {
  next: (isGood: boolean) => void;
  onGood: () => void;
  onDontAskAgain: () => void;
}

export function Experience({ next, onGood, onDontAskAgain }: Readonly<Props>) {
  const { setRating, texts } = useReview();

  const handleClick = useCallback(async (emoji: Rating) => {
    setRating(emoji);

    switch (emoji) {
      case "bad":
        next(false);
        break;
      case "average":
        next(false);
        break;
      case "good":
        onGood();
        next(true);
        break;
    }
  }, []);

  return (
    <div className="space-y-5">
      <h3 className="text-center text-2xl font-semibold">
        {texts.experience.title}
      </h3>
      <p className="text-center text-slate-600">
        {texts.experience.description}
      </p>
      <div className="flex gap-2 sm:gap-4">
        <EmojiCard
          emoji="bad"
          title={texts.experience.bad}
          onClick={handleClick}
        />
        <EmojiCard
          emoji="average"
          title={texts.experience.average}
          onClick={handleClick}
        />
        <EmojiCard
          emoji="good"
          title={texts.experience.good}
          onClick={handleClick}
        />
      </div>
      <DialogClose className="mx-auto block" asChild>
        <button
          className="text-center text-sm text-slate-600 underline"
          onClick={onDontAskAgain}
        >
          {texts.experience.dontAskAgain}
        </button>
      </DialogClose>
    </div>
  );
}
