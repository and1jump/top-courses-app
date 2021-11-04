import { TypographyProps } from "./Typography.props";
import styles from "./Typography.module.css";
import cn from "classnames";

export const Typography = ({
  size = "m",
  children,
  className,
  ...props
}: TypographyProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l"
      })}
      {...props}
    >
      {children}
    </p>
  );
};
