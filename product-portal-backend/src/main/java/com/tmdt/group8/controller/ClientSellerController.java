package com.tmdt.group8.controller;

import com.tmdt.group8.dto.ApiResponse;
import com.tmdt.group8.dto.user.SellerRegisterRequest;
import com.tmdt.group8.entity.Image;
import com.tmdt.group8.entity.RoleType;
import com.tmdt.group8.entity.Store;
import com.tmdt.group8.entity.User;
import com.tmdt.group8.repository.ImageRepo;
import com.tmdt.group8.repository.StoreRepo;
import com.tmdt.group8.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api/sellers")
@RestController
public class ClientSellerController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private StoreRepo storeRepo;
    @Autowired
    private ImageRepo imageRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> sellerRegister(@RequestBody SellerRegisterRequest registerRequest) {
        try {
            User user = new User();
            user.setFullName(registerRequest.getFullName());
            user.setEmail(registerRequest.getEmail());
            user.setPhoneNumber(registerRequest.getPhoneNumber());
            user.setEnabled(false);
            user.setAvatar(registerRequest.getAvatar());
            user.setRole(RoleType.SELLER);
            user.setPassword(passwordEncoder.encode("1234"));
            user.setUsername(registerRequest.getEmail());

            User savedUser = userRepo.save(user);

            Store store = new Store();
            store.setUrlStore(registerRequest.getUrlStore());
            store.setName(registerRequest.getStoreName());
            store.setUser(savedUser);

            Store savedStore = storeRepo.save(store);

            List<Image> images = registerRequest.getStoreImages().stream().map(imageUrl -> {
                Image image = new Image();
                image.setStore(savedStore);
                image.setUrl(imageUrl);
                return image;
            }).collect(Collectors.toList());

            imageRepo.saveAll(images);

            return ResponseEntity.ok(ApiResponse.builder().statusCode(200).message("Đăng ký thành công").build());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
