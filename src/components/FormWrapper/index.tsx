import type { ReactNode } from "react";
import { FormProvider, type FieldValues, type SubmitHandler, type UseFormReturn } from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
  children: ReactNode;
  formMethod: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className ?: string;
}

function FormWrapper<T extends FieldValues>({children,formMethod,onSubmit,className} : FormWrapperProps<T>) {
  return (
    <FormProvider {...formMethod}>
      <form
        onSubmit={formMethod.handleSubmit(onSubmit)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default FormWrapper