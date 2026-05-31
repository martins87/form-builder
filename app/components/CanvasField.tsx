"use client";

import { FormField } from "@/types/form-fields";

interface Props {
  field: FormField;
  selected: boolean;
  onClick: () => void;
}

const CanvasField = ({ field, selected, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border p-4 transition hover:cursor-pointer
        ${selected ? "border-blue-500" : "border-gray-300"}
      `}
    >
      <label className="mb-2 block">
        {field.label}
        {field.required && "*"}
      </label>

      {field.type === "text" && (
        <input
          disabled
          className="w-full rounded border p-2"
          placeholder={field.placeholder}
        />
      )}

      {field.type === "textarea" && (
        <textarea
          disabled
          className="w-full rounded border p-2"
          placeholder={field.placeholder}
        />
      )}

      {field.type === "checkbox" && <input disabled type="checkbox" />}

      {field.type === "select" && (
        <select disabled className="w-full rounded border p-2">
          {field.options.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      )}

      {field.type === "button" && (
        <button disabled className="rounded bg-black px-4 py-2 text-white">
          {field.text}
        </button>
      )}
    </div>
  );
};

export default CanvasField;
