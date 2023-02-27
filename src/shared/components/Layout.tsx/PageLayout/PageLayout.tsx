import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingSpinnerModal from '../../Loading/LoadingSpinnerModal';
import GlassContainer from '../GlassContainer/GlassContainer';
import Navbar from '../Navbar/Narvbar';
import { PageLayoutProps } from './PageLayout.types';

const PageLayout: FC<PageLayoutProps> = () => {
  const isFetching = useIsFetching() > 0;
  const isMutating = useIsMutating() > 0;
  return (
    <Fragment>
      <LoadingSpinnerModal isLoading={isFetching || isMutating} />
      <GlassContainer className="max-w-screen-lg min-w-min">
        <Navbar />
        <Outlet />
      </GlassContainer>
    </Fragment>
  );
};

export default PageLayout;
