"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { useFormBuilderStore } from "@/store/form-builder.store";

const PropertyEditor = () => {
  const fields = useFormBuilderStore((state) => state.fields);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const updateField = useFormBuilderStore((state) => state.updateField);
  const selectedField = fields.find((field) => field.id === selectedFieldId);

  if (!selectedField) {
    return <div>Select a field</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Properties</h2>

      {fieldRegistry[selectedField.type].renderProperties(
        selectedField,
        updateField,
      )}
    </div>
  );
};

export default PropertyEditor;
