"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { FormField } from "@/types/form-fields";

interface Props {
  field: FormField;
  selected: boolean;
  onClick: () => void;
}

const CanvasField = ({ field, selected, onClick }: Props) => {
  const renderer = fieldRegistry[field.type].render;

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

      {renderer(field)}
    </div>
  );
};

export default CanvasField;
