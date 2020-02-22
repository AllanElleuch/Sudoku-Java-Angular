import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

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
        let rowIndex = Math.floor(cellIndex / 9);
        let cellIndexInRow = cellIndex - rowIndex * 9;
        console.log(`current input on : 
        - cellIndex : ${cellIndex}
        - rowIndex : ${rowIndex}
        - cellIndexInRow : ${cellIndexInRow}
        - currentValue : ${cell.innerText}`);

        // todo send ajax call to back end
        let resultForInputFromBackend = false;

        if (!resultForInputFromBackend) {
          $(cell).addClass("incorrect-input");
        } else {
          $(cell).removeClass("incorrect-input");
        }
      }); // td keyup
    });
  }
}
