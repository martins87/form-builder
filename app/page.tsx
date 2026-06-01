"use client";

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import CenterPanel from "@/components/ui/CenterPanel";
import LeftPanel from "@/components/ui/Leftpanel";
import RightPanel from "@/components/ui/RightPanel";
import FieldPalette from "@/components/FieldPalette";
import FormCanvas from "@/components/FormCanvas";
import PropertyEditor from "@/components/PropertyEditor";
import GetCodeButton from "@/components/GetCodeButton";
import { useFormBuilderStore } from "./store/form-builder.store";

export default function Home() {
  const addField = useFormBuilderStore((state) => state.addField);
  const moveField = useFormBuilderStore((state) => state.moveField);
  const fields = useFormBuilderStore((state) => state.fields);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const source = active.data.current?.source;

    // Check if dropping from palette
    if (source === "palette") {
      // Accept drop on canvas OR on any existing field
      const isDropOnCanvas = over.id === "form-canvas";
      const isDropOnField = fields.some((f) => f.id === over.id);

      if (isDropOnCanvas || isDropOnField) {
        addField(active.data.current?.type);
        return;
      }
    }

    if (active.id !== over.id) {
      moveField(String(active.id), String(over.id));
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-screen gap-4 p-4 overflow-y-auto">
        <LeftPanel>
          <FieldPalette />
          <GetCodeButton />
        </LeftPanel>

        <CenterPanel>
          <FormCanvas />
        </CenterPanel>

        <RightPanel>
          <PropertyEditor />
        </RightPanel>
      </div>
    </DndContext>
  );
}
