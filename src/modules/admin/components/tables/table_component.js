import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TablePaginationComponent from './table_pagination_component';
import TableRowLoading from './table_row_loading';

const TableComponent = ({ rowComponent: TableRow, ...props }) => {
    const { title, subtitle, rows, tableTitles, rightActions, showRightActions, loading, enablePagination, paginationAttr, onChangePerPage } = props;
    return (
        <div className="card">
            <div className="card-header pb-0">
                <div className="row">
                    <div className="col-lg-6 col-7">
                        <h6>{title}</h6>
                        {
                            subtitle && <p className="text-sm mb-0">
                                <span className="font-weight-bold ms-1">{subtitle}</span>
                            </p>
                        }
                    </div>
                    <div className="col-lg-6 col-5 my-auto text-end">
                        {
                            showRightActions &&
                            <div className="dropdown float-lg-end pe-4">
                                <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-ellipsis-v text-secondary"></i>
                                </a>
                                <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                                    {
                                        rightActions.map((action) => {
                                            if (action.type == "link") {
                                                return <li><Link className="dropdown-item border-radius-md" to={action.link}>{action.text}</Link></li>
                                            } else {
                                                return <li><a className="dropdown-item border-radius-md" onClick={action.onClick}>{action.text}</a></li>
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="card-body px-0 pb-2">
                <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                        <thead>
                            <tr>
                                {
                                    tableTitles.map((t_title) => {
                                        return (
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{t_title}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                    <TableRowLoading />
                                    :
                                    rows.map((row, r_index) => {
                                        return (
                                            <TableRow key={`table_row_${r_index}`} row={row} />
                                        )
                                    })
                            }
                        </tbody>
                        <tfoot>
                            {
                                enablePagination &&
                                <TablePaginationComponent onChangePerPage={onChangePerPage} attributes={paginationAttr} />
                            }
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableComponent