import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndextapsComponent} from './component/indextaps/indextaps.component';
import {BookdetailsComponent} from './component/bookdetails/bookdetails.component';
import {ReplyComponent} from './component/reply/reply.component';
import {CommentComponent} from './component/comment/comment.component';


const routes: Routes = [
  {
    path: 'index', component: IndextapsComponent
  },
  {
    path: 'bookdetails', component: BookdetailsComponent,
    children: [{
      path: 'reply', component: ReplyComponent
    },
      {
        path: 'comment', component: CommentComponent
      },
      {
        path: '**', redirectTo: 'comment'
      }]
  },
  {
    path: '', component: IndextapsComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
