package com.wilson.jwt_test.userDetail;

import com.wilson.jwt_test.user.User;
import com.wilson.jwt_test.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailService {
    private final UserDetailRepository userDetailRepository;
    private final UserRepository userRepository;

    public UserDetailService(UserDetailRepository userDetailRepository, UserRepository userRepository) {
        this.userDetailRepository = userDetailRepository;
        this.userRepository = userRepository;
    }

    // Method to create a new UserDetail
    public UserDetail createUserDetail(String username, String detail) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Create a new UserDetail and set its properties
        UserDetail userDetail = new UserDetail();
        userDetail.setUser(user);
        userDetail.setDetail(detail);

        // Save the UserDetail to the repository and return it
        return userDetailRepository.save(userDetail);
    }

    // Method to get UserDetails for a specific user
    public List<UserDetail> getUserDetails(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Find and return the list of UserDetail entries for the user
        return userDetailRepository.findByUser(user);
    }
}
