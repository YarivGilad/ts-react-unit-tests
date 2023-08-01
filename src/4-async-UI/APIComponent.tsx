import { useState, useEffect, FC } from "react";


export const APIComponent: FC = () => {
  const [data, setData] = useState<{name: string}>();

  useEffect(() => {
    let isMounted = true;

    const getData = async ()=> {
        const response = await fetch("/users/1234");
        const json = await response.json();
        if (isMounted === true) {
            setData(json);
        }
    }
    getData();

    return () => {
      isMounted = false;
    };

  }, []);

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};