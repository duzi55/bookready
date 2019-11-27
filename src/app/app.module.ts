import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { EditorComponent } from './editor/editor.component';
import { CarouselComponent } from './compoent/carousel/carousel.component';
import { IndextapsComponent } from './compoent/indextaps/indextaps.component';
import { FooterComponent } from './nav/footer/footer.component';
import { BookdetailsComponent } from './compoent/bookdetails/bookdetails.component';
import { CommentComponent } from './compoent/comment/comment.component';

// import * as $ from '@types/jquery/dist/jquery.slim';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorComponent,
    CarouselComponent,
    IndextapsComponent,
    FooterComponent,
    BookdetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
