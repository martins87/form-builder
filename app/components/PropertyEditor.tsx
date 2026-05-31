"use client";

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

      <div>
        <label>Label</label>

        <input
          className="mt-1 w-full rounded border p-2"
          value={selectedField.label}
          onChange={(e) =>
            updateField(selectedField.id, {
              label: e.target.value,
            })
          }
        />
      </div>

      {"placeholder" in selectedField && (
        <div>
          <label>Placeholder</label>

          <input
            className="mt-1 w-full rounded border p-2"
            value={selectedField.placeholder ?? ""}
            onChange={(e) =>
              updateField(selectedField.id, {
                placeholder: e.target.value,
              })
            }
          />
        </div>
      )}

      <div>
        <label>Required</label>

        <input
          className="ml-2"
          type="checkbox"
          checked={selectedField.required ?? false}
          onChange={(e) =>
            updateField(selectedField.id, {
              required: e.target.checked,
            })
          }
        />
      </div>
    </div>
  );
};

export default PropertyEditor;
