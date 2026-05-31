"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { FieldType } from "@/types/form-fields";

interface Props {
  type: FieldType;
  label: string;
}

const PaletteItem = ({ type, label }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `palette-${type}`,
    data: {
      type,
      source: "palette",
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-full rounded-lg border p-3 text-left hover:bg-gray-100 hover:cursor-pointer"
    >
      {label}
    </button>
  );
};

export default PaletteItem;
