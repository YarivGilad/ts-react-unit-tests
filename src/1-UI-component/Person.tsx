// import { FC } from "react";

interface Props {
    name: string;
}
export const Person = ({name}:Props)=> (
    <div role="contentinfo" title="The name">Name is {name}</div>
)