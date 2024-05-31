import { JsonDatabaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {
    constructor(
        private jsonDB:PostProvider
    ) {
        this.jsonDB=jsonDB;
}
    async getPosts() {
       return await this.jsonDB.getPosts();
    }
}