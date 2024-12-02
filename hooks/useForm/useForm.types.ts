export type ValidationRules = {
  isRequired?: boolean,
  minLength?: Number,
  maxLength?: Number,
  validator?: (value: any, formState?: Record<string, any>) => string | null,
  regex?: string
};