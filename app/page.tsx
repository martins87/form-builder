import CenterPanel from "@/components/ui/CenterPanel";
import LeftPanel from "@/components/ui/Leftpanel";
import RightPanel from "@/components/ui/RightPanel";
import FieldPalette from "@/components/FieldPalette";
import FormCanvas from "@/components/FormCanvas";
import PropertyEditor from "@/components/PropertyEditor";

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
