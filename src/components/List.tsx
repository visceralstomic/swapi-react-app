import React from "react";
import List from '@mui/material/List';


interface ListProps<T> {
    items: T[],
    renderItems: (item: T) => React.ReactNode;
}


export default function MyList<T>(props: ListProps<T>) {
    return (
        <List>
            {props.items.map(props.renderItems)}
        </List>
    )
}