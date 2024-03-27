import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import Modal from './components/Modal';

function App() {
  return (
    <main>
      <HomePage/>
      <Modal/>
    </main>
  );
}

export default App;
//SPA: Single Page Application - tách riêng
//SSR: Server Side Rendering - gộp
//Hook: Móc/kết nối với Function component
//styled-component: tailwind
/**
 * State:
 *  1. Component State: JS object, miêu tả trạng thái hiện tại của component, có thể được cập nhật.
 *  2. Set State: Cập nhật trạng thái cho ứng dụng React, DOM ảo thay đổi.
 * Props: Đạo cụ - viết tắt của properties - là một OBJECT - truyền dữ liệu giữa các function (cha --> con)
 * DOM: Virtual DOM (cây DOM ảo), là cây DOM do React tạo ra khi chạy ứng dụng, và chỉ có React có thể nhìn thấy cây DOM này, giúp ứng dụng mượt.
    - Browser DOM (cây DOM thật), là cây DOM trình duyệt web dùng, chính là cây DOM mình đề cập ở mục 2 (chúng ta có thể nhìn thấy/thay đổi cây DOM này)
    - Ứng dụng React chạy nhanh, có hiệu năng cao vì: nó sử dụng cây virtual DOM. Mỗi khi có sự thay đổi State/Props, React sẽ so sánh quá khứ và hiện tại của cây DOM ảo này, tìm điểm khác biệt giữa quá khứ và hiện tại, và chỉ update cây.
 *  3. State-full: 1 component có sử dụng state để kiểm soát dữ liệu
    4. State-less: 1 component không sử dụng state
 * React Life-cycle: 
 *  1. Mounting: Được sinh ra
 *  2. Updating: Phát triển
 *  3. Unmounting: Chết/xóa đi
 */