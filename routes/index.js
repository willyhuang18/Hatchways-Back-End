const axios = require('axios');

const blogRoute = (req,res) => {
    res.status(200).send({
        success:'true',
    })
}
const Tag = (req, res) => {
    const { tags, sortBy, direction } = req.params;
    const sortFilter =  ['id', 'author', 'authorId', 'likes', 'popularity', 'reads', 'tags', undefined];
  
    // Check the input validations
    if (sortFilter.indexOf(sortBy) === - 1) {
      res.status(400).send({
        error: 'sortBy parameter is invalid',
      });
    }
  
    // in case user want more tags
    if (tags.indexOf(',') !== - 1) {
      let tagArray = tags.split(',');
      let getPaths = tagArray.map((tag, i) => {
        return axios.get(`http://hatchways.io/api/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
      });

      axios.all([
        ...getPaths
      ])
        .then(axios.spread((tag1, tag2, tag3, tag4) => {
          let data = [
            //   Conditional operator
            tag1 ? tag1.data.posts : '',
            tag2 ? tag2.data.posts : '',
            tag3 ? tag3.data.posts : '',
            tag4 ? tag4.data.posts : ''
          ]
          let post = {};
          let posts = [];
          for (let i = 0; i < data.length; i++) {
            let blog = data[i];
            for (let j = 0; j < blog.length; j++) {
              post[blog[j].id] = blog[j];
            }
          }
          for (let key in post) {
            posts.push(post[key]);
          }
          res.status(200).send(posts);
        }))
        // catch error
        .catch(error => {
          res.status(400).send({
            error: 'Tags parameter is required',
          })
          console.log(error)
        });
    } else {
      axios.get(`http://hatchways.io/api/assessment/blog/posts?tag=${tags}&sortBy=${sortBy}&direction=${direction}`)
        .then(request => {
          const data = request.data.posts;
          res.status(200).send(data);
        })
        .catch(error => {
          res.status(400).send({
            error: 'Tags parameter is required',
          })
          console.log(error)
        });
    }
  }

  module.exports = {blogRoute, Tag}