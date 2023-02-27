import { FormProps } from './Form.types';
import { Formik, Form as FormikForm } from 'formik';
import { Field } from './Field';
import FormButton from './FormButton';

export const Form = ({
  inputList,
  validationSchema,
  initialValues,
  title,
  onSubmit,
  classes,
  buttonProps,
  submitComponent,
}: FormProps) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <FormikForm onSubmit={handleSubmit} className={classes?.formContainer}>
          <div
            className={`bg-white/20 text-white tracking-widest rounded shadow-lg py-3 px-7 mb-5 ${classes?.form}`}
          >
            <div
              className={`col-span-2 text-center text-xl font-semibold mb-4 ${classes?.formTitle}`}
            >
              {title}
            </div>
            {inputList.map((input) => (
              <Field key={input.name} {...input} />
            ))}
          </div>
          <FormButton
            classes={classes}
            buttonProps={buttonProps}
            submitComponent={submitComponent}
          />
        </FormikForm>
      )}
    </Formik>
  );
};
