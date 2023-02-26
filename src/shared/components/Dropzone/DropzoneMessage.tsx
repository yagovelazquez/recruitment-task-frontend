import { FC } from 'react';
import { DropzoneMessageVariants, IDropzoneMessageProps } from './Dropzone.types';

const DropzoneMessage: FC<IDropzoneMessageProps> = ({
  variant,
  fileName,
  readableSize,
  dropZoneMsgs,
}) => {
  const { dropZoneMsg, dropZoneAcceptedMsg, dropZoneRejectedMsg } = dropZoneMsgs;

  const messageVariants: DropzoneMessageVariants = {
    drag: dropZoneMsg,
    dragAccepted: dropZoneAcceptedMsg,
    dragRejected: dropZoneRejectedMsg,
    dragDropped: <span>`<i>{fileName} {readableSize}</i></span>,
  };

  return (
    <p className="text-base">
      {messageVariants[variant]}
    </p>
  );
};

export default DropzoneMessage;
