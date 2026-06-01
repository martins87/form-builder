"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { FormField } from "@/types/form-fields";
import RemoveFieldButton from "./RemoveFieldButton";

interface Props {
  field: FormField;
  selected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

const CanvasField = ({ field, selected, onClick, onRemove }: Props) => {
  const renderer = fieldRegistry[field.type].render;

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-lg border p-4 transition hover:cursor-pointer
        ${selected ? "border-blue-500" : "border-gray-300"}
      `}
    >
      <RemoveFieldButton fieldLabel={field.label} onRemove={onRemove} />

      <label className="mb-2 block">
        {field.label}
        {field.required && "*"}
      </label>

      {renderer(field)}
    </div>
  );
};

export default CanvasField;
