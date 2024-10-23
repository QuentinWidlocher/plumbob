import { JSX, ParentProps, Show } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function Box(props: ParentProps<{
  className?: ClassNameValue;
  bottomBorderSlot?: JSX.Element;
}>) {
  return  <div class={twMerge("border-box-border-darker border shadow-xl shadow-box-border-darker/30 bg-gradient-to-t from-box-border-dark/60 to-box-border-light/60 card rounded-2xl", props.className)}>
    <div class={twMerge("border-box-border-darker border shadow-inner shadow-box-border-darker/60 bg-gradient-to-t from-box-content-dark to-box-content-light card-body rounded-xl m-3")}>
      {props.children}
    </div>
    <Show when={props.bottomBorderSlot}>
      <div class="m-3 mt-0 flex">
      {props.bottomBorderSlot}
      </div>
    </Show>
  </div>
}
