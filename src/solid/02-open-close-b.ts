import { HttpClient } from './03-open-close-c';


export class TodoService { 
    constructor(private http:HttpClient){
        this.http=http;
    }
    async getTodoItems() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/');
    }
}


export class PostService {
    constructor(private http:HttpClient){
        this.http=http;
    }
    async getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}


export class PhotosService {
    constructor(private http:HttpClient){
        this.http=http;
    }
    async getPhotos() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }

}