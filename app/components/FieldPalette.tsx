"use client";

import { fieldRegistry } from "@/config/fieldRegistry";
import { typedEntries } from "@/utils/typedEntries";
import PaletteItem from "./PaletteItem";

const FieldPalette = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-xl">Elements</h2>

      {typedEntries(fieldRegistry).map(([type, config]) => (
        <PaletteItem key={type} type={type} label={config.label} />
      ))}
    </div>
  );
};

export default FieldPalette;
