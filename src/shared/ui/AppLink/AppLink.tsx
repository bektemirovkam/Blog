import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkThemeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkThemeEnum;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    children,
    theme = AppLinkThemeEnum.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
