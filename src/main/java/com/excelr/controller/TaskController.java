package com.excelr.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.entity.Task;
import com.excelr.exception.IdNotFoundException;
import com.excelr.service.TaskService;

@CrossOrigin
@RestController

@RequestMapping("/api/v1")
public class TaskController {

	@Autowired
	TaskService taskService;
	
	@PostMapping("/tasks")
	public ResponseEntity<Task> addTask(@RequestBody Task task)
	{
		return new ResponseEntity<Task>(taskService.addTask(task), HttpStatus.OK);
		
	}
	
	@GetMapping("/tasks")
	public ResponseEntity<List<Task>> getAllTasks()
	{
		return new ResponseEntity<List<Task>>(taskService.getAllTasks(), HttpStatus.OK);
	}
	
	
	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable int id)
	{
		return new ResponseEntity<Task>(taskService.getTaskById(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable int id)
	{
		return new ResponseEntity<String>(taskService.deleteTask(id), HttpStatus.OK);
	}
	 
	@PutMapping("/tasks/{id}")
	public ResponseEntity<String> updateTask(@PathVariable int id, @RequestBody Task task)
	{
		return new ResponseEntity<String>(taskService.updateTask(id, task), HttpStatus.OK);
	}
	
	
	
	
}
