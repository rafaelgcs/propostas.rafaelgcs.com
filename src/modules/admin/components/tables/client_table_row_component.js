import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { defaultImages, smallLogos } from "../../../../core/app_images";
import { addDaysInDate, getFormatedDate } from "../../../../utils/functions";
import BootstrapTooltip from "../../../shared/components/toolltip/bootstrap_tooltip";

const ClientTableRowComponent = (props) => {
    const { row } = props;

    return (
        <tr>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="avatar-group mt-2">
                        <BootstrapTooltip title={row.name}>
                            <a className="avatar avatar-xs rounded-circle">
                                <Avatar className="bg-gradient-dark">{`${row.name[0]}${row.name[1]}`}</Avatar>
                            </a>
                        </BootstrapTooltip>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{row.name}</h6>
                    </div>
                </div>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold"> {row.email} </span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold"> {getFormatedDate(new Date(row.created_at))} </span>
            </td>

        </tr>
    )
}

export default ClientTableRowComponent