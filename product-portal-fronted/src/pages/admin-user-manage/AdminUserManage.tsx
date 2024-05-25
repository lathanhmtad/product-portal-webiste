import "./AdminUserManage.scss"
import {IoSearch} from "react-icons/io5";
import {FaEdit} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import {FaLockOpen} from "react-icons/fa";
import Pagination from "../../components/Pagination";
import Avatar from "../../assets/img/avatar.jpg"
import {FaXmark} from "react-icons/fa6";
import {Image, TableProps, Tag, Tooltip} from "antd";
import {UserResponse} from "../../models/UserResponse";
import ManageTable from "../../components/ManageTable";
import useResetManagePageState from "../../hooks/use-reset-manage-page-state";
import useGetAllApi from "../../hooks/use-get-all-api";
import UserConfigs from "./UserConfigs";
import {ListResponse} from "../../utils/FetchUtils";
import PageConfigs from "../PageConfigs";
import ManagePagination from "../../components/ManagePagination";

const userData: {
    userId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    role: string,
    enable: boolean
}[] = [
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: false
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: false
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    }
]
export default function AdminUserManage() {

    useResetManagePageState()

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<UserResponse>
    } = useGetAllApi<UserResponse>(UserConfigs.resourceUrl, UserConfigs.resourceKey)


    const entityDetailsTableRowsFragment: TableProps<UserResponse>['columns'] = [
        {
            title: 'Thông tin người dùng',
            key: 'userInfo',
            render: (text, record: UserResponse) => (
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <Image
                        width={40}
                        height={40}
                        style={{width: 40, height: 40, borderRadius: '50%', objectFit: 'cover'}}
                        src={record.avatar}
                    />
                    <span>{record.fullName}</span>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email: string) => (
                <Tooltip title={email}>
                    <span
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                            maxWidth: 180 // Đặt giới hạn chiều rộng theo nhu cầu của bạn
                        }}
                    >
                        {email}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber'
        },
        {
            title: 'Vai trò',
            dataIndex: 'role',
            key: 'role',
            render: (role: string) => {
                let color;
                switch (role) {
                    case 'SELLER':
                        color = '#ff7875';
                        break;
                    case 'ADMIN':
                        color = '#ffd666';
                        break;
                    case 'USER':
                        color = '#95de64';
                        break;
                    default:
                        color = 'black';
                }
                return <Tag style={{fontWeight: 700}} color={color}>{role}</Tag>;
            },
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'enabled',
            key: 'enabled',
            render: (status: boolean) => <Tag color={status ? 'blue' : 'red'}>{status ? 'Active' : 'Inactive'}</Tag>
        },
    ]


    return (
        <div className="admin-user-manage">
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
                <button className="approve">Duyệt Seller</button>
            </div>

            <ManageTable
                listResponse={listResponse}
                resourceUrl={UserConfigs.resourceUrl}
                resourceKey={UserConfigs.resourceKey}
                entityDetailsTableRowsFragment={entityDetailsTableRowsFragment}
                // entityDetails={}
            />

            <ManagePagination listResponse={listResponse}/>

            {/*<table className="table">*/}
            {/*    <tr className="header-row">*/}
            {/*        <th>ID NGƯỜI DÙNG</th>*/}
            {/*        <th>HỌ TÊN</th>*/}
            {/*        <th>EMAIL</th>*/}
            {/*        <th>SỐ ĐIỆN THOẠI</th>*/}
            {/*        <th>VAI TRÒ</th>*/}
            {/*        <th>HÀNH ĐỘNG</th>*/}
            {/*    </tr>*/}
            {/*    {userData.map((value) => {*/}
            {/*        let lockIcon;*/}
            {/*        if (value.enable) {*/}
            {/*            lockIcon = <FaLockOpen className="lock-icon" style={{color: 'var(--primary-color)'}}/>*/}
            {/*        } else {*/}
            {/*            lockIcon = <FaLock className="lock-icon" style={{color: 'red'}}/>*/}
            {/*        }*/}
            {/*        return <tr className="data-row">*/}
            {/*            <td className="id-user">{value.userId}</td>*/}
            {/*            <td className="full-name">{value.fullName}</td>*/}
            {/*            <td className="email">{value.email}</td>*/}
            {/*            <td className="phone-number">{value.phoneNumber}</td>*/}
            {/*            <td className="role">{value.role}</td>*/}
            {/*            <td className="action">*/}
            {/*                <FaEdit className="edit-icon"/>*/}
            {/*                {lockIcon}*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*    })}*/}
            {/*</table>*/}
            {/*<Pagination/>*/}
            {/*<div className="information-card">*/}
            {/*    <img src={Avatar} alt="" className="avatar"/>*/}
            {/*    <div className="information">*/}
            {/*        <span className="user-id"><strong>ID người dùng:</strong> 0123456789</span>*/}
            {/*        <span className="full-name"><strong>Họ và tên:</strong> Nguyễn Văn Thuận</span>*/}
            {/*        <span className="email"><strong>Email:</strong> thuannguyen@gmail.com</span>*/}
            {/*        <span className="phone-number"><strong>Số điện thoại:</strong> 0905030144</span>*/}
            {/*        <span className="role"><strong>Vai trò:</strong> Customer</span>*/}
            {/*        <span className="user-name"><strong>Tên đăng nhập:</strong> thuannguyen0905</span>*/}
            {/*        <span className="password"><strong>Mật khẩu:</strong> 123456789</span>*/}
            {/*        <span className="status"><strong>Trạng thái tài khoản:</strong> Active</span>*/}
            {/*        <span className="date-create"><strong>Ngày tạo:</strong> 20/03/2024</span>*/}
            {/*        <span className="creator-id"><strong>ID người tạo:</strong> 0123456789</span>*/}
            {/*        <span className="date-update"><strong>Ngày cập nhật:</strong> 21/03/2024</span>*/}
            {/*        <span className="user-update-id"><strong>ID người cập nhật:</strong> 0123456789</span>*/}
            {/*    </div>*/}
            {/*    <FaXmark className="close-icon"/>*/}
            {/*</div>*/}
        </div>
    )
}