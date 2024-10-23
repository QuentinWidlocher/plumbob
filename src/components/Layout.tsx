import { JSX, ParentProps } from "solid-js";
import Box from "./Box";

export default function Layout(props: ParentProps<{
  bottomBorderSlot?: JSX.Element;
}>) {
  return (
    <div class="bg-cover text-box-border-darker h-dvh w-screen flex place-content-center p-1 sm:p-5 bg-[url('https://images6.fanpop.com/image/photos/34300000/The-Sims-3-screenshot-the-sims-3-34378855-1280-960.jpg')]">
      <div class="absolute h-screen w-screen top-0 left-0 backdrop-blur-xl"/>
      <Box className="@container w-full min-h-full sm:w-[30rem]" bottomBorderSlot={props.bottomBorderSlot}>
          {props.children}
      </Box>
    </div>
  )
}
