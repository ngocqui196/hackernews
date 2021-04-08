import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
article1 = {
    title:'link 1',
    url: 'https://www.facebook.com/'
 };
article2 = {
    title:'link 2',
    url: 'https://www.youtube.com/'
 };
article3 = {
    title:'link 3',
    url: 'https://www.24h.com.vn/'
 };
article4 = {
    title:'link 4',
    url: 'https://www.facebook.com/'
 };
article5 = {
    title:'link 5',
    url: 'https://www.facebook.com/'
 };






  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];
  // addArticle()  {
  //   this.articles.push(this.article);
  //   console.log(this.article.title)
  // }
}
