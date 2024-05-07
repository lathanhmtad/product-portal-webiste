import "./AdminUserManage.scss"
import {IoSearch} from "react-icons/io5";
import useGetAllApi from "../../hooks/use-get-all-api";
import ResourceUrl from "../../constants/ResouceUrl";
import PageConfigs from "../PageConfigs";
import {UserResponse} from "../../models/User";
import {ListResponse} from "../../utils/FetchUtils";
import {Image, TableProps} from "antd";
import Loading from "../../components/Loading";
import ManageTable from "../../components/ManageTable/ManageTable";
import {CiCircleCheck} from "react-icons/ci";
import {IoCloseCircleOutline} from "react-icons/io5";
import ManagePagination from "../../components/ManagePagination";

const columns: TableProps['columns'] = [
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Họ và tên',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: value => <Image
            width={40}
            src={value}
        />
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'enabled',
        key: 'enabled',
        render: value => <div>{value ? <CiCircleCheck className='text-success fs-3'/> :
                <IoCloseCircleOutline className='text-danger fs-3'/>}</div>
    },
];

export default function AdminUserManage() {

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<UserResponse>
    } =
        useGetAllApi(ResourceUrl.USER, "Users")

    return isLoading ? <Loading/> : <div className="admin-user-manage">
        <div className="toolbar">
            <div className="search-filter">
                <div className="search">
                    <input type="text" placeholder='Tìm kiếm...' className="search-input"/>
                    <IoSearch className='search-icon'/>
                </div>
                <select name="" id="role">
                    <option className="role-item" value="Customer">Customer</option>
                    <option className="role-item" value="Seller">Seller</option>
                    <option className="role-item" value="Admin">Admin</option>
                </select>
            </div>
           <div className='d-flex gap-3 align-items-center'>
               <button className="btn btn-success">Duyệt Seller</button>
               <button className='btn btn-primary'>Thêm mới seller</button>
           </div>
        </div>
        <ManageTable listResponse={listResponse}
                     resourceUrl={ResourceUrl.USER}
                     resourceKey={"Users"}
                     tableHeads={columns}/>

        <ManagePagination listResponse={listResponse}/>
    </div>;
}