package com.JWT_practise.demo;

import com.JWT_practise.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
@RequiredArgsConstructor
public class DemoController {

    private final UserService userService;

    @GetMapping(value = "/get1")
    public ResponseEntity<String> sayHello(
            @RequestHeader("Authorization") String authorizationHeader
    ) {
        User user = userService.userData(authorizationHeader.substring("Bearer ".length()));
        return ResponseEntity.ok("Hello from secured endpoint \n" + authorizationHeader + "\n" + user);
    }

}
