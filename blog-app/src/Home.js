import BlogList from './BlogList';
import useFetch from './useFetch'; 

const Home = () => {

    // const[blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    //     { title: 'Welcome party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    // ])

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="home">
            {error && <div>Couldn't fetch the data for that resource!</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!"/>}
        </div>
    )
}

export default Home;