import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  //JSON is data from the server
  tweets:Tweet[] = [
    {
      profilepic: 'assets/profilepics/profile1.jpeg',
      username: "user1",
      twitterhandle: "@user1",
      feed: "how did Will Smith slapping Chris Rock turn into a political think piece within 24 hrs",
      comments: 100,
      retweets: 10,
      likes: 300
    },
    {
      profilepic: 'assets/profilepics/profile1.jpeg',
      username: "user1",
      twitterhandle: "@user1",
      feed: "This is my first tweet",
      comments: 100,
      retweets: 10,
      likes:2300
    },
    {
      profilepic: 'assets/profilepics/profile1.jpeg',
      username: "user1",
      twitterhandle: "@user1",
      feed: "This is my first tweet",
      comments: 100,
      retweets: 10,
      likes: 10
    },
    {
      profilepic: 'assets/profilepics/profile1.jpeg',
      username: "user1",
      twitterhandle: "@user1",
      feed: "This is my first tweet",
      comments: 100,
      retweets: 10,
      likes: 456
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
