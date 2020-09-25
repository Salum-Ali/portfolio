import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  // name: string;
  // email: string;
  // message: string;
  FormData: FormGroup;
  name = new FormControl('');

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      });
  }
  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText);
    console.log({ error })
    });
    }

  // processForm() {
  //   const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
  //   alert(allInfo);
  // }

}
