import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui";
import { AppLinkThemeEnum } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          className={cls.mainLink}
          to="/"
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkThemeEnum.SECONDARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
