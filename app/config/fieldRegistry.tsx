import { FieldRegistry } from "@/types/field-registry";
import PropertyField from "@/components/PropertyField";

export const fieldRegistry: FieldRegistry = {
  text: {
    label: "Text Input",
    render: (field) => (
      <input
        disabled
        className="w-full rounded border p-2"
        placeholder={"placeholder" in field ? field.placeholder : ""}
      />
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Placeholder">
          <input
            className="w-full rounded border p-2"
            value={"placeholder" in field ? (field.placeholder ?? "") : ""}
            onChange={(e) =>
              updateField(field.id, {
                placeholder: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  textarea: {
    label: "Textarea",
    render: (field) => (
      <textarea
        disabled
        className="w-full rounded border p-2"
        placeholder={"placeholder" in field ? field.placeholder : ""}
      />
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Placeholder">
          <input
            className="w-full rounded border p-2"
            value={"placeholder" in field ? (field.placeholder ?? "") : ""}
            onChange={(e) =>
              updateField(field.id, {
                placeholder: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  checkbox: {
    label: "Checkbox",
    render: () => <input disabled type="checkbox" />,
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  radio: {
    label: "Radio",
    render: (field) => (
      <div className="space-y-2">
        {"options" in field &&
          field.options.map((option) => (
            <label key={option.value} className="block">
              <input disabled type="radio" className="mr-2" />

              {option.label}
            </label>
          ))}
      </div>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  select: {
    label: "Select",
    render: (field) => (
      <select disabled className="w-full rounded border p-2">
        {"options" in field &&
          field.options.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
      </select>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <input
            type="checkbox"
            checked={field.required ?? false}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  button: {
    label: "Button",
    render: (field) => (
      <button disabled className="rounded bg-black px-4 py-2 text-white">
        {"text" in field ? field.text : "Button"}
      </button>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded border p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        {"text" in field && (
          <PropertyField label="Button Text">
            <input
              className="w-full rounded border p-2"
              value={field.text}
              onChange={(e) =>
                updateField(field.id, {
                  text: e.target.value,
                })
              }
            />
          </PropertyField>
        )}
      </div>
    ),
  },
};
