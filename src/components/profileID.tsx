import { useRouter } from "next/router";

const BlogPostPage = () =>{
    const router = useRouter();
    const {slug} = router.query;
    return <div>Post: {slug}</div>
};

export default BlogPostPage;