import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from 'src/app/Services/Post/post.service';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [{path:'', component:PostsComponent}]

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [PostService],

})
export class PostsModule { }
