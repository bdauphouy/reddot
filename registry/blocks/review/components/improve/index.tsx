"use client";

import { Button } from "@/registry/ui/button";
import { FormEvent } from "react";
import { StepTransitionWrapper } from "../../../step-transition-wrapper";
import { useReview } from "../../review-context-provider";
import { Comment } from "../../types";

interface Props {
  next: () => void;
  onComment: (comment: Comment) => void;
}

export function Improve({ next, onComment }: Readonly<Props>) {
  const { rating, texts } = useReview();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    onComment({
      message: (e.target as unknown as HTMLTextAreaElement[])[0].value,
      rating,
    });
    next();
  };

  return (
    <StepTransitionWrapper>
      <div className="flex flex-col gap-5">
        <h3 className="text-center text-2xl font-semibold">
          {texts.improve.title}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            {texts.improve.label}
          </label>
          <textarea
            className="h-40 resize-none rounded-lg border border-slate-100 px-4 py-3 outline-none"
            name="message"
            id="message"
            placeholder={texts.improve.placeholder}
          ></textarea>
          <Button className="mt-4 self-end">{texts.improve.cta}</Button>
        </form>
      </div>
    </StepTransitionWrapper>
  );
}
