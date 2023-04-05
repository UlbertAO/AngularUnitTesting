// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component";
import { first } from "rxjs";

// import { PostComponent } from './post.component';

// describe('PostComponent', () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PostComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe("Post Component",()=>{
  it("should raise an event when delete post is clicked",()=>{
    const component=new PostComponent();
    const POST:Post={id:1,body:'body 1',title:'title 1'}

    component.post=POST;
    component.delete.pipe(first()).subscribe(selectedPost=>{
      expect(selectedPost).toBe(POST);
    })
    component.onDeletePost(new MouseEvent('click'))
  });
});