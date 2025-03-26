import Image from "next/image";
import { Rating } from "../../../types";

interface Props {
  title: string;
  emoji: Rating;
  onClick: (emoji: Props["emoji"]) => void;
}

export function EmojiCard({ title, emoji, onClick }: Readonly<Props>) {
  return (
    <button
      onClick={() => onClick(emoji)}
      autoFocus={emoji === "good"}
      className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-slate-100 p-3 outline-none transition-colors duration-300 hover:bg-slate-200 focus-visible:bg-slate-200"
    >
      <Image
        src={`/images/review/${emoji}.svg`}
        className="size-8 sm:size-12 md:size-20"
        width={80}
        height={80}
        alt={title}
      />
      <span className="text-sm font-medium sm:text-base md:text-lg">
        {title}
      </span>
    </button>
  );
}
