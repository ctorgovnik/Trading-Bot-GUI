package com.example.tradegui.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.Map;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApiController {

    private static final String FLASK_SERVICE_URL = "http://localhost:5000/set-trading-mode";

    @GetMapping("/api/greeting")
    public Map<String, String> greeting() {
        return Collections.singletonMap("message", "Trade GUI");
    }

    @PostMapping("/api/set-trading-mode")
    public ResponseEntity<?> setTradingMode(@RequestBody Map<String, String> mode) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(FLASK_SERVICE_URL, mode, String.class);
        return ResponseEntity.ok(response.getBody());
    }
}


