import { useState } from "react";

// Thể hiện hộp thoại
function Modal() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Tăng lên 1 đơn vị</button>

            <strong>{count}</strong>

            <button onClick={() => {
                setCount(count - 1);
            }}>Giảm xuống 1 đơn vị</button>            
        </div>
    );
}
export default Modal;
// Hàm useState() là 1 array, trả ra 2 tham số. Tham số đầu tiên chính là ‘tên của State’ (ăn theo giá trị khởi tạo) và tham số thứ 2 chính là ‘hàm có thể cập nhật giá trị của state’ (tên hàm luôn bắt đầu bằng set - component sẽ rerender lại) => dùng array destructuring để lấy ra 2 tham số này.