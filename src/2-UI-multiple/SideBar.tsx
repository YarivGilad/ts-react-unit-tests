import { FC } from "react";

interface IProps {
    items:{
        name:string;
        href:string;
    }[]
}

export const SideBar:FC<IProps> = ({items})=> (
    <div>
    {
        items.map(item=> (
            <div key={item.href}>
                <a href={item.href} role="navigation">{item.name}</a>
            </div>
        ))
    }
    </div>
)