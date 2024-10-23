import { JSX, ParentProps } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

export default function Button(props: ParentProps<{
  className?: ClassNameValue;
}> & JSX.ButtonHTMLAttributes<HTMLButtonElement> ) {
  return  <button {...props} class={twMerge(
    "relative group",
    "p-3",
    "text-base-800 border border-box-border-darker shadow-sm shadow-box-border-darker/60 rounded-md",
    "bg-gradient-to-t from-base-500 via-base-400 via-90% to-base-200",
    "enabled:hover:via-80%",
    "enabled:active:from-50% enabled:active:via-95%",
    props.className
  )}>
  <div class="absolute top-0 left-0 w-full h-full group-disabled:bg-base-600/60"/>
 <div class="group-active:translate-y-px flex gap-3">
 {props.children}
 </div>
  </button>
}
