import { Theme } from '../../lib/theming/Theme';
import { css, memoizeStyle } from '../../lib/theming/Emotion';
import { resetButton } from '../../lib/styles/Mixins';

const styles = {
  root(t: Theme) {
    return css`
      ${resetButton()};

      cursor: pointer;
      display: block;
      line-height: ${t.menuItemLineHeight};
      font-size: ${t.menuItemFontSize};
      padding: ${t.menuItemPaddingY} ${t.menuItemPaddingX};
      position: relative;
      text-decoration: none;

      button& {
        min-width: 100%;
      }
    `;
  },
  hover(t: Theme) {
    // Color with !important in purpose to override `a:hover`
    return css`
      background: ${t.menuItemHoverBg};
      color: ${t.menuItemTextColorInvert} !important;
    `;
  },
  selected(t: Theme) {
    return css`
      background: ${t.menuItemSelectedBg};
    `;
  },
  disabled(t: Theme) {
    return css`
      background: transparent;
      color: ${t.menuItemTextColorDisabled};
      cursor: default;
    `;
  },
  link(t: Theme) {
    return css`
      color: ${t.menuItemLinkColor};
    `;
  },
  loose() {
    return css`
      padding-left: 15px;
    `;
  },
  withIcon(t: Theme) {
    return css`
      & {
        padding-left: ${t.menuItemPaddingForIcon};
      }
    `;
  },
  comment(t: Theme) {
    return css`
      color: ${t.menuItemCommentColor};
      white-space: normal;
    `;
  },
  commentHover(t: Theme) {
    return css`
      color: ${t.menuItemCommentColorHover};
      opacity: 0.6;
    `;
  },
  icon(t: Theme) {
    return css`
      display: inline-block;
      position: absolute;
      left: ${parseInt(t.menuItemPaddingForIcon) - 16 - parseInt(t.menuItemPaddingIcon)}px;
      top: ${t.menuItemPaddingY};
    `;
  },
};

export const jsStyles = memoizeStyle(styles);
