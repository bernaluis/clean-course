import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiService } from './05-dependency-c';


// Main
(async () => {

    const providerJson= new WebApiService();
    const postService = new PostService(providerJson);

    const posts = await postService.getPosts();

    console.log({ posts })


})();