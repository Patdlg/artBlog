import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFireStorage } from 'angularfire2/storage'
import { HttpClient } from '@angular/common/http'


import { AuthService } from '../../core/auth.service'
import { PostService } from '../post.service'

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {
  selectedFile = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('https://firebase.google.com/docs/functions/write-firebase-functions');
  //   .subscribe(res =>{
  //     console.log(res)
  //   })
  // }

  contact: string
  content: string
  image: string
  title: string

  saving = 'Create Post'

  uploadPercent: Observable<number>




  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private postService: PostService,

    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() { }

  // onChangeImage(event) {
  //   const file = event.target.files[0]
  //   this.postService.uploadImage(file)
  //     .then(r => {
  //       this.image = r
  //       console.log(r)
  //     })
  // }

  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      contact: this.contact,
      image: this.image || null,
      published: new Date(),
      title: this.title
    }
    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.contact = ''
    this.image = ''

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 1000)
  }

}
  // onUpload(event) {
  //   const file = event.target.files[0]
  //   const path = `posts/${file.name}`
  //   if (file.type.split('/')[0] !== 'image') {
  //     return alert('only image files')
  //   } else {
  //     const task = this.storage.upload(path, file)
  //     this.downloadURL = task.downloadURL()
  //     this.uploadPercent = task.percentageChanges()
  //     console.log('Image Uploaded!')
  //     this.downloadURL.subscribe(url => (this.image = url))
  //   }
  // }
//

