package io.aadeesh.controller;

import io.aadeesh.model.User;
import io.aadeesh.repo.UserRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private final UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		 System.out.println("do something");
		 userRepository.save(user);
	}

	@GetMapping(value = "/users/{id}")
	public Optional<User> getUser(@PathVariable("id") String id) {
		return userRepository.findById(Long.parseLong(id));
	}

	@GetMapping(value = "/users/delete/{id}")
	void deleteUser(@PathVariable("id") String id) {
		userRepository.deleteById(Long.parseLong(id));
	}
}