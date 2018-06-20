import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  status: string;

  constructor() {
    this.createdAt = new Date();
    status = 'neutre';
  }

  ngOnInit() {
  }

  like() {
    this.loveIts += 1;
    this.actualize();
  }

  unlike() {
    this.loveIts -= 1;
    this.actualize();
  }

  actualize() {
    if (this.loveIts < 0) {
      this.status = 'négatif';
    } else if (this.loveIts > 0) {
      this.status = 'positif';
    } else {
      this.status = 'neutre';
    }
    console.log(status);
  }
}
