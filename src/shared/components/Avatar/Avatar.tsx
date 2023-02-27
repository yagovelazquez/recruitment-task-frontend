import { FC, Fragment } from 'react';
import { AvatarProps } from './Avatar.types';
import { UserIcon } from '@heroicons/react/24/solid';

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Fragment>
      {src ? (
        <img
          className="w-20 h-20 rounded-full"
          src={src}
          alt="Rounded avatar"
        />
      ) : (
        <div className="relative w-20 h-20 overflow-hidden  rounded-full ">
          <UserIcon />
        </div>
      )}
    </Fragment>
  );
};

export default Avatar;
