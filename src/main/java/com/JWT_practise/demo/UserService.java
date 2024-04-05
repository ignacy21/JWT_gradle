package com.JWT_practise.demo;

import com.JWT_practise.config.JwtService;
import com.JWT_practise.user.User;
import com.JWT_practise.user.UserRepository;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final JwtService jwtService;
    private final UserRepository userRepository;


    public User userData(String token) {
        Claims claims = jwtService.extractAllClaims(token);
        String email = claims.getSubject();
        return userRepository.findByEmail(email).orElseThrow();
    }
}
