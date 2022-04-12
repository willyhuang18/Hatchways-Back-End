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

  }
  