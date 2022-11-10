import { useState,useEffect} from "react";
import Post from "./Post";
import Search from "./SearchBar";

const Home = () => {
    // creating posts and setposts for storing data fetched from api and for updation of fetched data over time.
    const [posts,setPosts] = useState(null);
    // creating searchItem and setsearchItem for storing input to be searched and for updation of input data by user over time.
    const [searchItem,setSearchItem] = useState('');
    
    useEffect(() =>{
        // Fetching data from API and storing it in posts using setPosts.
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            return res.json();
        }).then(data=> {
            setPosts(data);
        })
        return () =>{
            setPosts(null);
        }
    },[]);

    return (
    <div>
        <Search setSearchItem = {setSearchItem} title = "All Posts" />
           { posts && posts.filter((val)=>{
            //Searching for the title in the original list.
            // Case 1 : When user doesn't enter any input. Every post is displayed. 
            if(searchItem==='')
            return val;
            // Case 2 : When user enters the input and title contains the input as its substring.
            // As a result the post is eligible to be displayed.   
            else if(val.title.toLowerCase().includes(searchItem.toLowerCase()))
            return val;
            // Case 3 : When user enters the input but title doesn't contain the input as its substring.
            // As a result we discard the post.
            else
            return null;
            //After the filter we display the post using map method.
           }).map((val,index)=>{
            return(
                <Post val = {val} index = {index} />
            );
           })}
    </div>
    );
}
 
export default Home;