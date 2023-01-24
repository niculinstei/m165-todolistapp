import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestoreCollection : AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('todos');
   }

   addTodo(title: string){
     this.firestoreCollection.add({
       title,
       isDone : false
     })
   }

   updateTodoStatus(id:string, newStatus:boolean){
     this.firestoreCollection.doc(id).update({isDone:newStatus});
   }

  updateTodoTitle(id:string, newTitle:string){
    this.firestoreCollection.doc(id).update({title:newTitle});
    alert("Title successfully changed");
  }

   deleteTodo(id:string){
     this.firestoreCollection.doc(id).delete();
   }

}
