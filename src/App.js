import './App.css';
import axios from 'axios'
import Header from './components/Header';
import { useEffect, } from 'react';
import PostCard from './components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from './features/postSlice';

function App() {

  const dispatch = useDispatch();
  const postApiData = useSelector((state) => state.postSlice.posts)

  useEffect(() => {
    let postData;
    try{
      postData = async () => await axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => dispatch(setPosts(res?.data)));
    }catch(err){
      console.error(err)
    }
    postData();
  },[dispatch]);

  
  return (
    <div className="App">
      <Header />
      <div className="postCardWrapper">
        {
          postApiData?.map((item) => (
          <PostCard postData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
