import {FaEdit} from "react-icons/fa";
// import Pagination from "../../components/Pagination";
import {IoCloseCircleOutline, IoSearch} from "react-icons/io5";
import {FaLock} from "react-icons/fa";
import {FaLockOpen} from "react-icons/fa";
import "./AdminStoreManage.scss"
import {Image, TableProps, Tooltip} from "antd";
import {CiCircleCheck} from "react-icons/ci";
import PageConfigs from "../PageConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import {UserResponse} from "../../models/User";
import useGetAllApi from "../../hooks/use-get-all-api";
import ResourceUrl from "../../constants/ResouceUrl";
import ManageTable from "../../components/ManageTable/ManageTable";
import ManagePagination from "../../components/ManagePagination";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";
import Loading from "../../components/Loading";


const columns: TableProps['columns'] = [
    {
        title: 'Tên cửa hàng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'URL cửa hàng',
        // width: 100,
        dataIndex: 'urlStore',
        key: 'urlStore',
        render: value => <Tooltip placement="topLeft" title={value}>
            {value.length > 30 ? `${value.substring(0, 20)}...` : value}
        </Tooltip>
    },
    {
        title: 'Id seller',
        dataIndex: 'owner',
        key: 'owner',
        render: owner => <span>{owner.id}</span>
    },
    {
        title: 'Trạng thái',
        dataIndex: 'enabled',
        key: 'enabled',
        render: value => <div>{value ? <CiCircleCheck className='text-success fs-3'/> :
            <IoCloseCircleOutline className='text-danger fs-3'/>}</div>
    },
    {
        title: 'Ngày đăng ký',
        dataIndex: 'createdAt',
        key: 'createdAt'
    },
];

export default function AdminStoreManage() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<UserResponse>
    } =
        useGetAllApi(ResourceUrl.STORE, "Stores")

    return isLoading ? <Loading/> : <div className="admin-store-manage">
        <div className="search-filter">
            <div className="search">
                <input type="text" placeholder='Tìm kiếm...' className="search-input"/>
                <IoSearch className='search-icon'/>
            </div>
        </div>
        <ManageTable listResponse={listResponse}
                     resourceUrl={ResourceUrl.STORE}
                     resourceKey='Stores'
                     tableHeads={columns}/>
        <ManagePagination listResponse={listResponse}/>
    </div>
}