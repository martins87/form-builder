import { create } from "zustand";

import { createField } from "@/utils/createField";
import { FormField, FieldType } from "@/types/form-fields";

interface FormBuilderStore {
  fields: FormField[];
  selectedFieldId: string | null;
  addField: (type: FieldType) => void;
  selectField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

export const useFormBuilderStore = create<FormBuilderStore>((set) => ({
  fields: [],

  selectedFieldId: null,

  addField: (type) =>
    set((state) => ({
      fields: [...state.fields, createField(type)],
    })),

  selectField: (id) => set({ selectedFieldId: id }),

  updateField: (id, updates) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === id
          ? ({
              ...field,
              ...updates,
            } as FormField)
          : field,
      ),
    })),
}));
