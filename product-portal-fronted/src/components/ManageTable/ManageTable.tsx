import {DescriptionsProps, Space, Table, TableProps} from 'antd';
import BaseResponse from "../../models/BaseResponse"
import {ListResponse} from "../../utils/FetchUtils"
import useManageTableViewModel from "./ManageTable.vm"
import PageConfigs from "../../pages/PageConfigs"

import {FaRegEdit} from "react-icons/fa";
import {TbListDetails} from "react-icons/tb";
import {MdDeleteOutline} from "react-icons/md";
import {CiLock} from "react-icons/ci";

export interface ManageTableProps<T> {
    listResponse: ListResponse<T>
    resourceUrl: string
    resourceKey: string
    tableHeads: TableProps<T>['columns']
    entityDetails?: (data: T) => DescriptionsProps['items']
}

function ManageTable<T extends BaseResponse>(props: ManageTableProps<T>) {
    const {
        listResponse,
        tableHeads = [],
        onSelectChange,
        activePage,
        selections,
        handleViewEntityButton,
        handleDeleteEntityButton,
    } = useManageTableViewModel<T>(props)

    const columns: TableProps<T>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        ...tableHeads,
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <div className='d-flex align-items-center gap-3'>
                    <TbListDetails onClick={() => handleViewEntityButton(record.id)} className='text-primary fs-4'/>
                    <FaRegEdit className='text-warning fs-4'/>
                    <CiLock className='text-success fs-4'/>
                </div>
            ),
        },
    ]

    const rowSelection = {
        selectedRowKeys: selections[activePage],
        onChange: onSelectChange
    }

    return (
        <>
            <strong>{`Selected ${
                Object.values(selections).reduce((acc: number, curr) => acc + curr.length, 0)
            } item`}</strong>
            <Table
                // tableLayout='fixed'
                rowSelection={rowSelection}
                rowKey={PageConfigs.rowKey}
                pagination={false}
                bordered
                columns={columns}
                dataSource={listResponse.content}/>
        </>
    )
}

export default ManageTable