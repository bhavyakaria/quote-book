import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  file: any;
  listOfBooks = new Set();
  list = [];

  bookList = [];

  constructor(private data: DataService, 
    private router: Router) { }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.processData(fileReader.result);
    }
    fileReader.readAsText(this.file);
  }

  processData(data) {
    let obj;
    let quote = false;
    // By lines
    const lines = (data as string).split('\n');
    for (let line = 0; line < lines.length; line++) {
      if (line === 0 || lines[line - 1].match(/^==========/)) {
        obj = new Object();
      }

      if (line === 0 || lines[line - 1].match(/^==========/)) {
        let x = lines[line].match(/^([^(]*)/);
        this.listOfBooks.add(x[0]);
        obj.book_name = x[0];
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
        if (obj.quote) {
          obj.quote = obj.quote.concat(lines[line]);
        } else {
          obj.quote = lines[line];
        }
      }
    }

    for (let book of this.listOfBooks) {
      const bookObj = {
        title: book.toString().trim(),
        notes: []
      };
      this.list.forEach(obj => {
        if (obj['book_name'].trim() === bookObj['title'])
        bookObj['notes'].push(obj['quote']);
      });
      if (bookObj['title']) {
        this.bookList.push(bookObj);
      }
    }
    // store processed data and navigate to dashboard
    this.data.setbookData(this.bookList);
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
