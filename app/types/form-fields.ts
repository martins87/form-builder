export type Field =
  | "text"
  | "textarea"
  | "checkbox"
  | "radio"
  | "select"
  | "button";

export interface BaseField {
  id: string;
  type: Field;

  label: string;
  name: string;

  required?: boolean;
}

export interface TextField extends BaseField {
  type: "text";

  placeholder?: string;
  defaultValue?: string;
}

export interface TextAreaField extends BaseField {
  type: "textarea";

  placeholder?: string;
}

export interface CheckboxField extends BaseField {
  type: "checkbox";

  checked?: boolean;
}

export interface RadioField extends BaseField {
  type: "radio";

  options: {
    label: string;
    value: string;
  }[];
}

export interface SelectField extends BaseField {
  type: "select";

  options: {
    label: string;
    value: string;
  }[];
}

export interface ButtonField extends BaseField {
  type: "button";

  text: string;
}

export type FormField =
  | TextField
  | TextAreaField
  | CheckboxField
  | RadioField
  | SelectField
  | ButtonField;
