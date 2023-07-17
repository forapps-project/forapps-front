import { ReactElement } from "react";

import { ReactComponent as Home } from "../icons/Home.svg";
import { ReactComponent as Edit } from "../icons/Edit.svg";
import { ReactComponent as Chat } from "../icons/Chat.svg";
import { ReactComponent as Setting } from "../icons/Setting.svg";

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
}

function Icon({ icon }: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  return <SVGIcon />;
}

export default Icon;

