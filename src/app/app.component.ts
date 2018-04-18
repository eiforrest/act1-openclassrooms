import { Component, OnInit, Input } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Post]
})
export class AppComponent implements OnInit {
  post1:Post = new Post();
  post2:Post = new Post();
  post3:Post = new Post();
  posts: any[];

  ngOnInit() {
    this.post1.setTitle('Mon premier post');
    this.post1.setContent('Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1');
    this.post2.setTitle('Mon deuxième post');
    this.post2.setContent('Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2');
    this.post3.setTitle('Encore un post');
    this.post3.setContent('Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3');
    this.posts = [this.post1, this.post2, this.post3  ];
  }
  constructor(private post:Post) { 
  }
  
  
}
