import { Form } from '../../shared/components/Form/Form';
import { useFormProps } from '../Home/hooks/useFormProps';
import LoadingSpinnerModal from '../../shared/components/Loading/LoadingSpinnerModal';
import SubmitButtonCostDetForm from './components/SubmitButtonCostDetForm';
import { Fragment } from 'react';

const CustomerDetails = () => {
  const {
    initialValues,
    inputList,
    validationSchema,
    classes,
    isLoadingFormProps,
    submitHandler,
  } = useFormProps();

  return (
    <Fragment>
      {isLoadingFormProps && (
        <LoadingSpinnerModal isLoading={isLoadingFormProps} />
      )}
      {!isLoadingFormProps && inputList && (
        <Form
          onSubmit={submitHandler}
          title="Customer details"
          inputList={inputList}
          validationSchema={validationSchema}
          initialValues={initialValues}
          classes={classes}
          submitComponent={<SubmitButtonCostDetForm />}
        />
      )}
    </Fragment>
  );
};

export default CustomerDetails;
