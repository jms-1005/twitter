import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isLiked = false;

  like(){
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
