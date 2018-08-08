import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'
import * as firebase from 'firebase'
import { Post } from './post'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const config = {
  apiKey: "AIzaSyBNtiu2Wq2aK5ixnD6xbH1yH94XCdzBXMQ",
  authDomain: "artb-4225f.firebaseapp.com",
  databaseURL: "https://artb-4225f.firebaseio.com",
  projectId: "artb-4225f",
  storageBucket: "artb-4225f.appspot.com",
  messagingSenderId: "59668477394"
};
firebase.initializeApp(config);




@Injectable()
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    )
  }


  uploadImage(image){
    console.log(image)
    let task = firebase.storage().ref(`images`).child(`${image.name}`).put(image)

    return task.snapshot.ref.getDownloadURL()
      .then(r=>{
        return r

      })
  }



  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }))
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`)
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }

  delete(id: string) {
    return this.getPost(id).delete()
  }

  update(id: string, formData) {
    return this.getPost(id).update(formData)
  }
}
