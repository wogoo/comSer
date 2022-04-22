package com.wogoo.Product.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;


@RestController
@RequestMapping("/api/status")
public class StatusController {
    @GetMapping()
    public ResponseEntity<HashMap<String, Object>> getApiStatus() {
        var response = new HashMap<String, Object>();
        response.put("service", "Product");
        response.put("status", "OK");
        response.put("httpStatus", HttpStatus.OK.value());
        return ResponseEntity.ok(response);
    }
}
