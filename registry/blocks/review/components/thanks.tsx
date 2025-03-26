import Image from "next/image";
import { StepTransitionWrapper } from "../../step-transition-wrapper";
import { useReview } from "../review-context-provider";

export function Thanks() {
  const { texts } = useReview();

  return (
    <StepTransitionWrapper>
      <div>
        <div className="relative aspect-video">
          <Image src="/images/review/thanks.svg" layout="fill" alt="Thanks" />
        </div>
        <h3 className="text-center text-2xl font-semibold">
          {texts.thanks.title}
        </h3>
        <p className="mt-5 text-center text-slate-600">
          {texts.thanks.description}
        </p>
      </div>
    </StepTransitionWrapper>
  );
}
