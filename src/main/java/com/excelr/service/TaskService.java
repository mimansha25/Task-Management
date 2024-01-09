package com.excelr.service;

import java.util.List;

import com.excelr.entity.Task;

public interface TaskService {
	
	Task addTask(Task task);
	List<Task> getAllTasks();
	Task getTaskById(int id);
	String deleteTask(int id);
	String updateTask(int id, Task task);

}
