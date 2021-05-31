import React from "react"
import { LinearProgress, withStyles } from "@material-ui/core"

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#252f40',
    },
}))(LinearProgress)

const TableRowLoading = () => {

    return (
        <tr>
            <td colspan={4}>
                <BorderLinearProgress />
            </td>
        </tr>
    )
}

export default TableRowLoading