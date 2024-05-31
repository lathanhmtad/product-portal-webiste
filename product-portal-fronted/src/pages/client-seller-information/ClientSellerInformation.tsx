import {Button, Form, FormProps, Image, Input} from "antd";
import {useAppSelector} from "../../redux/hooks";
import useGetAllApi from "../../hooks/use-get-all-api";
import PageConfigs from "../PageConfigs";
import {ApiResponse, ListResponse} from "../../utils/FetchUtils";
import {StoreResponse} from "../../models/Store";
import StoreConfigs from "../admin-store-manage/StoreConfigs";
import useUpdateApi from "../../hooks/use-update-api";
import ResourceUrl from "../../constants/ResourceUrl";
import {UserRequest} from "../../models/User";

export default function ClientSellerInformation() {

    const user = useAppSelector(state => state.auth.user)

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<StoreResponse>
    } =
        useGetAllApi<StoreResponse>
        (StoreConfigs.resourceUrl, StoreConfigs.resourceKey, {filter: `user.id==${user?.id}`})

    const updateApi = useUpdateApi<UserRequest, ApiResponse>
        (ResourceUrl.CLIENT_SELLER_UPDATE_INFO, "users", Number(user?.id))

    const onFinish: FormProps<UserRequest>['onFinish'] = (values) => {
        updateApi.mutate(values)
    };

    if (user && !isLoading) {
        return <div className='mt-5'>
            <h1>Thông tin cá nhân</h1>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    fullName: user.fullName,
                    phoneNumber: user.phoneNumber,
                    storeName: listResponse.content[0]?.name,
                    storeLink: listResponse.content[0].urlStore
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Id người dùng"
                    name="id"
                >
                    <Input disabled/>
                </Form.Item>

                <Form.Item<UserRequest>
                    label="Tên đăng nhập"
                    name="username"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<UserRequest>
                    label="Email"
                    name="email"
                >
                    <Input
                    // disabled
                    />
                </Form.Item>
                <Form.Item<UserRequest>
                    label="Họ và tên"
                    name="fullName"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<UserRequest>
                    label="Số điện thoại"
                    name="phoneNumber"
                >
                    <Input/>
                </Form.Item>

                <Form.Item<UserRequest>
                    label="Password"
                    name="password"
                >
                    <Input.Password placeholder='Nếu không cập nhập hãy bỏ trống'/>
                </Form.Item>

                <Form.Item
                    label="Cửa hàng sỡ hữu"
                    name="storeName"
                >
                    <Input disabled/>
                </Form.Item>

                <Form.Item
                    label="Link hiện tại của cửa hàng"
                    name="storeLink"
                >
                    <Input disabled/>
                </Form.Item>

                <Image
                    width={200}
                    src={listResponse.content[0].imageUrls[0]}
                />

                <Image
                    width={200}
                    src={user?.avatar}
                />


                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }

    return <div>Loading</div>
}