import { Fragment, useCallback, useEffect } from 'react';
import GlassContainer from '../../../shared/components/Layout.tsx/GlassContainer/GlassContainer';

import { useQuery } from '@tanstack/react-query';
import { customerFilesClient } from '../../../shared/client/customerFiles/customerFilesClient';
import { useNavigate, useParams } from 'react-router-dom';
import { cacheKeys } from '../../../config';
import { getStrAfterSubstr } from '../../../shared/helpers/strings';
import { FaFilePdf } from 'react-icons/fa';
import GoBackButton from '../../../shared/components/Button/GoBackButton';
import { isObjectEmpty } from '../../../shared/helpers/data';
import { BsExclamationCircle } from 'react-icons/bs';

const UploadedFiles = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/');
    }
  });

  const { data: customerFilesData } = useQuery(
    [cacheKeys.customers.getCustomerFiles, id],
    () => customerFilesClient.getFiles(id!)
  );

  const goBackHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Fragment>
      <GlassContainer className="bg-white/0">
        {!isObjectEmpty(customerFilesData) &&
          customerFilesData?.map((fileData, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-1 text-white cursor-pointer hover:text-gray-100"
            >
              <FaFilePdf className="text-2xl" />
              <span>{getStrAfterSubstr(fileData.file, 'customer_files/')}</span>
            </div>
          ))}
        {isObjectEmpty(customerFilesData) && (
          <div className="flex flex-row justify-center italic text-md items-center gap-2 text-rose-600">
            <BsExclamationCircle className="text-2xl" />
            You did not uploaded any file yet!
          </div>
        )}
      </GlassContainer>
      <GoBackButton onClick={goBackHandler} className="self-end" />
    </Fragment>
  );
};

export default UploadedFiles;
