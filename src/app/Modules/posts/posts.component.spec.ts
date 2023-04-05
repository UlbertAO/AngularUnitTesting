// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostService } from "src/app/Services/Post/post.service";
import { Post } from "src/app/models/Post"
import { PostsComponent } from "./posts.component";
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";

// import { PostsComponent } from './posts.component';

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PostsComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// describe("Posts Component",()=>{
//   let POSTS:Post[];
//   let mockPostsService:any;
//   let component:PostsComponent;
//   beforeEach(()=>{
//     POSTS=[
//       {id:1,body:'body 1',title:'title 1'},
//       {id:2,body:'body 2',title:'title 2'},
//       {id:3,body:'body 3',title:'title 3'}
//     ];
//     mockPostsService=jasmine.createSpyObj(['getPosts','deletePost']);
//     component=new PostsComponent(mockPostsService);
//   });

//   describe("Delete",()=>{
//     beforeEach(()=>{
//       mockPostsService.deletePost.and.returnValue(of(true))
//       component.posts=POSTS;
//       component.delete(POSTS[1]);
//     });
//     it("should delete specific post from the posts",()=>{
//       // expect(component.posts.length).toBe(2);
//       component.posts.forEach(x=>{
//         expect(x).not.toBe(POSTS[1])
//       })
//     });
//     it("should call the deletePost method in post service only once",()=>{
//       expect(mockPostsService.deletePost).toHaveBeenCalledTimes(1);
//     });
//   });
// })



// isolated UT with testbed 

// describe("Posts Component",()=>{
//   let POSTS:Post[];
//   let mockPostsService:any;
//   let component:PostsComponent;
//   beforeEach(()=>{
//     POSTS=[
//       {id:1,body:'body 1',title:'title 1'},
//       {id:2,body:'body 2',title:'title 2'},
//       {id:3,body:'body 3',title:'title 3'}
//     ];

//     mockPostsService=jasmine.createSpyObj(['getPosts','deletePost']);

//     TestBed.configureTestingModule({
//       providers:[
//         PostsComponent,
//         {provide:PostService,useValue:mockPostsService}
//       ]
//     });
//     component=TestBed.inject(PostsComponent);
//   });

//   describe("Delete",()=>{
//     beforeEach(()=>{
//       mockPostsService.deletePost.and.returnValue(of(true))
//       component.posts=POSTS;
//       component.delete(POSTS[1]);

//     });
//     it("should delete specific post from the posts",()=>{
//       // expect(component.posts.length).toBe(2);
//       component.posts.forEach(x=>{
//         expect(x).not.toBe(POSTS[1])
//       })
//     });
//     it("should call the deletePost method in post service only once",()=>{
//       expect(mockPostsService.deletePost).toHaveBeenCalledTimes(1);
//     });
//   });
// });




class mockPostsService{
  getPosts(){

  }
  deletePost(post:Post){
    return of(true)
  }
}
describe("Posts Component",()=>{
  let POSTS:Post[];
  let postsService:any;
  let component:PostsComponent;
  beforeEach(()=>{
    POSTS=[
      {id:1,body:'body 1',title:'title 1'},
      {id:2,body:'body 2',title:'title 2'},
      {id:3,body:'body 3',title:'title 3'}
    ];

    TestBed.configureTestingModule({
      providers:[
        PostsComponent,
        {provide:PostService,useClass:mockPostsService}

      ]
    });
    component=TestBed.inject(PostsComponent);
    postsService=TestBed.inject(PostService);
  });

  describe("Delete",()=>{
    beforeEach(()=>{
      component.posts=POSTS;
    });
    it("should delete specific post from the posts",()=>{
      component.delete(POSTS[1]);
      // expect(component.posts.length).toBe(2);
      component.posts.forEach(x=>{
        expect(x).not.toBe(POSTS[1])
      })
    });
    it("should call the deletePost method in post service only once",()=>{
      // spyOn(postsService,'deletePost').and.returnValue(of(true));
      spyOn(postsService,'deletePost').and.callThrough();

      component.delete(POSTS[1]);
      // expect(component.posts.length).toBe(2);

      expect(postsService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
})