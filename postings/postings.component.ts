import { Component, OnInit } from '@angular/core';
import { PostingService } from '../posting.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrl: './postings.component.css'
})
export class PostingsComponent implements OnInit {


  data:any;
  constructor (private postingService: PostingService) {

  }

  ngOnInit(): void {
    this.getPost();
 
  }

  getPost() {
    this.postingService.getPost().subscribe(res => {
      this.data = res;
      console.log(this.data)
    })
  }

  createPost() {
    const newPost = {
      title: 'new post',
      body: 'new post text',
      id: 1
    }
    
    this.postingService.createPost(newPost).subscribe(res => {
      console.log("new post " , res)
    }, err => {
      console.error("error creating post");
      
    })


  }

  updatePost (postId: number) {

    const updated = {
      title: 'updated old post',
      body: 'news added'
    };
    this.postingService.updatePost(postId, updated).subscribe(res => {
      console.log("updated post ", res)
    }, err =>{
      console.error("error updating post");
      
    })
  }

  delPost(postId: number ) {
    this.postingService.delPost(postId).subscribe(res => {
      console.log("deleted post ", res)
    }, err =>{
      console.error("error deleting post");
      
    })
  }
}
