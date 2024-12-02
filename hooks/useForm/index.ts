import React, { useEffect, useRef, useState } from "react";
import { ValidationRules } from "./useForm.types";
import { REQUIRED, TOO_LONG, TOO_SHORT, INVALID } from "./utilities/constants";
import { debounce } from "lodash";

type T  = Record<string, any>

type FormState = {
  values: T,
  errors: T,
  validationRules: Record<string, ValidationRules>;
}

export const useFrom = (initialValues: T) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<T>({});

  // Need to find aternative of this. Just a hack for now
  const valuesRef = useRef(values);
  useEffect(() => {
    valuesRef.current = values;
  }, [values]);

  const validationRulesRef = useRef<Record<string, ValidationRules>>({});

  const debouncedValidators = useRef<Record<string, (value: any, formState?: T) => void>>({});

  const onChangeRefs = useRef<Record<string, (value: any) => void>>({});

  const handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, param: string, validationRules: ValidationRules) => void = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, param: string, validationRules: ValidationRules) => {
    const value = event?.target?.value

  if (!debouncedValidators.current[param]) {
    debouncedValidators.current[param] = debounce((debouncedValue, formState) => {
      const error = validateField(debouncedValue, validationRules, formState);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [param]: error,
      }));
      
      setValues((prevValues) => ({
        ...prevValues,
        [param]: debouncedValue,
      }));
    }, 500);
  }
    if (validationRules && values[param] !== value) {
      (debouncedValidators.current[param] as (value: string, formState: T) => string | null)(value, valuesRef.current)
    }

  } 

  const register = (param: string, validationRule: ValidationRules) => {
  
    validationRulesRef.current[param] = validationRule

    if (!onChangeRefs.current[param]) {
      onChangeRefs.current[param] = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {      
        handleChange(event, param, validationRule)
      }
    }

    return {
      value: values[param],
      error: errors[param],
      onChange: onChangeRefs.current[param]
    }
  }

const onSubmit = (callback: (data: T) => void) => {
  const errors: T = {};

  for (const field in validationRulesRef.current) {
    const validationRules = validationRulesRef.current[field]
    const error = validateField(values[field], validationRules, valuesRef.current);

    if (error) {
      errors[field] = error;
    }
  }

  if (Object.keys(errors).length === 0) {
    callback(values);
  } else {
    setErrors(errors);
  }
};

  return {
    register,
    onSubmit,
    values
  }

}

const validateField = (value: any, { isRequired, maxLength, minLength, regex, validator}: ValidationRules, formState: T) => {
  if (isRequired && !value) {
    return REQUIRED
  } else if (maxLength && value?.toString()?.length > maxLength) {
    return TOO_LONG
  } else if (minLength && value?.toString()?.length < minLength) {
    return TOO_SHORT
  } else if ( regex && !(new RegExp(regex)).test(value)) {
    return INVALID
  } else if ( validator ) {
    return validator(value, formState)
  }
}

