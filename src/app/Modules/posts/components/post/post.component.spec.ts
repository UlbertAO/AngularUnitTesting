// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component";
import { first } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";

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


// describe("Post Component",()=>{
//   it("should raise an event when delete post is clicked",()=>{
//     const component=new PostComponent();
//     const POST:Post={id:1,body:'body 1',title:'title 1'}

//     component.post=POST;
//     component.delete.pipe(first()).subscribe(selectedPost=>{
//       expect(selectedPost).toBe(POST);
//     })
//     component.onDeletePost(new MouseEvent('click'))
//   });
// });


describe("Post component",()=>{
  let fixture: ComponentFixture<PostComponent>
  let component:PostComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[PostComponent],
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

  })
  it("should create post component using testBed",()=>{
    expect(component).toBeDefined();
  });
    it("should raise an event when delete post is clicked",()=>{
      const POST:Post={id:1,body:'body 1',title:'title 1'}

      component.post=POST;
      component.delete.pipe(first()).subscribe(selectedPost=>{
        expect(selectedPost).toBe(POST);
      })
      component.onDeletePost(new MouseEvent('click'))
  });
});