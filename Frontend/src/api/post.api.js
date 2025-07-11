


const backendUrl = import.meta.env.VITE_BACKEND_URL

const createPostApi = async (credentials) => {
    try {
        const res  = await fetch(`${backendUrl}/api/post/`, {
            method:'POST',
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(credentials)
        })

        const data = await res.json();
        if(res.ok || data.success === true){
            return data;
        }
        else{
            throw new Error(data.message)
        }
    } catch (error) {
        throw error
    }
}

const getPostsApi = async () => {
    try {
        const res = await fetch(`${backendUrl}/api/post/`, {
            method:"GET",
            credentials:"include",
            headers: {
                "content-type":"application/json"
            }
        })

        const data = await res.json();
        if(data.success === true){
            return data
        }
        else{
            throw new Error(data.message)
        }
    } catch (error) {
        throw error
    }
}

const getPostByUserApi = async () => {
    try {
        const res = await fetch(`${backendUrl}/api/post/user/`,
            {
                method:"GET",
                credentials:"include",
                headers: {
                    "content-type":"application/json"
                }
            }
        )

        const data = await res.json();
        if(data.success === true){

            return data
        }   
        else{
            throw new Error(data.message)
        }

    } catch (error) {
        throw error
    }
}


export {
    createPostApi,
    getPostsApi,
    getPostByUserApi
}