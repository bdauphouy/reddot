export type Rating = "bad" | "average" | "good";

export type Comment = { message: string; rating: Rating | null };

export interface Texts {
  experience: {
    title: string;
    description: string;
    good: string;
    average: string;
    bad: string;
    dontAskAgain: string;
  };
  improve: {
    title: string;
    label: string;
    placeholder: string;
    cta: string;
  };
  thanks: {
    title: string;
    description: string;
  };
}
