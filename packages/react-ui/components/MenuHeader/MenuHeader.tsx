import React, { ReactNode, useContext } from 'react';
import cn from 'classnames';

import { ThemeContext } from '../../lib/theming/ThemeContext';

import { jsStyles } from './MenuHeader.styles';

export interface MenuHeaderProps {
  _enableIconPadding?: boolean;
  children: ReactNode;
}

/**
 * Заголовок в меню.
 */
function MenuHeader({ _enableIconPadding = false, children }: MenuHeaderProps) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={cn({
        [jsStyles.root(theme)]: true,
        [jsStyles.withLeftPadding(theme)]: _enableIconPadding,
      })}
    >
      {children}
    </div>
  );
}

MenuHeader.__KONTUR_REACT_UI__ = 'MenuHeader';
MenuHeader.__MENU_HEADER__ = true;

export { MenuHeader };

export const isMenuHeader = (child: React.ReactNode): child is React.ReactElement<MenuHeaderProps> => {
  return React.isValidElement<MenuHeaderProps>(child)
    ? Object.prototype.hasOwnProperty.call(child.type, '__MENU_HEADER__')
    : false;
};
