package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.DoubleStream;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select u from User u where u.userId = :userId")
    User findByUserId(@Param("userId") String userId);

//    Optional<org.springframework.security.core.userdetails.User> findByUserName(String username);

    @Modifying
    @Transactional
    @Query("delete from User u where u.userId = :userId")
    void deleteByUserId(@Param("userId") String userId);

    DoubleStream findByUserName(String username);
}
