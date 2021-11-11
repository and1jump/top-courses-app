import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
// import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
// import { Search } from "../../components";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      {/* <Logo className={styles.logo} /> */}
      {/* <Search /> */}
      {/* <Menu /> */}
      header
    </div>
  );
};
