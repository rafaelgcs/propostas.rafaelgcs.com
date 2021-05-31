import React, { useEffect, useState } from "react"

import { FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from "@material-ui/core"

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const TablePaginationComponent = (props) => {
    const { attributes, onChangePerPage } = props;
    const [perPage, setPerPage] = useState();
    useEffect(() => {
        setPerPage(attributes.per_page)
    }, [attributes])
    return (
        <tr className="w-100">
            <td colSpan={4} className="w-100" style={{ border: 'none' }}>
                <div className="col-12">
                    <div className="row w-100">
                        <div className="col-3 text-left row">
                            <div className="col-2" />
                            <div className="col-3">
                                <FormControl>
                                    <InputLabel shrink id="select__input-label">
                                        {""}
                                    </InputLabel>
                                    <Select
                                        labelId="select__input-label"
                                        id="select__input"
                                        value={perPage}
                                        onChange={(ev) => { setPerPage(ev.target.value); onChangePerPage(ev.target.value); }}
                                        
                                    >
                                        <MenuItem selected value={5}>5</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-7 text-left">
                                <Typography className="text-xs mt-4">
                                    {"itens por página"}
                                </Typography>
                            </div>
                        </div>
                        <div className="col-5" />
                        <div className="col-2 pt-3 text-right">
                            <Typography className="text-xs">
                                {attributes.from} {" até "} {attributes.to} {" de "} {attributes.total}
                            </Typography>
                        </div>
                        <div className="col-2 row">
                            <div className="col-6">
                                <IconButton disabled={!(attributes.from > 1)} aria-label="Anterior">
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <div className="col-6">
                                <IconButton disabled={attributes.to == attributes.total} aria-label="Próxima">
                                    <ChevronRightIcon />
                                </IconButton>

                            </div>

                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TablePaginationComponent