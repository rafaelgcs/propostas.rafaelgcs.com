import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { defaultImages, smallLogos } from "../../../../core/app_images";
import { addDaysInDate, getFormatedDate } from "../../../../utils/functions";
import BootstrapTooltip from "../../../shared/components/toolltip/bootstrap_tooltip";

const HomeTableRowComponent = (props) => {
    const { row } = props;
    const [isValid, setIsValid] = useState(false);

    const verifyDateToNow = () => {
        let dateNow = new Date();
        let dateCreated = addDaysInDate(new Date(row.created_at), row.days_to_expires);

        return (dateNow <= dateCreated);
    }

    useEffect(() => {
        setIsValid(verifyDateToNow())
    }, [row])

    return (
        <tr>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="avatar-group mt-2">
                        <BootstrapTooltip title={row.client.name}>
                            <a className="avatar avatar-xs rounded-circle">
                                <Avatar className="bg-gradient-dark">{`${row.client.name[0]}${row.client.name[1]}`}</Avatar>
                            </a>
                        </BootstrapTooltip>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{row.title}</h6>
                    </div>
                </div>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold"> {getFormatedDate(addDaysInDate(new Date(row.created_at), row.days_to_expires))} </span>
            </td>
            <td className="align-middle">
                <div className="d-block">
                    <button type="button" className={`btn btn-sm btn-outline-${isValid ? "success" : "dark"} text-nowrap mb-0`} disabled={!isValid} >{isValid ? "Válida" : "Expirada"}</button>
                </div>
            </td>
        </tr>
    )
}

export default HomeTableRowComponent