import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
            >
              <option value='uncategorized'>Uncategorized</option>
  {/* Full Stack Development */}
  <option value='frontend'>Frontend Development</option>
  <option value='backend'>Backend Development</option>
  <option value='database'>Databases</option>
  <option value='devops'>DevOps</option>
  <option value='api'>API Development</option>
  
  {/* Specific Technologies */}
  <option value='javascript'>JavaScript</option>
  <option value='python'>Python</option>
  <option value='java'>Java</option>
  <option value='csharp'>C#</option>
  <option value='php'>PHP</option>
  <option value='reactjs'>React.js</option>
  <option value='angular'>Angular</option>
  <option value='vuejs'>Vue.js</option>
  <option value='nodejs'>Node.js</option>
  <option value='express'>Express.js</option>
  <option value='django'>Django</option>
  <option value='flask'>Flask</option>
  <option value='springboot'>Spring Boot</option>
  
  {/* Data Science */}
  <option value='datascience'>Data Science</option>
  <option value='machinelearning'>Machine Learning</option>
  <option value='deeplearning'>Deep Learning</option>
  <option value='nlp'>Natural Language Processing</option>
  <option value='computervision'>Computer Vision</option>
  <option value='dataanalysis'>Data Analysis</option>
  <option value='datavisualization'>Data Visualization</option>
  <option value='bigdata'>Big Data</option>
  <option value='statistics'>Statistics</option>
  
  {/* Tools and Frameworks */}
  <option value='tensorflow'>TensorFlow</option>
  <option value='pytorch'>PyTorch</option>
  <option value='scikitlearn'>Scikit-learn</option>
  <option value='pandas'>Pandas</option>
  <option value='numpy'>NumPy</option>
  <option value='tableau'>Tableau</option>
  <option value='powerbi'>Power BI</option>
  
  {/* Cloud Platforms */}
  <option value='aws'>AWS</option>
  <option value='azure'>Azure</option>
  <option value='gcp'>Google Cloud Platform</option>
  
  {/* Other */}
  <option value='webdev'>Web Development</option>
  <option value='mobiledev'>Mobile Development</option>
  <option value='security'>Cybersecurity</option>
  <option value='blockchain'>Blockchain</option>
  <option value='iot'>Internet of Things</option>

            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            Apply Filters
          </Button>
        </form>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Posts results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) =>
              <li key={post._id} className='list-none duration-500 animate-fade-in-down'>
            <PostCard post={post} />
          </li>)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
