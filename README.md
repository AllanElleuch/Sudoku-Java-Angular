# Sudoku-Java-Angular

This project is a Sudoku game, I created it to show my coding skills. It use a microservice backend coded with Spring Boot in java. The front end is created with Angular in JavasSript. 

## front end

### Functionnality 
- Input verification, only number from 1 to 9 are accepted
- Feedback for bad input, when the backend confirm a bad input the cell is red

![front end screenshot](https://github.com/AllanElleuch/Sudoku-Java-Angular/blob/master/img/front-end.JPG "Logo Title Text 1")

### Cell index explained

Index are counted from left to right and from top to bottom.

![front end screenshot](https://github.com/AllanElleuch/Sudoku-Java-Angular/blob/master/img/front-end-index.JPG "Logo Title Text 1")


## back end


Route : 
- Post /move | Return true or false if the input is valid. Take a json as a parameter that contain three value.
  - val: the value of the new input
  - index: the cell index where the user want to add a number
  - sudokuTable: an Array of 81 number that represent the sudoku table, if a cell is empty the value is 0
  
![back end screenshot](https://github.com/AllanElleuch/Sudoku-Java-Angular/blob/master/img/back-end-output.JPG "Logo Title Text 1")
