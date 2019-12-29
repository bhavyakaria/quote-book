import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  file: any;
  listOfBooks = new Set();
  list = [];

  constructor(private data: DataService) { }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.processData(fileReader.result);
    }
    fileReader.readAsText(this.file);
  }

  processData(data) {
    let obj;
    let quote = false;
    // By lines
    var lines = (<string>data).split('\n');
    for (var line = 0; line < lines.length; line++) {
      let sam = lines[line];
      let len = lines[line].length;
      if (line === 0 || lines[line - 1].match(/^==========/)) {
        obj = new Object();
      }

      if (line === 0 || lines[line - 1].match(/^==========/)) {
        let x = lines[line].match(/^([^(]*)/);
        this.listOfBooks.add(x[0]);
        obj['book_name'] = x[0];
      }

      if (lines[line].length === 1) {
        quote = true;
        continue;
      }

      if (lines[line].match(/^==========/)) {
        quote = false;
        this.list.push(obj);
      }

      if (quote) {
        if (obj['quote']) {
          obj['quote'] = obj['quote'].concat(lines[line]);
        } else {
          obj['quote'] = lines[line];
        }
      }
    }
    // console.log(this.listOfBooks);
    this.data.bookList(this.listOfBooks);
    this.data.setbookData(this.list);

  }

  ngOnInit() {
  }

}
