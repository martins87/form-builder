import CenterPanel from "@/components/CenterPanel";
import FieldPalette from "@/components/FieldPalette";
import FormCanvas from "@/components/FormCanvas";
import LeftPanel from "@/components/Leftpanel";
import PropertyEditor from "@/components/PropertyEditor";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <div className="flex h-screen">
      <LeftPanel>
        <FieldPalette />
      </LeftPanel>

      <CenterPanel>
        <FormCanvas />
      </CenterPanel>

      <RightPanel>
        <PropertyEditor />
      </RightPanel>
    </div>
  );
}
