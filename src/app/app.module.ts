import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { EditorComponent } from './editor/editor.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { IndextapsComponent } from './component/indextaps/indextaps.component';
import { FooterComponent } from './nav/footer/footer.component';
import { BookdetailsComponent } from './component/bookdetails/bookdetails.component';
import { CommentComponent } from './component/comment/comment.component';
import { ReplyComponent } from './component/reply/reply.component';

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
    CommentComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
