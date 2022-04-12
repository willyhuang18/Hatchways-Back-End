const axios = requir('axios');

const blogRoute = (req,res) => {
    res.status(200).send({
        success:'true',
    })
}
const Tags = (req, res) => {
    const { tags, sortBy, direction } = req.params;
    const api = `http://hatchways.io/api/assessment/blog/posts?tag=${tags}&sortBy=${sortBy}&direction=${direction}`;
    const sortFilter = ['id', 'likes', 'popularity', 'reads'];
    const directionFilter = ['asc', 'desc'];
  
    // Check the input validations
    if (sortFilter.indexOf(sortBy) === - 1) {
      res.status(400).send({
        error: 'sortBy parameter is invalid',
      });
    }
    if (directionFilter.indexOf(direction) === -1) {
      res.status(400).send({
        error: 'direction parameter is invalid',
      });
    }
  
  }
  