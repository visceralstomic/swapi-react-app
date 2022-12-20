import React from "react"
import { Link } from "react-router-dom"

interface ComaSeparatedLinkProps {
    itemID: string | number,
    textValue: string,
    idx: number,
    listLength: number,
    linkRoute: string
}

export default function ComaSeparatedLink ({
    itemID, textValue, idx, listLength, linkRoute
}: ComaSeparatedLinkProps ) {
    return <span >
                <Link className="item-link"  to={`/${linkRoute}/${itemID}`}>{textValue}</Link> 
                {idx < listLength-1 ? ", " : "" }
            </span>
}