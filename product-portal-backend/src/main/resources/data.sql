-- Inserting sample data into 'user'
INSERT INTO user (full_name, email, username, password, phone_number, avatar, role, created_at, updated_at) VALUES
('John Doe', 'john.doe@example.com', 'johndoe', MD5('password123'), '555-0100', 'avatars/johndoe.jpg', 'customer', NOW(), NOW()),
('Jane Smith', 'jane.smith@example.com', 'janesmith', MD5('password123'), '555-0101', 'avatars/janesmith.jpg', 'customer', NOW(), NOW()),
('Emma Jones', 'emma.jones@example.com', 'emmajones', MD5('password123'), '555-0102', 'avatars/emmajones.jpg', 'customer', NOW(), NOW()),
('Michael Brown', 'michael.brown@example.com', 'michaelbrown', MD5('password123'), '555-0103', 'avatars/michaelbrown.jpg', 'customer', NOW(), NOW()),
('Sophia Taylor', 'sophia.taylor@example.com', 'sophiataylor', MD5('password123'), '555-0104', 'avatars/sophiataylor.jpg', 'customer', NOW(), NOW()),
('James Wilson', 'james.wilson@example.com', 'jameswilson', MD5('password123'), '555-0105', 'avatars/jameswilson.jpg', 'customer', NOW(), NOW()),
('Olivia Martin', 'olivia.martin@example.com', 'oliviamartin', MD5('password123'), '555-0106', 'avatars/oliviamartin.jpg', 'customer', NOW(), NOW()),
('William Davis', 'william.davis@example.com', 'williamdavis', MD5('password123'), '555-0107', 'avatars/williamdavis.jpg', 'customer', NOW(), NOW()),
('Ava Garcia', 'ava.garcia@example.com', 'avagarcia', MD5('password123'), '555-0108', 'avatars/avagarcia.jpg', 'customer', NOW(), NOW()),
('Noah Miller', 'noah.miller@example.com', 'noahmiller', MD5('password123'), '555-0109', 'avatars/noahmiller.jpg', 'customer', NOW(), NOW());

-- Inserting sample data into 'category'
INSERT INTO category (name, image, parent_id, created_at, updated_at) VALUES
('Electronics', 'electronics.jpg', NULL, NOW(), NOW()),
('Fashion', 'fashion.jpg', NULL, NOW(), NOW()),
('Home Appliances', 'home_appliances.jpg', NULL, NOW(), NOW()),
('Books', 'books.jpg', NULL, NOW(), NOW()),
('Toys', 'toys.jpg', NULL, NOW(), NOW()),
('Sports', 'sports.jpg', NULL, NOW(), NOW()),
('Grocery', 'grocery.jpg', NULL, NOW(), NOW()),
('Health & Beauty', 'health_beauty.jpg', NULL, NOW(), NOW()),
('Gadgets', 'gadgets.jpg', NULL, NOW(), NOW()),
('Furniture', 'furniture.jpg', NULL, NOW(), NOW());

-- Inserting sample data into 'store'
INSERT INTO store (name, url_store, user_id, created_at, updated_at) VALUES
('Tech Gadgets Galore', 'http://techgadgets.example.com', 1, NOW(), NOW()),
('Everyday Fashion Finds', 'http://fashionfinds.example.com', 2, NOW(), NOW()),
('Home Sweet HomeGoods', 'http://homegoods.example.com', 3, NOW(), NOW()),
('Bookworm"s Paradise', 'http://bookworms.example.com', 4, NOW(), NOW()),
('Toy Universe', 'http://toyuniverse.example.com', 5, NOW(), NOW()),
('Athletic Life', 'http://athleticlife.example.com', 6, NOW(), NOW()),
('The Grocery Aisle', 'http://groceryaisle.example.com', 7, NOW(), NOW()),
('Beauty and Wellness', 'http://beautywellness.example.com', 8, NOW(), NOW()),
('Gadget Central', 'http://gadgetcentral.example.com', 9, NOW(), NOW()),
('Furniture Fantasy', 'http://furniturefantasy.example.com', 10, NOW(), NOW());


-- Continue with 'store', 'product', 'image', 'comment', and 'url_product' tables, ensuring to respect the foreign key constraints.
-- Inserting sample data into 'product'
INSERT INTO product (name, price, slug, category_id, store_id, created_at, updated_at) VALUES
('Smart LED TV 42"', 450.00, 'smart-led-tv-42', 1, 1, NOW(), NOW()),
('Wireless Bluetooth Headphones', 75.99, 'wireless-bluetooth-headphones', 1, 1, NOW(), NOW()),
('Coffee Maker 3000', 120.50, 'coffee-maker-3000', 3, 2, NOW(), NOW()),
('E-Reader ReadLight', 130.00, 'e-reader-readlight', 4, 3, NOW(), NOW()),
('Deluxe Yoga Mat', 45.00, 'deluxe-yoga-mat', 6, 4, NOW(), NOW()),
('Electric Stand Mixer', 350.00, 'electric-stand-mixer', 3, 5, NOW(), NOW()),
('Men’s Running Shoes', 85.00, 'mens-running-shoes', 2, 6, NOW(), NOW()),
('Smartphone Supreme Pro', 999.99, 'smartphone-supreme-pro', 1, 7, NOW(), NOW()),
('Leather Office Chair', 199.99, 'leather-office-chair', 10, 8, NOW(), NOW()),
('Gaming Console Pro', 299.99, 'gaming-console-pro', 1, 9, NOW(), NOW()),
('Compact Digital Camera', 299.99, 'compact-digital-camera', 1, 1, NOW(), NOW()),
('Bluetooth Speaker High Bass', 150.00, 'bluetooth-speaker-high-bass', 1, 2, NOW(), NOW()),
('Organic Green Tea 100 Bags', 15.99, 'organic-green-tea', 7, 2, NOW(), NOW()),
('Classic Wooden Desk', 249.99, 'classic-wooden-desk', 10, 1, NOW(), NOW()),
('Professional Hair Dryer', 129.99, 'professional-hair-dryer', 8, 2, NOW(), NOW()),
('Advanced Drone with Camera', 759.99, 'advanced-drone-camera', 1, 1, NOW(), NOW()),
('All-Seasons Down Jacket', 95.00, 'all-seasons-down-jacket', 2, 2, NOW(), NOW()),
('Multi-Tool Pocket Knife', 29.99, 'multi-tool-pocket-knife', 6, 2, NOW(), NOW()),
('Android Smartwatch LX3', 199.99, 'android-smartwatch-lx3', 1, 1, NOW(), NOW()),
('Portable External SSD 1TB', 109.99, 'portable-external-ssd-1tb', 1, 2, NOW(), NOW());

-- Inserting sample data into 'comment'
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, updated_at) VALUES
('This is the best purchase I have ever made!', 1, 2, NULL, NOW(), NOW()),
('Highly recommended for anyone needing quality sound on the go!', 2, 3, NULL, NOW(), NOW()),
('A must-have for any serious photographer, amazing quality.', 11, 4, NULL, NOW(), NOW()),
('The battery life on this drone is incredible. Worth every penny.', 14, 5, NULL, NOW(), NOW()),
('Very comfortable and the material is top-notch.', 7, 6, NULL, NOW(), NOW()),
('I gifted this to my nephew and he loves it. Sturdy and fun!', 15, 7, NULL, NOW(), NOW()),
('Excellent for my morning runs, does not slip at all.', 8, 8, NULL, NOW(), NOW()),
('I’ve been using this SSD for a month, and the speeds are unmatched.', 20, 9, NULL, NOW(), NOW()),
('This smartwatch has all the features I need and the battery lasts!', 19, 10, NULL, NOW(), NOW()),
('Finally a pair of headphones that don"t hurt my ears!', 2, 1, NULL, NOW(), NOW());

-- Inserting replies to comments
INSERT INTO comment (reply, product_id, user_id, parent_comment_id, created_at, updated_at) VALUES
('Totally agree! I have one and it changed the way I enjoy movies.', 1, 3, 1, NOW(), NOW()),
('Yes! I’ve been using it for weeks and the sound is still as crisp as day one.', 2, 4, 2, NOW(), NOW()),
('I’m glad you liked it! It’s been my go-to camera for travel.', 11, 5, 3, NOW(), NOW()),
('Does it work well in low light conditions?', 11, 6, 3, NOW(), NOW()),
('Bought these on sale and they’re great for the price.', 7, 2, 5, NOW(), NOW()),
('Has anyone tried using this with a phone camera?', 14, 7, 4, NOW(), NOW()),
('I’m thinking of getting one for my morning yoga sessions. Is it slip-resistant?', 8, 8, 7, NOW(), NOW()),
('Can it handle heavy file transfers like video editing?', 20, 9, 8, NOW(), NOW()),
('How is the interface? Is it user-friendly for non-techies?', 19, 10, 9, NOW(), NOW()),
('Do they come with a case?', 2, 1, 10, NOW(), NOW());


-- Inserting sample data into 'image'
INSERT INTO image (url, product_id, store_id, created_by, updated_by) VALUES
('/images/products/led_tv.jpg', 1, 1, 1, 1),
('/images/products/headphones.jpg', 2, 1, 1, 1),
('/images/products/coffee_maker.jpg', 3, 2, 2, 2),
('/images/products/e_reader.jpg', 4, 3, 3, 3),
('/images/products/yoga_mat.jpg', 5, 4, 4, 4),
('/images/products/mixer.jpg', 6, 5, 5, 5),
('/images/products/shoes.jpg', 7, 6, 6, 6),
('/images/products/smartphone.jpg', 8, 7, 7, 7),
('/images/products/chair.jpg', 9, 8, 8, 8),
('/images/products/console.jpg', 10, 9, 9, 9);

-- Inserting sample data into 'url_product'
INSERT INTO url_product (url, product_id) VALUES
('http://www.electronics.example.com/led_tv', 1),
('http://www.audiophile.example.com/headphones', 2),
('http://www.homeappliances.example.com/coffee_maker', 3),
('http://www.bookstore.example.com/e_reader', 4),
('http://www.sportsstore.example.com/yoga_mat', 5),
('http://www.kitchenwares.example.com/mixer', 6),
('http://www.fashionstore.example.com/shoes', 7),
('http://www.techstore.example.com/smartphone', 8),
('http://www.furniturehouse.example.com/chair', 9),
('http://www.gaminghub.example.com/console', 10);


