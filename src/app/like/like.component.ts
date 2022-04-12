import { Component, Input, OnInit } from '@angular/core';

// <like totalLikes="" helloThere="" ></like>
@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isLiked = false;
  //Adding an input decorator, converts the prpoerty to the component html attribute
  @Input("totalLikes") totalLikes:any = 0;
  helloThere:any = "hi";

  like(){
    if(this.isLiked)
      this.totalLikes--;
    else
      this.totalLikes++;
    this.isLiked = !this.isLiked;
    // If this.isLiked is true, then set this.isLiked to false
    // if(this.isLiked)
    //   this.isLiked = false;
    // else
    //   this.isLiked = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
