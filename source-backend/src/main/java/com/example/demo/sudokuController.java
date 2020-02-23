package com.example.demo;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.howtodoinjava.demo.model.Employee;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
@CrossOrigin(origins = "*")
//@EnableAutoConfiguration
@RestController
public class sudokuController  {

	@RequestMapping("/")
	public String index() {
		System.out.println("Handling path : /");
		return "Greetings from Spring Boot!";
	}
	
	@RequestMapping(value = "/move", method = RequestMethod.POST, headers = "Accept=application/json")
	  public boolean move(@RequestBody Map<String, ?>  payload) throws Exception {

		  Integer index = (Integer) payload.get("index");
		  Integer val =(Integer) payload.get("val");
		  ArrayList<Integer> sudokuTable = (ArrayList<Integer>) payload.get("sudokuTable");
		  System.out.println("index : " + index);
		  System.out.println("val : " + val);
		  System.out.println("table : " + sudokuTable);
		  
		  
		  
		return isInputAccepted(index, val, sudokuTable);
		}
	

	 public boolean isInputAccepted(int index, int val, ArrayList<Integer> sudokuTable) {

	        int xIndex = (int) Math.floor(index / 9); //y
	        int yIndex = index - xIndex * 9; //x
	        System.out.println("x index : " +xIndex);
	        System.out.println("y index : " +yIndex);
	        System.out.println("3 :" + sudokuTable.get(3));
	        // Is 'x' used in row.
	        for (int i = 0+(xIndex*9); i < 9+(xIndex*9); i++) {
					int valCell = sudokuTable.get(i).intValue();
					if (valCell == val && valCell!=0 ) {
						System.err.println("Input not accepted. valCell = "+valCell + " i : " +i);
		                return false;
	            }
	        }
			System.out.println("Input accepted");
	        return true;
	    }
	
	
	  

}