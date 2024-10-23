import Ellipsis from "lucide-solid/icons/ellipsis";
import SmilePlus from "lucide-solid/icons/smile-plus";
import Button from "~/components/Button";
import DarkButton from "~/components/DarkButton";
import IconFrame from "~/components/IconFrame";
import InnerBox from "~/components/InnerBox";
import Layout from "~/components/Layout";

export default function Home() {
  return (
    <Layout bottomBorderSlot={
      <DarkButton circle className="mx-auto"><Ellipsis class="m-auto" size={26} /></DarkButton>
    }>
      <h1 class="text-5xl mb-5">The Plumbob</h1>
      <InnerBox>
        <div class="flex flex-wrap">
          <IconFrame icon="😐" mood="neutral"/>
          <IconFrame icon="💩" label="5h" mood="good"/>
          <IconFrame icon="😡" label="8h" mood="bad"/>
        </div>
      </InnerBox>
      <div class="flex flex-wrap gap-3">
        <Button className=""><SmilePlus /> Add an emoji</Button>
        <Button className="aspect-square w-12"><SmilePlus /></Button>
        <Button disabled className="aspect-square w-12"><SmilePlus /></Button>
      </div>
    </Layout>
  );
}
