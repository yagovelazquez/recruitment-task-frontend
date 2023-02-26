import { DragVariant, IGetDragVariant } from './Dropzone.types';

export const getDragVariant = ({
  isDragActive,
  fileUploaded,
}: IGetDragVariant): DragVariant => {
  let dragVariant;

  switch (true) {
    case isDragActive:
      dragVariant = DragVariant.DragAccepted;
      break;
    case fileUploaded?.isAccepted === false:
      dragVariant = DragVariant.DragRejected;
      break;
    case fileUploaded?.isAccepted:
      dragVariant = DragVariant.DragDropped;
      break;
    default:
      break;
  }

  return dragVariant || DragVariant.Drag;
};

export const getDropzoneContainerClassName = (variant: DragVariant) => {
  const sharedStyles = 'rounded-md min-h-0 flex items-center justify-center flex-col gap-2 h-40 cursor-pointer relative shadow-lg'
  const defaultStyles = 'bg-white/20 text-white';
  const acceptedStyles = 'bg-teal-100 text-teal-500';
  const rejectedStyles = "text-rose-500 bg-rose-200/60";

  switch (variant) {
    case DragVariant.Drag:
      return `${sharedStyles} ${defaultStyles}`;
    case DragVariant.DragAccepted:
      return `${sharedStyles} ${acceptedStyles}`;
    case DragVariant.DragDropped:
      return `${sharedStyles} ${acceptedStyles}`;
    case DragVariant.DragRejected:
      return `${sharedStyles} ${rejectedStyles}`;
    default:
      return '';
  }
};

//todo add the icons too
