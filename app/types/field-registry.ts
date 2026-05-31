import { ReactNode } from "react";

import { FieldType, FormField } from "@/types/form-fields";

export interface FieldRegistryItem<T extends FormField = FormField> {
  label: string;
  render: (field: T) => ReactNode;
  renderProperties: (
    field: T,
    updateField: (id: string, updates: Partial<FormField>) => void,
  ) => ReactNode;
}

export type FieldRegistry = Record<FieldType, FieldRegistryItem>;
