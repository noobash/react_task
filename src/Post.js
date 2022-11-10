import {Container} from 'react-bootstrap'; 

const Post = ({val,index}) => {
    return (
        <div className="post-list">
                <Container className='container'>
                <div className="post-preview" key={val.id}>
                    <h2>{index+1 + ". "+ val.title}</h2>
                    <p>{val.body}</p>
                </div>
                </Container>
        </div>
    );
}
 
export default Post;