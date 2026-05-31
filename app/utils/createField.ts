import { v4 as uuidv4 } from "uuid";

import { FieldType, FormField } from "@/types/form-fields";

export function createField(type: FieldType): FormField {
  const id = uuidv4();

  switch (type) {
    case "text":
      return {
        id,
        type,
        label: "Text Input",
        name: `text_${id}`,
        placeholder: "",
        required: false,
      };

    case "textarea":
      return {
        id,
        type,
        label: "Textarea",
        name: `textarea_${id}`,
        placeholder: "",
        required: false,
      };

    case "checkbox":
      return {
        id,
        type,
        label: "Checkbox",
        name: `checkbox_${id}`,
        required: false,
      };

    case "radio":
      return {
        id,
        type,
        label: "Radio",
        name: `radio_${id}`,
        required: false,
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
        ],
      };

    case "select":
      return {
        id,
        type,
        label: "Select",
        name: `select_${id}`,
        required: false,
        options: [
          {
            label: "Option 1",
            value: "option1",
          },
        ],
      };

    case "button":
      return {
        id,
        type,
        label: "Button",
        name: `button_${id}`,
        text: "Submit",
      };
  }
}
