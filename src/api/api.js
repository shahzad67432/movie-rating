export const fetchPosts = async(page)=>{
    const response = await fetch(`http://localhost:3000/posts?_sort=-id ${page ? `_page=${page}&_per_page=5`: ""}`)
    const data = await response.json()
    return data
}
export const fetchComments = async()=>{
    const response = await fetch('http://localhost:3000/comments?_sort=-id')
    const data = await response.json()
    return data;
}

export const addPost = async(post)=>{
    const response = await fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(post)
    })
    const data = await response.json()
    return data;
}