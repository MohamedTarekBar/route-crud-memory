let serial = 0;
let posts = [];

class PostModel {
    createPost = ({ title, description } = {}) => {
        const post = { id: (serial += 1), title, description };
        posts.push(post);
        return post;
    };
    indexPosts = () => {
        if (posts.length < 1) {
            throw { status: 500, message: 'no data found' };
        } else {
            return posts;
        }
    };
    indexPostsReversed = () => {
        if (posts.length < 1) {
            throw { status: 500, message: 'no data found' };
        } else {
            const cp = [...posts];
            return cp.reverse();
        }
    };
    deletePost = ({ id } = {}) => {
        const deletedIndex = posts.findIndex((post) => post.id == id);
        if (deletedIndex != -1) {
            return posts.splice(deletedIndex, 1);
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };
    updatePost = ({id, title, description} = {}) => {
        const updatedIndex = posts.findIndex((post) => post.id == id);
        if (updatedIndex != -1) {
            const oldValues = posts[updatedIndex];
            const newValues = {
                id: oldValues.id,
                title: title ? title : oldValues.title,
                description: description ? description : oldValues.description,
            };
            posts[updatedIndex] = newValues;
            return posts[updatedIndex];
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };
    getPostById = ({ id } = {}) => {
        const index = posts.findIndex((post) => post.id == id);
        if (index != -1) {
            return posts[index];
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };
}

module.exports = PostModel;
