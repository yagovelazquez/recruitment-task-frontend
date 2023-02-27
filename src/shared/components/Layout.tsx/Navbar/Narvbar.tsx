import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import GlassContainer from '../GlassContainer/GlassContainer';
import { NavbarProps } from './Narvbar.types';

const Navbar: FC<NavbarProps> = () => {
  const activeClassName = 'border-b border-white pb-2';

  return (
    <GlassContainer className="bg-white/0 p-6">
      <nav>
        <ul className="flex flex-row gap-10 text-lg text-white">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="customers"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="file-upload"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Upload customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </GlassContainer>
  );
};

export default Navbar;
