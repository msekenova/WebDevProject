import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public commentService: CommentService,
              public tokenStorageService: TokenStorageService) { }

  @Input() PAGE_ID: number;
  comments: Comment[];
  showCommentForm = false;
  message: string;

  ngOnInit(): void {
    this.commentService.getComments(this.PAGE_ID).subscribe(res => this.comments = res);
    console.log(this.tokenStorageService.getToken());
  }

  showForm(): void {
    if (this.tokenStorageService.getToken() === null) {
      alert('You need to login to write comments');
    } else {
      this.showCommentForm = true;
    }
  }

  writeComment(): void {
    this.commentService.writeComment(this.message, this.PAGE_ID);
    window.location.reload();
  }

  // updateComment(id: number, message: string) {
  //   this.commentService.updateComment(id, message);
  // }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id);
  }

}
