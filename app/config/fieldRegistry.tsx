import { FieldRegistry } from "@/types/field-registry";
import PropertyField from "@/components/PropertyField";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import OptionsEditor from "@/components/OptionsEditor";

export const fieldRegistry: FieldRegistry = {
  text: {
    label: "Text Input",
    render: (field) => (
      <input
        className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
        placeholder={"placeholder" in field ? field.placeholder : ""}
      />
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50  p-2"
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
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={"placeholder" in field ? (field.placeholder ?? "") : ""}
            onChange={(e) =>
              updateField(field.id, {
                placeholder: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
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
        className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
        placeholder={"placeholder" in field ? field.placeholder : ""}
      />
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
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
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={"placeholder" in field ? (field.placeholder ?? "") : ""}
            onChange={(e) =>
              updateField(field.id, {
                placeholder: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  checkbox: {
    label: "Checkbox",
    render: (field) => (
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        {"text" in field ? field.text : "Checkbox option"}
      </label>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        <PropertyField label="Checkbox Text">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={"text" in field ? field.text : ""}
            onChange={(e) => updateField(field.id, { text: e.target.value })}
          />
        </PropertyField>

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
              })
            }
          />
        </PropertyField>
      </div>
    ),
  },

  checkboxGroup: {
    label: "Checkbox Group",
    render: (field) => (
      <div className="space-y-2">
        {"options" in field &&
          field.options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input type="checkbox" />
              {option.label}
            </label>
          ))}
      </div>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        {"options" in field && (
          <PropertyField label="Options">
            <OptionsEditor
              options={field.options}
              onChange={(options) => updateField(field.id, { options })}
            />
          </PropertyField>
        )}

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
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
              <input type="radio" className="mr-2" />
              {option.label}
            </label>
          ))}
      </div>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        {"options" in field && (
          <PropertyField label="Options">
            <OptionsEditor
              options={field.options}
              onChange={(options) => updateField(field.id, { options })}
            />
          </PropertyField>
        )}

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
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
      <select className="w-full rounded-lg border border-[#1D9E99]/50 p-2">
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
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
          />
        </PropertyField>

        {"options" in field && (
          <PropertyField label="Options">
            <OptionsEditor
              options={field.options}
              onChange={(options) => updateField(field.id, { options })}
            />
          </PropertyField>
        )}

        <PropertyField label="Required">
          <ToggleSwitch
            checked={field.required ?? false}
            onChange={(checked) =>
              updateField(field.id, {
                required: checked,
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
      <button disabled className="rounded-lg bg-[#1D9E99] px-4 py-2 text-white">
        {"text" in field ? field.text : "Button"}
      </button>
    ),
    renderProperties: (field, updateField) => (
      <div className="space-y-4">
        <PropertyField label="Label">
          <input
            className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
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
              className="w-full rounded-lg border border-[#1D9E99]/50 p-2"
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
