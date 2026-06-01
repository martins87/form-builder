import { FormField } from "@/types/form-fields";

export function generateFormCode(fields: FormField[]): string {
  if (fields.length === 0) {
    return `"use client";

export default function App() {
  return (
    <form className="space-y-4 p-4">
      <p className="text-gray-500">No fields added yet.</p>
    </form>
  );
}
`;
  }

  // Generate initial state object
  const initialState = fields
    .filter((f) => f.type !== "button")
    .map((field) => {
      switch (field.type) {
        case "checkbox":
          return `    ${field.name}: false`;
        case "checkboxGroup":
          const checkedValues =
            "options" in field
              ? field.options
                  .filter((o) => o.checked)
                  .map((o) => `"${o.value}"`)
              : [];
          return `    ${field.name}: [${checkedValues.join(", ")}]`;
        case "radio":
        case "select":
          return `    ${field.name}: ""`;
        default:
          return `    ${field.name}: ""`;
      }
    })
    .join(",\n");

  // Generate form fields JSX
  const fieldsJsx = fields.map((field) => generateFieldJsx(field)).join("\n\n");

  return `"use client";

import { useState, FormEvent } from "react";

export default function App() {
  const [formData, setFormData] = useState({
${initialState}
  });

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxGroupChange = (name: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as unknown as string[];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== value) };
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-6 p-4">
${fieldsJsx}
    </form>
  );
}
`;
}

function generateFieldJsx(field: FormField): string {
  const indent = "      ";
  const required = field.required ? " required" : "";

  switch (field.type) {
    case "text":
      return `${indent}<div>
${indent}  <label className="mb-1 block font-medium">${field.label}</label>
${indent}  <input
${indent}    type="text"
${indent}    name="${field.name}"
${indent}    placeholder="${field.placeholder || ""}"
${indent}    value={formData.${field.name}}
${indent}    onChange={(e) => handleChange("${field.name}", e.target.value)}
${indent}    className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"${required}
${indent}  />
${indent}</div>`;

    case "textarea":
      return `${indent}<div>
${indent}  <label className="mb-1 block font-medium">${field.label}</label>
${indent}  <textarea
${indent}    name="${field.name}"
${indent}    placeholder="${field.placeholder || ""}"
${indent}    value={formData.${field.name}}
${indent}    onChange={(e) => handleChange("${field.name}", e.target.value)}
${indent}    className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
${indent}    rows={4}${required}
${indent}  />
${indent}</div>`;

    case "checkbox":
      return `${indent}<div>
${indent}  <label className="flex items-center gap-2">
${indent}    <input
${indent}      type="checkbox"
${indent}      name="${field.name}"
${indent}      checked={formData.${field.name}}
${indent}      onChange={(e) => handleChange("${field.name}", e.target.checked)}
${indent}      className="h-4 w-4 rounded border-gray-300"${required}
${indent}    />
${indent}    <span>${"text" in field && field.text ? field.text : field.label}</span>
${indent}  </label>
${indent}</div>`;

    case "checkboxGroup":
      if (!("options" in field)) return "";
      const checkboxOptions = field.options
        .map(
          (
            opt,
          ) => `${indent}    <label key="${opt.value}" className="flex items-center gap-2">
${indent}      <input
${indent}        type="checkbox"
${indent}        value="${opt.value}"
${indent}        checked={formData.${field.name}.includes("${opt.value}")}
${indent}        onChange={(e) => handleCheckboxGroupChange("${field.name}", "${opt.value}", e.target.checked)}
${indent}        className="h-4 w-4 rounded border-gray-300"
${indent}      />
${indent}      <span>${opt.label}</span>
${indent}    </label>`,
        )
        .join("\n");
      return `${indent}<div>
${indent}  <label className="mb-2 block font-medium">${field.label}</label>
${indent}  <div className="space-y-2">
${checkboxOptions}
${indent}  </div>
${indent}</div>`;

    case "radio":
      if (!("options" in field)) return "";
      const radioOptions = field.options
        .map(
          (
            opt,
          ) => `${indent}    <label key="${opt.value}" className="flex items-center gap-2">
${indent}      <input
${indent}        type="radio"
${indent}        name="${field.name}"
${indent}        value="${opt.value}"
${indent}        checked={formData.${field.name} === "${opt.value}"}
${indent}        onChange={(e) => handleChange("${field.name}", e.target.value)}
${indent}        className="h-4 w-4 border-gray-300"${required}
${indent}      />
${indent}      <span>${opt.label}</span>
${indent}    </label>`,
        )
        .join("\n");
      return `${indent}<div>
${indent}  <label className="mb-2 block font-medium">${field.label}</label>
${indent}  <div className="space-y-2">
${radioOptions}
${indent}  </div>
${indent}</div>`;

    case "select":
      if (!("options" in field)) return "";
      const selectOptions = field.options
        .map(
          (opt) =>
            `${indent}      <option value="${opt.value}">${opt.label}</option>`,
        )
        .join("\n");
      return `${indent}<div>
${indent}  <label className="mb-1 block font-medium">${field.label}</label>
${indent}  <select
${indent}    name="${field.name}"
${indent}    value={formData.${field.name}}
${indent}    onChange={(e) => handleChange("${field.name}", e.target.value)}
${indent}    className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"${required}
${indent}  >
${indent}    <option value="">Select an option</option>
${selectOptions}
${indent}  </select>
${indent}</div>`;

    case "button":
      return `${indent}<button
${indent}  type="submit"
${indent}  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
${indent}>
${indent}  ${"text" in field ? field.text : "Submit"}
${indent}</button>`;

    default:
      return "";
  }
}
