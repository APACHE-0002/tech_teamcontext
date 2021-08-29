import React, { useContext } from "react";

import {useCount} from "../../context/Count";

export default function Mirror(){
    const {count} = useCount();

    return(
        <div>
            <span>
                <b>Mirror: </b>
                {count}
            </span>
        </div>
    )
}