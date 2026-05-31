import { Field } from "@/types/form-fields";

export const fieldRegistry: Record<
  Field,
  {
    label: string;
  }
> = {
  text: {
    label: "Text Input",
  },

  textarea: {
    label: "Textarea",
  },

  checkbox: {
    label: "Checkbox",
  },

  radio: {
    label: "Radio",
  },

  select: {
    label: "Select",
  },

  button: {
    label: "Button",
  },
};
