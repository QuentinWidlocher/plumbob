import { ParentProps } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function DarkButton(props: ParentProps<{
  className?: ClassNameValue;
  circle?: boolean;
}>) {
  return  <button class={twMerge(
    "text-base-300",
    "border border-box-border-darker",
    "shadow-md shadow-box-border-darker/60",
    "bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-base-700 to-base-800",
    "transition-all rounded-full",
    props.circle && "aspect-square",
    props.className
  )}>
    <div class={twMerge(
      "px-5 py-3 flex gap-3",
      "bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-base-100 from-0% via-base-500 via-0% to-base-200/0 to-60%",
      "hover:via-10% hover:to-50%",
      "active:to-0% active:translate-y-px",
      "transition-all rounded-full ",
      props.circle && "aspect-square p-2 w-12 h-12"
    )}>
      {props.children}
    </div>
  </button>
}
