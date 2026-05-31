import { FieldRegistry } from "@/types/field-registry";

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
  },

  checkbox: {
    label: "Checkbox",

    render: () => <input disabled type="checkbox" />,
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
  },

  button: {
    label: "Button",

    render: (field) => (
      <button disabled className="rounded bg-black px-4 py-2 text-white">
        {"text" in field ? field.text : "Button"}
      </button>
    ),
  },
};
