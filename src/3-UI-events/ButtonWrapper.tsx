import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
export const ButtonWrapper: FC<IProps> = ({ title, ...props }) => (
    <button {...props}>{title}</button>
)

// export const ButtonWrapper: FC<
//     ButtonHTMLAttributes<HTMLButtonElement>
//     & { title: string }
// > = ({ title, ...props }) => (
//     <button {...props}>{title}</button>
// )