"use client";

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import CenterPanel from "@/components/CenterPanel";
import LeftPanel from "@/components/Leftpanel";
import RightPanel from "@/components/RightPanel";
import FieldPalette from "@/components/FieldPalette";
import FormCanvas from "@/components/FormCanvas";
import PropertyEditor from "@/components/PropertyEditor";
import { useFormBuilderStore } from "./store/form-builder.store";

export default function Home() {
  const addField = useFormBuilderStore((state) => state.addField);
  const moveField = useFormBuilderStore((state) => state.moveField);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const source = active.data.current?.source;

    if (source === "palette" && over.id === "form-canvas") {
      addField(active.data.current?.type);

      return;
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
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
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
    </DndContext>
  );
}
