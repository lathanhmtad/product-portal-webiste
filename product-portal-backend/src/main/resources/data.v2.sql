
-- password: id=1=admin, id=2=baole26072003, id=3=ngovantuyen, id=4=nguyenthoquangvinh, id=5->10=password5->password10
INSERT INTO user(id, email, username, full_name, phone_number, password, role, avatar, enabled, created_at, created_by)
VALUES
    (1,'admin@gmail.com', 'admin', 'Administrator', '0987654321',
		'$2y$10$KA8rFF19RqCQaGCnSJBHUuNfZzyfH.2oi.6yBs/aYbmooOBgzqNZO', 'ADMIN',
		'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326278/product-portal-website-images/users/admin.png', 
        1, NOW(), 1),
    (2,'baole26072003@gmail.com', 'baole26072003', 'Lê Quốc Bảo', '0123456789',
		'$2y$10$CMsEj8tqZTc/BKl3W/C2vOhw.0Je89jVDP4gnj7k.ZbgoWajDVdLi', 'ADMIN', 
        'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326310/product-portal-website-images/users/lequocbao.jpg', 
        1, NOW(), 1),
    (3,'ngovantuyen@gmail.com', 'ngovantuyen', 'Ngô Văn Tuyến', '0901234567',
		'$2y$10$asCrTFt.supv2scQSwFpgua93TR2xS1WEjMWABOvwoMo/8zrjSQGO', 'ADMIN', 
        'https://res.cloudinary.com/dixswfj8d/image/upload/v1712370663/product-portal-website-images/users/ngovantuyen.jpg', 
        0, NOW(), 1),
    (4,'nguyenthoquangvinh@gmail.com', 'nguyenthoquangvinh', 'Nguyễn Thọ Quang Vinh', '0888777666',
		'$2y$10$hr6UyRVsiKvF3w.FfbzU4.7yH8Veg7ll4Nc2WjhXPco/aX9UeRzTW', 'ADMIN', 
		'https://res.cloudinary.com/dixswfj8d/image/upload/v1712370779/product-portal-website-images/users/nguyenthoquangvinh.jpg', 
        1, NOW(), 1),
    (5,'thuylinh@gmail.com', 'thuylinh', 'Mỹ Hòa Thúy Linh', '0777000555',
		'$2y$10$JLXm4XAQ84tshvoezSHah.jvwtrfXum230irWm5GWGgW4MPJNv.zK', 'SELLER', 
		'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326296/product-portal-website-images/users/myhoathuylinh.jpg', 
        1, NOW(), 1),
    (6,'vandat@gmail.com', 'vandat', 'Văn Đạt Đỗ', '0999888777',
		'$2y$10$grM2iS94i3JJEmdVzhtzm.tY/UR4lDXCKu2RZpWy9OxG9serXXr1O', 'USER', 
        'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326288/product-portal-website-images/users/vandatdo.jpg', 
        1, NOW(), 1),
    (7,'linhchi@gmail.com', 'linhchi', 'Linh Chi', '0333222111',
		'$2y$10$AKYyz5kKCMTnofPp/yDNmekAVnoUCy07AXrUGbSJpWritET4QXFf.', 'SELLER', 
        'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326291/product-portal-website-images/users/linhchi.webp', 
        1, NOW(), 1),
    (8,'quanghuy@gmail.com', 'ngoquanghuy', 'Ngô Quang Huy', '0555444333',
		'$2y$10$kYKMNfLfXWZL6VMFue3QO.1E3Te09IA8uiTlKudHt/byxmyHJ0JMm', 'SELLER', 
		'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326305/product-portal-website-images/users/ngoquanghuy.jpg', 
        1, NOW(), 1),
    (9,'honganh@gmail.com', 'honganh', 'Hồng Anh', '0666555222',
		'$2y$10$VqbfKioN1fdcvpA9LweMTOoDydAk46Mzrq1ui3f1ynJttdYBPqfsm', 'USER', 
        'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326281/product-portal-website-images/users/honganh.jpg', 
        0, NOW(), 1),
    (10,'khanhhoa@gmail.com', 'khanhhoa', 'Khánh Hoa', '0876543210',
		'$2y$10$J9b8LYvfP8pdzrh4ssyuAeVboj.wypn4MV2RdSN0kguJKAYtcC2XO', 'SELLER', 
		'https://res.cloudinary.com/dixswfj8d/image/upload/v1712326286/product-portal-website-images/users/khanhhoa.webp', 
		1, NOW(), 1)
;

INSERT INTO category (id, name, image, parent_id, enabled, created_at, created_by) VALUES
(1,'Điện thoại di động', '', NULL, 1, NOW(), 1),
(2,'Thời trang nam', '', NULL, 1, NOW(), 1),
(3,'Thời trang nữ', '', NULL, 1, NOW(), 1),
(4,'Thiết bị gia dụng', '', NULL, 1, NOW(), 1),
(5,'Sách', '', NULL, 1, NOW(), 1),
(6,'Máy tính bảng', '', NULL, 1, NOW(), 1),
(7,'Tivi', '', NULL, 1, NOW(), 1),
(8,'Tai nghe', '', NULL, 1, NOW(), 1)

-- Subcategories for 'Đồ điện tử'
-- (5, 'Điện thoại di động', '', 1, 1, NOW(), 1),
-- (6, 'Máy tính bảng', '', 1, 1, NOW(), 1),
-- -- Subcategories for 'Thời trang'
-- (7, 'Quần áo nam', '', 2, 1, NOW(), 1),
-- (8, 'Quần áo nữ', '', 2, 1, NOW(), 1),
-- -- Subcategories for 'Thiết bị gia dụng'
-- (9, 'Máy giặt', '', 3, 1, NOW(), 1),
-- (10, 'Tủ lạnh', '', 3, 1, NOW(), 1),
-- -- Subcategories for 'Sách'
-- (11, 'Sách kỹ năng sống', '', 4, 1, NOW(), 1),
-- (12, 'Sách tiểu thuyết', '', 4, 1, NOW(), 1),
-- -- Level 2 subcategories for 'Điện thoại di động'
-- (13, 'Điện thoại cảm ứng', '', 5, 1, NOW(), 1),
-- (14, 'Điện thoại cục gạch', '', 5, 1, NOW(), 1),
-- (15, 'Áo sơ mi nam', '', 7, 1, NOW(), 1)
;

INSERT INTO store (id,name, url_store, user_id, created_at, created_by) VALUES
(1,'FPT FAKER SHOP', 'https://fptshop.com.vn', 5, NOW(), 5),
(2,'Men lì shop', 'https://www.lazada.vn/shop/men-li-fashion/?path=index.htm', 7, NOW(), 7),
(3,'Siêu mọt sách shop', 'https://sieumotsach.com/', 8, NOW(), 8),
(4,'Phụ kiện gia đình shop', 'https://macsetup.vn/collections/phu-kien-gia-dinh', 10, NOW(), 10),
(5,'Iphone shop', 'https://cellphones.com.vn/', 5, NOW(), 5),
(6,'Tri thức làm giàu shop', 'https://shopsach.com/', 7, NOW(), 7),
(7,'Điện thoại tuổi thơ store', 'https://viettelstore.vn/tin-tuc/tro-ve-tuoi-tho-voi-nhung-chiec-dien-thoai-nokia-mot-thoi-vang-bong', 8, NOW(), 8),
(8,'Chuyên máy giặt', 'https://www.electrolux.vn/thiet-bi/may-giat/?gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUlzYyyYgQvj77OK28syh5uJT9UZEw_epq07Xk0Nel2rIWn2lFvaT3BoCMQkQAvD_BwE&gclsrc=aw.ds', 10, NOW(), 10),
(9,'Gaming mobile store', 'https://www.viettablet.com/dien-thoai/gaming-phone', 5, NOW(), 5),
(10,'Trị nóng store', 'https://meta.vn/quat-cac-loai-c448?ref=pmax-quat-HN&gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUmls037gbjp9UlxeTXdJfyWFwUSyKnOZ7GKgRLHMJ931a_XPUbwNwBoCSWQQAvD_BwE',7, NOW(), 7),
(11, 'Nữ tính store', 'https://www.ief-vn.com/', 7, NOW(), 7)
;
insert into image(store_id, url) VALUES
(1, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910892/product-portal-website-images/stores/logo-fpt-shop.jpg'),
(1, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910889/product-portal-website-images/stores/FPT%20FAKER%20SHOP%202.webp'),
(2, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910902/product-portal-website-images/stores/Men%20l%C3%AC%20shop%201.jpg'),
(2, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910904/product-portal-website-images/stores/Men%20l%C3%AC%20shop%202.jpg'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910907/product-portal-website-images/stores/Si%C3%AAu%20s%C3%A1ch%20shop%201.jpg'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910909/product-portal-website-images/stores/Si%C3%AAu%20s%C3%A1ch%20shop%202.jpg'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910911/product-portal-website-images/stores/Si%C3%AAu%20s%C3%A1ch%20shop%203.jpg'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910913/product-portal-website-images/stores/Ph%E1%BB%A5%20ki%E1%BB%87n%20gia%20%C4%91%C3%ACnh%20shop%201.png'),
(5, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910916/product-portal-website-images/stores/Iphone%20shop%201.jpg'),
(5, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910917/product-portal-website-images/stores/Iphone%20shop%202.jpg'),
(6, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910919/product-portal-website-images/stores/L%C3%A0m%20gi%C3%A0u%20shop%201.webp'),
(6, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910921/product-portal-website-images/stores/L%C3%A0m%20gi%C3%A0u%20shop%202.jpg'),
(7, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910922/product-portal-website-images/stores/%C4%90i%E1%BB%87n%20tho%E1%BA%A1i%20tu%E1%BB%95i%20th%C6%A1%20store%201.jpg'),
(8, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910924/product-portal-website-images/stores/Chuy%C3%AAn%20m%C3%A1y%20gi%E1%BA%B7t.jpg'),
(9, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910926/product-portal-website-images/stores/Gaming%20mobile%20store%201.jpg'),
(10, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910897/product-portal-website-images/stores/Tr%E1%BB%8B%20n%C3%B3ng%20store.jpg'),
(10, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910896/product-portal-website-images/stores/Tr%E1%BB%8B%20n%C3%B3ng%20store%202.jpg'),
(11, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910898/product-portal-website-images/stores/N%E1%BB%AF%20t%C3%ADnh%20store%201.jpg'),
(11, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712910901/product-portal-website-images/stores/N%E1%BB%AF%20t%C3%ADnh%20store%202.png')
;

INSERT INTO product (id, name, price, slug, category_id, store_id, created_at, created_by) VALUES
(1,'Smart Tivi Samsung Crystal UHD 4K 55 inch', 8390000, 'smart-tivi-samsung-crystal-uhd-4k-55-inch', 7, 1, NOW(), 5),
(2,'Tai nghe chụp tai (Không dây) Sony WH-1000XM4 - Chính hãng', 4990000, 
	'tai-nghe-khong-day-chong-on-sony-wh-1000xm4-chinh-hang', 8, 1, NOW(), 5),
(3,'Máy tính bảng iPad Pro M2', 28590000, 'may-tinh-bang-ipad-pro-m2', 6, 5, NOW(), 5),
(4,'Iphone 14 pro max', 34500000, 'iphone-14-pro-max', 1, 5, NOW(), 5),
(5,'Iphone xs max', 11200000, 'iphone-xs-max', 1, 5, NOW(), 5),
(6,'NUBIA RED MAGIC 6S', 31250000, 'nubia-red-magic-6s', 1, 9, NOW(), 5),

(7,'Áo Polo Nam Premium Tay Ngắn Phối Viền Cổ Form Fitted', 638000, 
	'ao-polo-nam-premium-tay-ngan-phoi-vien-co-form-fitted', 2, 2, NOW(), 7),
(8,'Combo 2 Quần Lót Nam Trơn Form Brief', 738000, 
	'combo-2-quan-lot-nam-tron-form-brief', 2, 2, NOW(), 7),
(9,'Quần Short Thể Thao Nam Ống Rộng Phối Viền Form Straight', 1200000, 
	'quan-short-the-thao-nam-ong-rong-phoi-vien-form-straight', 2, 2, NOW(), 7),
(10,'Quần Lót Nữ Trơn Không Đường May', 94000, 
	'quan-lot-nu-tron-khong-duong-may', 3, 11, NOW(), 7),
(11,'Đồ Bơi Bikini Nữ 2 Mảnh Cổ Yếm Cạp Thấp Nylon Trơn', 497000, 
	'do-boi-bikini-nu-2-manh-co-yem-cap-thap-nylon-trơn', 3, 11, NOW(), 7),
(12,'Chân Váy Chữ A Nữ Mini Vải Tweed Trơn Form A Line', 567000, 
	'chan-vay-chu-a-nu-mini-vai-tweed-tron-form-a-line', 3, 11, NOW(), 7),
(13,'Suy Nghĩ Của Người Giàu - Steve Siebold', 2500000, 
	'suy-nghi-cua-nguoi-giau-steve-siebold', 5, 6, NOW(), 7),
(14,'Think And Grow Rich - Nghĩ Giàu Và Làm Giàu', 1550000, 
	'think-and-grow-rich-nghi-giau-va-lam-giau', 5, 6, NOW(), 7),
    
(15,'Cây Cam Ngọt Của Tôi', 84200, 
	'cay-cam-ngot-cua-toi', 5, 3, NOW(), 8),
(16,'Một Đời Được Mất', 101200, 
	'mot-doi-duoc-mat', 5, 3, NOW(), 8),
(17,'Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im Lặng Là Trí Tuệ (Tái Bản)', 137970, 
	'noi-chuyen-la-ban-nang-giu-mieng-la-tu-duong-im-lang-la-tri-tue', 5, 3, NOW(), 8),
(18,'Di Động NOKIA 105', 359000, 
	'di-dong-nokia-105', 1, 7, NOW(), 8),
(19,'Di Động NOKIA 110 4G Pro Tím', 460000, 
	'di-dong-nokia-110-4g-tim', 1, 7, NOW(), 8),
    
(20,'Máy Hút Bụi và Thổi Bụi 12 Lít YILI YL6263A', 995000, 
	'may-hut-bui-12-lit-yili-yl6263a', 4 , 4, NOW(), 10),
(21,'Máy chà sàn Super Clean SC-002', 7900000, 
	'may-cha-san-cong-nghiep-super-clean-sc-002', 4 , 4, NOW(), 10),
(22,'Tủ lạnh Samsung Inverter 488 lít Multi Door RF48A4010B4/SV', 21490000, 
	'tu-lanh-samsung-inverter-488-lit-multi-door-rf48a4010b4-sv', 4 , 4, NOW(), 10),
(23,'Tủ lạnh Side by Side Bosch EUC.KAD93VBFP', 62500000, 
	'tu-lanh-side-by-side-bosch-euckad93vbfp', 4 , 4, NOW(), 10),
(24,'Máy giặt cửa ngang 10kg UltimateCare 100 - Trắng', 9490000, 
	'may-giat-cua-ngang-10kg-ultimatecare-100-trang', 4 , 8, NOW(), 10),
(25,'Máy giặt sấy 8/5kg UltimateCare 900 - Trắng', 16290000, 
	'may-giat-say-8/5kg-ulimatecare-900', 4 , 8, NOW(), 10)
;
INSERT INTO image (product_id, url) VALUES
(1, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914633/product-portal-website-images/products/Smart%20LED%20TV%2042%201.webp'),
(1, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914636/product-portal-website-images/products/Smart%20LED%20TV%2042%202.jpg'),
(1, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914638/product-portal-website-images/products/Smart%20LED%20TV%2042%203.jpg'),
(2, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914699/product-portal-website-images/products/Wireless%20Bluetooth%20Headphones.jpg'),
(2, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914690/product-portal-website-images/products/Wireless%20Bluetooth%20Headphones%202.jpg'),
(2, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914696/product-portal-website-images/products/Wireless%20Bluetooth%20Headphones%203.webp'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914719/product-portal-website-images/products/M%C3%A1y%20t%C3%ADnh%20b%E1%BA%A3ng%20iPad%20Pro%20M2%2012.9%20inch%20WiFi%20128GB%201.jpg'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914720/product-portal-website-images/products/M%C3%A1y%20t%C3%ADnh%20b%E1%BA%A3ng%20iPad%20Pro%20M2%2012.9%20inch%20WiFi%20128GB%202.jpg'),
(3, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914722/product-portal-website-images/products/M%C3%A1y%20t%C3%ADnh%20b%E1%BA%A3ng%20iPad%20Pro%20M2%2012.9%20inch%20WiFi%20128GB%203.webp'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914724/product-portal-website-images/products/Iphone%2014%20pro%20max%201.webp'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914726/product-portal-website-images/products/Iphone%2014%20pro%20max%202.webp'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914727/product-portal-website-images/products/Iphone%2014%20pro%20max%203.jpg'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914729/product-portal-website-images/products/Iphone%2014%20pro%20max%204.jpg'),
(4, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914731/product-portal-website-images/products/Iphone%2014%20pro%20max%205.jpg'),
(5, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914733/product-portal-website-images/products/Iphone%20xs%20max%201.jpg'),
(5, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914736/product-portal-website-images/products/Iphone%20xs%20max%202.jpg'),
(5, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914738/product-portal-website-images/products/Iphone%20xs%20max%203.webp'),
(6, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914740/product-portal-website-images/products/NUBIA%20RED%20MAGIC%206S%201.jpg'),
(6, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914741/product-portal-website-images/products/NUBIA%20RED%20MAGIC%206S%202.webp'),
(6, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914743/product-portal-website-images/products/NUBIA%20RED%20MAGIC%206S%203.jpg'),
(7, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914745/product-portal-website-images/products/%C3%81o%20Polo%20Nam%20Premium%20Tay%20Ng%E1%BA%AFn%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20C%E1%BB%95%20Form%20Fitted%201.jpg'),
(7, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914746/product-portal-website-images/products/%C3%81o%20Polo%20Nam%20Premium%20Tay%20Ng%E1%BA%AFn%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20C%E1%BB%95%20Form%20Fitted%202.webp'),
(7, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914747/product-portal-website-images/products/%C3%81o%20Polo%20Nam%20Premium%20Tay%20Ng%E1%BA%AFn%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20C%E1%BB%95%20Form%20Fitted%203.webp'),
(8, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914749/product-portal-website-images/products/Combo%202%20Qu%E1%BA%A7n%20L%C3%B3t%20Nam%20Tr%C6%A1n%20Form%20Brief%201.webp'),
(8, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914751/product-portal-website-images/products/Combo%202%20Qu%E1%BA%A7n%20L%C3%B3t%20Nam%20Tr%C6%A1n%20Form%20Brief%202.jpg'),
(8, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914754/product-portal-website-images/products/Combo%202%20Qu%E1%BA%A7n%20L%C3%B3t%20Nam%20Tr%C6%A1n%20Form%20Brief%203.jpg'),
(9, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914756/product-portal-website-images/products/Qu%E1%BA%A7n%20Short%20Th%E1%BB%83%20Thao%20Nam%20%E1%BB%90ng%20R%E1%BB%99ng%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20Form%20Straight%201.webp'),
(9, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914757/product-portal-website-images/products/Qu%E1%BA%A7n%20Short%20Th%E1%BB%83%20Thao%20Nam%20%E1%BB%90ng%20R%E1%BB%99ng%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20Form%20Straight%202.webp'),
(9, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914759/product-portal-website-images/products/Qu%E1%BA%A7n%20Short%20Th%E1%BB%83%20Thao%20Nam%20%E1%BB%90ng%20R%E1%BB%99ng%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20Form%20Straight%203.webp'),
(9, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914761/product-portal-website-images/products/Qu%E1%BA%A7n%20Short%20Th%E1%BB%83%20Thao%20Nam%20%E1%BB%90ng%20R%E1%BB%99ng%20Ph%E1%BB%91i%20Vi%E1%BB%81n%20Form%20Straight%204.jpg'),
(10, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914640/product-portal-website-images/products/Qu%E1%BA%A7n%20L%C3%B3t%20N%E1%BB%AF%20Tr%C6%A1n%20Kh%C3%B4ng%20%C4%90%C6%B0%E1%BB%9Dng%20May%201.webp'),
(10, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914642/product-portal-website-images/products/Qu%E1%BA%A7n%20L%C3%B3t%20N%E1%BB%AF%20Tr%C6%A1n%20Kh%C3%B4ng%20%C4%90%C6%B0%E1%BB%9Dng%20May%202.jpg'),
(11, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914646/product-portal-website-images/products/%C4%90%E1%BB%93%20B%C6%A1i%20Bikini%20N%E1%BB%AF%202%20M%E1%BA%A3nh%20C%E1%BB%95%20Y%E1%BA%BFm%20C%E1%BA%A1p%20Th%E1%BA%A5p%20Nylon%20Tr%C6%A1n%201.jpg'),
(11, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914650/product-portal-website-images/products/%C4%90%E1%BB%93%20B%C6%A1i%20Bikini%20N%E1%BB%AF%202%20M%E1%BA%A3nh%20C%E1%BB%95%20Y%E1%BA%BFm%20C%E1%BA%A1p%20Th%E1%BA%A5p%20Nylon%20Tr%C6%A1n%202.jpg'),
(11, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914652/product-portal-website-images/products/%C4%90%E1%BB%93%20B%C6%A1i%20Bikini%20N%E1%BB%AF%202%20M%E1%BA%A3nh%20C%E1%BB%95%20Y%E1%BA%BFm%20C%E1%BA%A1p%20Th%E1%BA%A5p%20Nylon%20Tr%C6%A1n%203.jpg'),
(12, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914656/product-portal-website-images/products/Ch%C3%A2n%20V%C3%A1y%20Ch%E1%BB%AF%20A%20N%E1%BB%AF%20Mini%20V%E1%BA%A3i%20Tweed%20Tr%C6%A1n%20Form%20A%20Line%201.jpg'),
(12, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914658/product-portal-website-images/products/Ch%C3%A2n%20V%C3%A1y%20Ch%E1%BB%AF%20A%20N%E1%BB%AF%20Mini%20V%E1%BA%A3i%20Tweed%20Tr%C6%A1n%20Form%20A%20Line%202.jpg'),
(13, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914660/product-portal-website-images/products/Suy%20Ngh%C4%A9%20C%E1%BB%A7a%20Ng%C6%B0%E1%BB%9Di%20Gi%C3%A0u%20-%20Steve%20Siebold%201.jpg'),
(13, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914662/product-portal-website-images/products/Suy%20Ngh%C4%A9%20C%E1%BB%A7a%20Ng%C6%B0%E1%BB%9Di%20Gi%C3%A0u%20-%20Steve%20Siebold%202.jpg'),
(14, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914665/product-portal-website-images/products/Think%20And%20Grow%20Rich%20-%20Ngh%C4%A9%20Gi%C3%A0u%20V%C3%A0%20L%C3%A0m%20Gi%C3%A0u%201.jpg'),
(14, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914669/product-portal-website-images/products/Think%20And%20Grow%20Rich%20-%20Ngh%C4%A9%20Gi%C3%A0u%20V%C3%A0%20L%C3%A0m%20Gi%C3%A0u%202.jpg'),
(15, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914673/product-portal-website-images/products/C%C3%A2y%20Cam%20Ng%E1%BB%8Dt%20C%E1%BB%A7a%20T%C3%B4i.jpg'),
(15, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914670/product-portal-website-images/products/C%C3%A2y%20Cam%20Ng%E1%BB%8Dt%20C%E1%BB%A7a%20T%C3%B4i%202.jpg'),
(16, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914678/product-portal-website-images/products/M%E1%BB%99t%20%C4%90%E1%BB%9Di%20%C4%90%C6%B0%E1%BB%A3c%20M%E1%BA%A5t%201.jpg'),
(17, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914682/product-portal-website-images/products/N%C3%B3i%20Chuy%E1%BB%87n%20L%C3%A0%20B%E1%BA%A3n%20N%C4%83ng%2C%20Gi%E1%BB%AF%20Mi%E1%BB%87ng%20L%C3%A0%20Tu%20D%C6%B0%E1%BB%A1ng%2C%20Im%20L%E1%BA%B7ng%20L%C3%A0%20Tr%C3%AD%20Tu%E1%BB%87%20%28T%C3%A1i%20B%E1%BA%A3n%29%201.jpg'),
(18, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914684/product-portal-website-images/products/Di%20%C4%90%E1%BB%99ng%20NOKIA%20105.jpg'),
(19, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914686/product-portal-website-images/products/Di%20%C4%90%E1%BB%99ng%20NOKIA%20110%204G%20Pro%20Xanh%201.png'),
(20, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914688/product-portal-website-images/products/M%C3%A1y%20H%C3%BAt%20B%E1%BB%A5i%20v%C3%A0%20Th%E1%BB%95i%20B%E1%BB%A5i%2012%20L%C3%ADt%20YILI%20YL6263A%201.jpg'),
(21, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914701/product-portal-website-images/products/M%C3%A1y%20ch%C3%A0%20s%C3%A0n%20Super%20Clean%20SC-002.jpg'),
(22, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914703/product-portal-website-images/products/T%E1%BB%A7%20l%E1%BA%A1nh%20Samsung%20Inverter%20488%20l%C3%ADt%20Multi%20Door%20RF48A4010B4%204.jpg'),
(22, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914707/product-portal-website-images/products/T%E1%BB%A7%20l%E1%BA%A1nh%20Samsung%20Inverter%20488%20l%C3%ADt%20Multi%20Door%20RF48A4010B4SV%201.png'),
(22, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914710/product-portal-website-images/products/T%E1%BB%A7%20l%E1%BA%A1nh%20Samsung%20Inverter%20488%20l%C3%ADt%20Multi%20Door%20RF48A4010B4SV%202.png'),
(22, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914712/product-portal-website-images/products/T%E1%BB%A7%20l%E1%BA%A1nh%20Samsung%20Inverter%20488%20l%C3%ADt%20Multi%20Door%20RF48A4010B4SV%203.png'),
(23, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914713/product-portal-website-images/products/T%E1%BB%A7%20l%E1%BA%A1nh%20Side%20by%20Side%20Bosch%20EUC.KAD93VBFP%201.jpg'),
(24, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914715/product-portal-website-images/products/M%C3%A1y%20gi%E1%BA%B7t%20c%E1%BB%ADa%20ngang%2010kg%20UltimateCare%20100%20-%20Tr%E1%BA%AFng%201.avif'),
(25, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914716/product-portal-website-images/products/M%C3%A1y%20gi%E1%BA%B7t%20s%E1%BA%A5y%208-5kg%20UltimateCare%20900%20-%20Tr%E1%BA%AFng%201.avif'),
(25, 'https://res.cloudinary.com/dixswfj8d/image/upload/v1712914717/product-portal-website-images/products/M%C3%A1y%20gi%E1%BA%B7t%20s%E1%BA%A5y%2085kg%20UltimateCare%20900%20-%20Tr%E1%BA%AFng%202.avif')
;
INSERT INTO url_product (product_id, url) VALUES
(1, 'https://fptshop.com.vn/tivi/smart-tivi-samsung-crystal-uhd-4k-55-inch-ua55au7002'),
(1, 'https://www.samsung.com/vn/tvs/uhd-4k-tv/bu8000-55-inch-crystal-uhd-4k-smart-tv-ua55bu8000kxxv/?utm_source=google&utm_medium=ppc&utm_campaign=lt-av-tv-awo-2022&utm_term=ua55bu8000kxxv&utm_content=none_cstm&cid=vn_pd_ppc_google_vd-multiple_always-on_lt-av-tv-xxbranddd-skusku-skupdp-semawo-broadd-ssua55bu8000-xx_text_promo_mass&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUqinapqlwMTDNbwIf3ckA265F4Elr5dhgp62bit3N-w7vkB-Qp1fRRoC4GQQAvD_BwE'),
(2, 'https://fptshop.com.vn/phu-kien/tai-nghe-choang-dau-co-mic-sony-mdr-zx110ap'),
(3, 'https://fptshop.com.vn/may-tinh-bang/ipad-pro-129-2022-m2-wifi?dung-luong=128gb'),
(3, 'https://fptshop.com.vn/may-tinh-bang/ipad-pro-11-2022-m2-wifi-5g?dung-luong=128gb'),
(4, 'https://cellphones.com.vn/iphone-14-pro-max.html'),
(5, 'https://cellphones.com.vn/apple-iphone-xs-max-64-gb-cu-99.html'),
(6, 'https://www.viettablet.com/zte-nubia-red-magic-6'),
(7, 'https://routine.vn/ao-polo-nam-premium-tay-ngan-phoi-co-form-fitted-10s24pol002p.html?utm_source=google&utm_medium=cpc&utm_campaign=&utm_content=&utm_keyword=&utm_matchtype=&campaign_id=20767326427&ad_group_id=&ad_id=&matchtype=&device=c&product_partition_id=&adposition=&loc_interest_ms=&loc_physical_ms=1028809&feeditemid=&gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUjpU3fwmbBaA94TV0KnMvTSLkmXdBEK8lAy9Lp0YkCO-9iYmnEsVrBoCREsQAvD_BwE'),
(8, 'https://example.com/product8'),
(9, 'https://example.com/product9'),
(10, 'https://example.com/product10'),
(11, 'https://example.com/product11'),
(12, 'https://example.com/product12'),
(13, 'https://example.com/product13'),
(14, 'https://example.com/product14'),
(15, 'https://example.com/product15'),
(16, 'https://example.com/product16'),
(17, 'https://example.com/product17'),
(18, 'https://example.com/product18'),
(19, 'https://example.com/product19'),
(20, 'https://example.com/product20'),
(21, 'https://example.com/product21'),
(22, 'https://example.com/product22'),
(23, 'https://example.com/product23'),
(24, 'https://example.com/product24'),
(25, 'https://example.com/product25')
;

INSERT INTO comment (id, reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
(1, 'Cái tivi này mà xem phim con heo thì đúng bài', 1, 9, null, now(), 9),
(2, 'Tai nghe này bắn pubg phê vãi chưởng', 2, 6, null, now(), 6),
(3, 'Sách này hay đấy đọc song cái t giàu lun', 13, 2, null, now(), 2),
(4, 'Aó polo của cái shop này khá là ok', 7, 6, null, now(), 6),
(5, 'Giá cả hợp lý, cạnh tranh.', 5, 5, NULL, NOW(), 5),
(6, 'Camera chụp ảnh đẹp, quay video sắc nét.', 6, 6, NULL, NOW(), 6),
(7, 'Hiệu năng mạnh mẽ, chơi game mượt mà.', 7, 7, NULL, NOW(), 7),
(8, 'Dung lượng pin trâu, sử dụng cả ngày không lo hết pin.', 8, 8, NULL, NOW(), 8),
(9, 'Màn hình hiển thị đẹp, màu sắc chân thực.', 9, 9, NULL, NOW(), 9),
(10, 'Chất lượng âm thanh tốt, nghe nhạc hay.', 10, 10, NULL, NOW(), 10),

(11, 'Đã mua 2 chiếc cho bố mẹ, ông bà đều rất thích.', 11, 1, NULL, NOW(), 11),
(12, 'Chất liệu vải mềm mại, thoáng mát.', 12, 2, NULL, NOW(), 12),
(13, 'Form dáng đẹp, tôn dáng người mặc.', 13, 3, NULL, NOW(), 13),
(14, 'Giá cả hợp lý so với chất lượng sản phẩm.', 14, 4, NULL, NOW(), 14),
(15, 'Giao hàng nhanh, đóng gói chắc chắn.', 15, 5, NULL, NOW(), 15),

(16, 'Sách hay, nội dung hữu ích,值得推荐.', 16, 6, NULL, NOW(), 16),
(17, 'Đọc xong cuốn sách này thay đổi hoàn toàn tư duy của mình.', 17, 7, NULL, NOW(), 17),
(18, 'Giao hàng nhanh, đóng gói đẹp.', 18, 8, NULL, NOW(), 18),
(19, 'Giá rẻ, phù hợp với học sinh, sinh viên.', 19, 9, NULL, NOW(), 19),
(20, 'Chất lượng tốt, bền bỉ.', 20, 10, NULL, NOW(), 20),

(21, 'Máy hoạt động êm ái, hút bụi hiệu quả.', 21, 1, NULL, NOW(), 21),
(22, 'Tiết kiệm điện, dễ sử dụng.', 22, 2, NULL, NOW(), 22),
(23, 'Dung tích lớn, đáp ứng nhu cầu sử dụng cho gia đình.', 23, 3, NULL, NOW(), 23),
(24, 'Thiết kế sang trọng, hiện đại.', 24, 4, NULL, NOW(), 24),
(25, 'Giặt sạch quần áo, không làm nhăn hay sờn vải.', 25, 5, NULL, NOW(), 25)
;

-- inserting replies to comments
-- Reply cho comment 1
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Đúng vậy, xem phim bom tấn với tivi này thì tuyệt vời.', 1, 1, 1, NOW(), 10);

-- Reply cho comment 2
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình cũng đang chơi PUBG với tai nghe này, rất ưng ý.', 2, 2, 2, NOW(), 11);

-- Reply cho comment 3
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình đồng ý, đọc sách hay giúp thay đổi tư duy và cuộc sống.', 13, 3, 3, NOW(), 12);

-- Reply cho comment 4
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình cũng đang mặc áo polo này, chất lượng tốt và form dáng đẹp.', 7, 4, 4, NOW(), 13);

-- Reply cho comment 5
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình mua sản phẩm này được 2 tháng rồi, vẫn rất hài lòng.', 5, 5, 5, NOW(), 14);

-- Reply cho comment 6
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình cũng thích camera của điện thoại này, chụp ảnh và quay video rất đẹp.', 6, 6, 6, NOW(), 15);

-- Reply cho comment 7
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình chơi game Liên Quân Mobile với điện thoại này, mượt mà không giật lag.', 7, 7, 7, NOW(), 16);

-- Reply cho comment 8
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình sử dụng điện thoại này cả ngày mà không lo hết pin.', 8, 8, 8, NOW(), 17);

-- Reply cho comment 9
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình xem phim trên điện thoại này rất thích, màn hình hiển thị đẹp và màu sắc chân thực.', 9, 9, 9, NOW(), 18);

-- Reply cho comment 10
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình nghe nhạc với tai nghe này rất hay, âm thanh sống động.', 10, 10, 10, NOW(), 19);

-- Reply cho comment 11
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình cũng mua 2 chiếc cho bố mẹ, họ rất thích món quà này.', 11, 5, 11, NOW(), 20);

-- Reply cho comment 12
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình mặc áo này đi chơi rất thoải mái, chất liệu vải mềm mại và thoáng mát.', 12, 3, 12, NOW(), 21);

-- Reply cho comment 13
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, created_by) VALUES
('Mình mua váy này để đi dự tiệc, form dáng đẹp và tôn dáng người mặc.', 13, 6, 13, NOW(), 22);


