package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

	
}
