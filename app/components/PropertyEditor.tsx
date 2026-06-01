"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { useFormBuilderStore } from "@/store/form-builder.store";

const PropertyEditor = () => {
  const fields = useFormBuilderStore((state) => state.fields);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const updateField = useFormBuilderStore((state) => state.updateField);
  const selectedField = fields.find((field) => field.id === selectedFieldId);

  if (!selectedField) {
    return (
      <div>
        <h2 className="font-bold text-xl">Select a field to start editing</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Properties</h2>

      {fieldRegistry[selectedField.type].renderProperties(
        selectedField,
        updateField,
      )}
    </div>
  );
};

export default PropertyEditor;
