package com.excelr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.Task;
import com.excelr.exception.IdNotFoundException;
import com.excelr.repository.TaskRepository;
import com.excelr.utility.AppConstant;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	TaskRepository taskRepository;
	
	
	@Override
	public Task addTask(Task product) {
		
		
		
	    Task task2=taskRepository.save(product);
		return task2;
	}

	
	@Override
	public List<Task> getAllTasks() {
		 
		return taskRepository.findAll();
	}
	
	

	@Override
	public Task getTaskById(int id) {
	   Optional<Task> optionalTask =  taskRepository.findById(id);
	  Task task=null;
	  
	  if(optionalTask.isPresent())
	   {
		  task= optionalTask.get();
	   }
	  else
	  {
		  throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
	  }
		
		return task;
	}

	
	
	@Override
	public String deleteTask(int id) {
		String msg="";
		   if(taskRepository.existsById(id))
		   {
			   taskRepository.deleteById(id);
			   msg="task deleted";
		   }
		   else
		   {
			   throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
		   }
		
		return msg;
	}

	
	
	@Override
	public String updateTask(int id, Task task) {
		String msg="";
		   if(taskRepository.existsById(id))
		   {
			    Task task2 = taskRepository.findById(id).get();
			    task2.setTask(task.getTask());
			    
			    
			    taskRepository.save(task2);
			    msg="task successfully updated";
			    
		   }
		   else
		   {
			   throw new IdNotFoundException(AppConstant.ID_NOT_FOUND_MESSAGE);
		   }
		return msg;
	}

	

}
