import React from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {LinkArea, LinkIcon} from "./styled"

export default({icon, link}) =>{

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push(link);
    }


    return(
        <LinkArea active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon}/>
        </LinkArea>
    )
}