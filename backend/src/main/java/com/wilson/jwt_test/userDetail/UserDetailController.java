package com.wilson.jwt_test.userDetail;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-details")
public class UserDetailController {
    private final UserDetailService userDetailService;

    public UserDetailController(UserDetailService userDetailService) {
        this.userDetailService = userDetailService;
    }

    // Endpoint to create a new UserDetail
    @PostMapping
    public UserDetail createUserDetail(@RequestBody String detail) {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetailService.createUserDetail(username, detail);
    }

    // Endpoint to get UserDetails for the authenticated user
    @GetMapping
    public List<UserDetail> getUserDetails() {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetailService.getUserDetails(username);
    }
}
