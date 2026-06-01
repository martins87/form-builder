"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { FieldType } from "@/types/form-fields";

interface Props {
  type: FieldType;
  label: string;
}

const fieldIcons: Record<FieldType, React.ReactNode> = {
  text: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7V4h16v3M9 20h6M12 4v16" />
    </svg>
  ),
  textarea: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16M4 10h16M4 14h10" />
    </svg>
  ),
  checkbox: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  checkboxGroup: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <path d="M14 5h7M14 9h5" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 16h7M14 20h5" />
    </svg>
  ),
  radio: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  select: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 12h8M15 9l3 3-3 3" />
    </svg>
  ),
  button: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="7" width="20" height="10" rx="2" />
    </svg>
  ),
};

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
      className="flex w-full items-center gap-3 rounded-lg bg-gray-100 p-3 text-left text-gray-700 shadow-sm transition-colors hover:bg-gray-200 hover:shadow hover:cursor-pointer"
    >
      <span className="text-gray-500">{fieldIcons[type]}</span>
      {label}
    </button>
  );
};

export default PaletteItem;
