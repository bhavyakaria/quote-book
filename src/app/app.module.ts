import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { QuoteBoardComponent } from './quote-board/quote-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderComponent,
    QuoteBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
