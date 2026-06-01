import { create } from "zustand";
import { arrayMove } from "@dnd-kit/sortable";

import { createField } from "@/utils/createField";
import { FormField, FieldType } from "@/types/form-fields";

interface FormBuilderStore {
  fields: FormField[];
  selectedFieldId: string | null;
  addField: (type: FieldType) => void;
  selectField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  moveField: (activeId: string, overId: string) => void;
  removeField: (id: string) => void;
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

  moveField: (activeId, overId) =>
    set((state) => {
      const oldIndex = state.fields.findIndex((field) => field.id === activeId);
      const newIndex = state.fields.findIndex((field) => field.id === overId);

      if (oldIndex === -1 || newIndex === -1) {
        return state;
      }

      return {
        fields: arrayMove(state.fields, oldIndex, newIndex),
      };
    }),

  removeField: (id) =>
    set((state) => ({
      fields: state.fields.filter((field) => field.id !== id),
      selectedFieldId:
        state.selectedFieldId === id ? null : state.selectedFieldId,
    })),
}));
