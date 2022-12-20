import React, { PropsWithChildren } from "react";


const Main: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className="main">
            {children}
        </main>
    )
}


export default Main;