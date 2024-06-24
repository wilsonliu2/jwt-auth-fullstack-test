package com.wilson.jwt_test.userDetail;

import com.wilson.jwt_test.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDetailRepository extends JpaRepository<UserDetail, Long> {
    List<UserDetail> findByUser(User user);
}
