"use client";

import { Review } from "@/registry/blocks/review";
import { Button } from "@/registry/ui/button";
import { useState } from "react";

export default function Home() {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Reddot</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple review block
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Button onClick={() => setShowReview(true)}>Trigger review</Button>
            {showReview && (
              // @ts-ignore
              <Review
                onComment={(comment) => {
                  alert(comment.message);
                }}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
