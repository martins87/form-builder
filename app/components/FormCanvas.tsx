"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useFormBuilderStore } from "@/store/form-builder.store";
import SortableCanvasField from "./SortableCanvasField";

const FormCanvas = () => {
  const fields = useFormBuilderStore((state) => state.fields);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const selectField = useFormBuilderStore((state) => state.selectField);
  const { setNodeRef } = useDroppable({
    id: "form-canvas",
  });

  return (
    <div className="space-y-4 min-h-full" ref={setNodeRef}>
      <h2 className="font-bold text-xl">
        Form Canvas (Click on field to edit)
      </h2>

      {fields.length === 0 && (
        <div className="rounded-lg border-2 border-dashed p-12 text-center text-gray-500">
          Add elements from the left panel
        </div>
      )}

      <SortableContext
        items={fields.map((f) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        {fields.map((field) => (
          <SortableCanvasField
            key={field.id}
            field={field}
            selected={selectedFieldId === field.id}
            onClick={() => selectField(field.id)}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default FormCanvas;
