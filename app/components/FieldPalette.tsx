"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { useFormBuilderStore } from "@/store/form-builder.store";
import { typedEntries } from "@/utils/typedEntries";

const FieldPalette = () => {
  const addField = useFormBuilderStore((state) => state.addField);

  return (
    <div className="space-y-3">
      <h2 className="font-bold text-lg">Elements</h2>

      {typedEntries(fieldRegistry).map(([type, config]) => (
        <button
          key={type}
          className="w-full rounded-lg border border-neutral-300 p-3 text-left hover:bg-gray-100 hover:cursor-pointer"
          onClick={() => addField(type)}
        >
          {config.label}
        </button>
      ))}
    </div>
  );
};

export default FieldPalette;
