import React from "react";
import { Link } from "react-router";

interface ILinkTag {
    uri: string,
    name: string,
}
const LinkTag:React.FC <ILinkTag> = ({ uri, name }) => {
    return (
            <Link className="navigationBar" to={uri}>{name}</Link>
    );
};

export default LinkTag;
