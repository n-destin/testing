describe('api crud spec', () => {
  it('description of the test', () => {
    cy.request({
     what_is_sent: "your JSON request"
    }).then(response=>{
      expect('some response of your the api').to.eq("some status heres")
    })
  })
})

let postID;

const {defineConfig} = require('cypress');
const { response } = require('express');

module.exports({
  e2e:{
    setUpNodeEvents(on, config){
      // listen and test the api requests
    },
    baseUrl: "https://platform.cs52.me"
  }
})


it('get all the posts', ()=>{
  cy.request({
    method: 'GET',
    url: '/api/posts'
  }).then(response=>{
    expect(response.status).to.eq(200);
    expect(response.body).to.be.a('array');
    expect(response.body[0]).to.be.a('object');
    expect(response.body[0].title).to.be.a('first post');
  })
})

it('user posts the firs post', ()=>{
  cy.request({
    method: 'POST',
    url: 'api/posts',
    body:{
      title: 'first post',
      tags: 'some words here',
      content: 'something going on',
      coverUrl:' https://media.giphy.com/media/uscuTAPrWqmqI/giphy.gif'
    }
  }).then(response=>{
    expect(response.status).to.eq(200);
    postID = response.body.id ?? response.body._id;
  })
})


// getting a request

it('user gets a post', ()=>{
  cy.request({
    method: 'GET',
    url: `/api/posts/${postID}`
  }).then(response=>{
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq('first post');
  })
})

// kind of straigtforward

it('user updates a post', () => {
  cy.request({
    method: 'PUT',
    url: `/api/posts/${postID}`,
    body:
    {
      title: 'updated post',
      tags: 'words',
      content: 'this is a test post',
      coverUrl: 'https://media.giphy.com/media/uscuTAPrWqmqI/giphy.gif',
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq('updated post');
  });
});

//deleting a post

it('user deletes a post', () => {
  cy.request({
    method: 'DELETE',
    url: `/api/posts/${postId}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

// for the errors during retriving

it('user retrieves a bad post id, expecting failure code 400', () => {
  cy.request({
    failOnStatusCode: false,
    method: 'GET',
    url: '/api/posts/INVALID_ID',
  }).then((response) => {
    expect(response.status).to.eq(400);
  });
});

// getting 

it('retrieving deleted post, expecting error code 404', () => {
  cy.request({
    failOnStatusCode: false,
    method: 'GET',
    url: `/api/posts/${postID}`,
  }).then((res) => {
    expect(res.status).to.eq(404);
  });
});