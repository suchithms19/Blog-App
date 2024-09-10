import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Blogs(){
    const {loading,blogs}=useBlogs();

    if (loading){
        return <div>
        <Appbar/> 
        <BlogSkeleton/>
        <BlogSkeleton/>  
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        
             
    </div>
           

    }
    
    return <div>
        <Appbar/>
        {blogs.map(blog => <BlogCard 
        authorName={blog.author.name || "SamAlex"}
        title={blog.title}
        content={blog.content}
        publishedDate="2024-06-07"
        id={blog.id}
        ></BlogCard>)}     
        
    </div>
}