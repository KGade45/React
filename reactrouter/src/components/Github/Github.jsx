import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/kgade45')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        setData(data)
    })
    },[])
    
return (
    <div className='bg-gray-600 text-white text-3xl p-4 flex items-center justify-center'>
        <img src={data.avatar_url} alt="Github profile" width={300} className='mr-6'/>
        Github Followers : {data.followers}
    </div>

)
}

export default Github
