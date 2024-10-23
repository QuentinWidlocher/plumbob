
import { ClassNameValue, twMerge } from "tailwind-merge";

function getBorderColor(mood: "good" | "bad" | "neutral") {
  switch (mood) {
    case "good":
      return "bg-mood-good-border";
    case "bad":
      return "bg-mood-bad-border";
    case "neutral":
      return "bg-mood-neutral-border";
  }
}

function getBackgroundColor(mood: "good" | "bad" | "neutral") {
  switch (mood) {
    case "good":
      return "bg-gradient-to-t from-mood-good-bgbottom to-mood-good-bgtop";
    case "bad":
      return "bg-gradient-to-t from-mood-bad-bgbottom to-mood-bad-bgtop";
    case "neutral":
      return "bg-gradient-to-t from-mood-neutral-bgbottom to-mood-neutral-bgtop";
  }
}

export default function IconFrame(props: {
  className?: ClassNameValue;
  mood: "good" | "bad" | "neutral";
  icon: string;
  label?: string;
}) {
  return   <section class="flex flex-col mx-auto">
  <div class={twMerge("cursor-default aspect-square w-20 border border-box-border-dark/50 rounded-lg p-0.5", getBorderColor(props.mood))}>
    <div class={twMerge("text-5xl h-full w-full rounded-md grid place-items-center", getBackgroundColor(props.mood), props.className)}>
      {props.icon}
    </div>
  </div>
  <span class="text-center w-full">{props.label ?? '―'}</span>
  </section>
}
