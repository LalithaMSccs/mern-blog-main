import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-between max-w-8xl mx-auto p-8 lg:p-16 space-y-12 lg:space-y-0 lg:space-x-12'>
        <div className='flex flex-col gap-8 lg:w-2/3 min-h-[400px] p-12 border-4 border-gray-300 rounded-2xl shadow-2xl '>
          <h1 className='text-4xl font-bold lg:text-6xl xl:text-7xl animate-bounce  transition ease-out delay-150 hover:-translate-y-1 hover:ease-in hover:text-blue-400 duration-500 ... cursor-pointer'>
            Welcome to my Blog
          </h1>
          <p className='text-gray-600 text- sm:text-xl  leading-relaxed cursor-pointer'>
            Explore a diverse collection of articles and tutorials covering a wide range of tech topics including web development, software engineering, programming languages, data science, machine learning, cloud computing, DevOps, and more. Whether you're interested in frontend frameworks, backend technologies, database management, or cutting-edge AI applications, you'll find valuable insights and practical guides to enhance your skills and knowledge.
          </p>
          <Link
            to='/search'
            className='text-xl  text-teal-500 font-bold hover:underline hover:text-purple-700 mt-4'
          >
            View all posts
          </Link>
        </div>
        <video 
          src='./BLOG.mp4' 
          alt='blog video'
          className='h-auto w-auto p-2 bg-gray-400 bg-opacity-50 rounded-full shadow-xl hover:bg-opacity-100 transition-all duration-300'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-full mx-auto p-40 flex flex-col gap-8 py-7 '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <li key={post._id} className='list-none duration-500 animate-zoom-in'>
                  <PostCard post={post} />
                </li>
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center animate-fade-in-down '
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}