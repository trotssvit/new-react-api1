import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    const fetchData = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return ( <
            div >
            <
            h1 > Posts from API: < /h1> <
            button onClick = { fetchData } > Posts < /button> {
            data ? ( <
                ul > {
                    data.map((post) => ( <
                        li key = { post.id } >
                        <
                        h2 > { post.title } < /h2> <
                        p > { post.body } < /p> < /
                        li >
                    ))
                } <
                /ul>
            ) : ( <
                p > Click the button to fetch data < /p>
            )
        } <
        /div>
);
}

export default App;