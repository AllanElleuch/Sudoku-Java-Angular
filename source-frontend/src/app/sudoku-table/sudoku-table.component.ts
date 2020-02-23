import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
// import * as axios from "axios";
// const axios = require("axios").default;
import axios from "axios";

@Component({
  selector: "app-sudoku-table",
  templateUrl: "./sudoku-table.component.html",
  styleUrls: ["./sudoku-table.component.css"]
})
export class SudokuTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function() {
      // Add event listenner on cell input, cell input will be send to the java backend for confirmation of input
      $("td").keyup(function(event) {
        let cell = event.currentTarget;
        let cellIndex = cell.getAttribute("cell-index");
        cellIndex = parseInt(cellIndex, 10);
        let rowIndex = Math.floor(cellIndex / 9); //y
        let cellIndexInRow = cellIndex - rowIndex * 9; //x
        let currentValue = cell.innerText; //x
        console.log(`current input on : 
        - cellIndex : ${cellIndex}
        - rowIndex : ${rowIndex} 
        - cellIndexInRow : ${cellIndexInRow}
        - currentValue : ${currentValue}`);

        //sudoku table representation
        var listTD = $("td");
        var sudokuTable = new Array(81);
        $.each(listTD, function(index, cell) {
          let cellIndexListTD = cell.getAttribute("cell-index");
          let cellVal = cell.innerText;
          if (cellVal == "" || cellIndexListTD == cellIndex) {
            cellVal = 0;
          } else {
            cellVal = parseInt(cellVal);
          }
          sudokuTable[cellIndexListTD] = cellVal;
        });

        var jsonToSend = {
          val: parseInt(currentValue),
          index: cellIndex,
          sudokuTable: sudokuTable
        };

        console.log("jsonToSend");
        console.log(jsonToSend);
        axios
          .post("http://localhost:8080/demo/move", jsonToSend)
          .then(response => {
            console.log(response);
            if (response.data == true) {
              console.log("input accepted");
              $(cell).removeClass("incorrect-input");
            } else {
              console.log("input not accepted");
              $(cell).addClass("incorrect-input");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }); // td keyup
    });
  }
}
