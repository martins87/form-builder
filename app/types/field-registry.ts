import { ReactNode } from "react";

import { FieldType, FormField } from "@/types/form-fields";

export interface FieldRegistryItem<T extends FormField = FormField> {
  label: string;
  render: (field: T) => ReactNode;
}

export type FieldRegistry = Record<FieldType, FieldRegistryItem>;
