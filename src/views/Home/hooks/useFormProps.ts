import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FormikValues } from 'formik';
import { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { cacheKeys } from '../../../config';
import { customersClient } from '../../../shared/client/customers/customersClient';
import {
  extractObjectValues,
  isObjectEmpty,
} from '../../../shared/helpers/data';
import {
  customerDetailsDataKeys,
  getClasses,
  getInitialDefaultValues,
  getInitialValues,
  getInputList,
  getYupSchema,
} from '../helpers';
import { IGetInputList } from '../Home.types';

const defaultInitialValues = getInitialDefaultValues();
const validationSchema = getYupSchema();
const classes = getClasses();
const custmerDetailsFallBack = {};

export const useFormProps = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data: customerDetailsApi, isLoading: isLoadingCustomerDetails } =
    useQuery(
      [cacheKeys.customers.getCustomerDetails, id],
      () => customersClient.getCustomerDetails(id!),
      { enabled: !!state && !!id }
    );
  const customerDetails = customerDetailsApi || custmerDetailsFallBack;
  const queryClient = useQueryClient();

  const { mutateAsync: customerDetailMutation } = useMutation(
    customersClient.createOrUpdateCustomerDetails,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          cacheKeys.customers.getCustomerDetails,
          id,
        ]);
      },
    }
  );

  const inputList = useMemo(() => {
    if (!!state && !!id) {
      const a: IGetInputList = {
        picture: customerDetailsApi?.picture || '',
      };
      return getInputList(a);
    }
  }, [state, id, customerDetailsApi?.picture]);

  const initialValues = useMemo(() => {
    return getInitialValues({
      databaseInitialValues: [state, customerDetails],
      defaultInitialValues: defaultInitialValues,
    });
  }, [customerDetails, state]);

  useEffect(() => {
    if (!id || !state) {
      navigate('/');
    }
  });

  const submitHandler = useCallback(
    async (e: FormikValues) => {
      const customerDetailsData = extractObjectValues(
        e,
        customerDetailsDataKeys
      );
      customerDetailMutation({
        id: id!,
        customerDetails: customerDetailsData,
        isCustomerDetailsData: !isObjectEmpty(customerDetails),
      });
    },
    [customerDetailMutation, customerDetails, id]
  );

  return {
    inputList,
    initialValues,
    validationSchema,
    classes,
    isLoadingFormProps: isLoadingCustomerDetails,
    submitHandler,
  };
};
