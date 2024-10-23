import { ParentProps } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function InnerBox(props: ParentProps<{
  className?: ClassNameValue;
}>) {
  return  <div class={twMerge("bg-gradient-to-br from-base-100/0 to-base-100/80 card rounded-xl p-px")}>
    <div class={twMerge("border border-box-content-dark bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-base-200 to-base-400 shadow-inner shadow-box-border-darker/20 card-body rounded-xl", props.className)}>
      {props.children}
    </div>
  </div>
}
