"use client";

import CanvasField from "./CanvasField";

import { useFormBuilderStore } from "@/store/form-builder.store";

const FormCanvas = () => {
  const fields = useFormBuilderStore((state) => state.fields);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const selectField = useFormBuilderStore((state) => state.selectField);

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Form Canvas</h2>

      {fields.length === 0 && (
        <div className="rounded-lg border-2 border-dashed p-12 text-center text-gray-500">
          Add elements from the left panel
        </div>
      )}

      {fields.map((field) => (
        <CanvasField
          key={field.id}
          field={field}
          selected={selectedFieldId === field.id}
          onClick={() => selectField(field.id)}
        />
      ))}
    </div>
  );
};

export default FormCanvas;
