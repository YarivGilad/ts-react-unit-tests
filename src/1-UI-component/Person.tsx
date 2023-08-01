import { FC } from "react";

interface IProps {
    name: string;
}
export const Person:FC<IProps> = ({name})=> (
    <div role="contentinfo" title="The name">Name is {name}</div>
)