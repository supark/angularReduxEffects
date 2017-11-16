package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@SpringBootApplication
public class YoutubeAn41Application implements CommandLineRunner{
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(YoutubeAn41Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
	}
}
