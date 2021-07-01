const axios = require('axios');
const crypto = require('crypto');
//const { hasUncaughtExceptionCaptureCallback } = require('process');
const postService = require('../service/postService');

//gera palavra aleatória para que eu possa fazer o post
const generate = function() {
    return crypto.randomBytes(20).toString('hex');
};

const request = function(url, method, data) {
    return axios({url, method, data});
}

test('Should get posts', async function() {
    //GIVEN - dado que
    const post1 =  await postService.savePost({
        title: generate(),
        content: generate()
    });
    const post2 = await postService.savePost({
        title: generate(),
        content: generate()
    });
    const post3 = await postService.savePost({
        title:generate(),
        content: generate()
    });

    //WHEN - Quando acontecer
    const response = await request('http://localhost:8081/posts', 'get');
    const posts = response.data;

    //THEN - então
    expect(posts).toHaveLength(3);
    await postService.deletePost(post1.id);
    await postService.deletePost(post2.id);
    await postService.deletePost(post3.id);
});

test.only('Should save posts', async function () {
    //GIVEN - dado que
    const post1 = await postService.savePost({
        title: generate(),
        content: generate()
    });

    //WHEN - Quando acontecer
    const response = await request('http://localhost:8081/posts', 'post', 'some data');
    const posts = response.data;

    //THEN - então
    expect(posts).toHaveLength(3);
    await postService.deletePost(post1.id);
});

/*test('Should get posts', async function () {
    //TESTES PARA VER DADOS NO JSON
    /*
    //console.log(response.data);
    const posts = response.data;
    expect(posts).toHaveLength(3);
    
    //maneiras de acessar dados do .json
    const [firstPost] = posts;
    //console.log(firstPost);
    const secondPost = posts[1];
    //console.log(secondPost);

    expect(firstPost.id).toBe(1);
    expect(firstPost.title).toBe('Rest API: Métodos');
    expect(firstPost.content).toBe('...');

    expect(secondPost.id).toBe(2);
});*/