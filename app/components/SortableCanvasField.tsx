"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import CanvasField from "./CanvasField";
import { FormField } from "@/types/form-fields";

interface Props {
  field: FormField;
  selected: boolean;
  onClick: () => void;
}

const SortableCanvasField = ({ field, selected, onClick }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: field.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CanvasField field={field} selected={selected} onClick={onClick} />
    </div>
  );
};

export default SortableCanvasField;
