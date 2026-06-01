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
  const removeField = useFormBuilderStore((state) => state.removeField);
  const { setNodeRef } = useDroppable({
    id: "form-canvas",
  });

  return (
    <div className="min-h-full space-y-4" ref={setNodeRef}>
      <div>
        <h2 className="text-xl font-bold">Form Canvas</h2>
        <p className="text-sm text-gray-500">(Click a field to select)</p>
      </div>

      {fields.length === 0 && (
        <div className="rounded-lg border-2 border-dashed p-12 text-center text-gray-500">
          Drag and drop elements from the left panel
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
            onRemove={() => removeField(field.id)}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default FormCanvas;
