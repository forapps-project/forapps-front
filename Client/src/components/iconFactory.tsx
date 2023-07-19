import { ReactElement } from "react";

import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Edit } from "../icons/Edit.svg";
import { ReactComponent as Chat } from "../icons/Chat.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg"

import "./iconFactory.styles.css"

const icons = {
  home: Home,
  edit: Edit,
  chat: Chat,
  setting: Setting,
};

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  icon: IconType;
  isActive: boolean;
}

function Icon({ icon, isActive }: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  return <SVGIcon className={isActive? "active" : "inactive"} />;
}

export default Icon;

