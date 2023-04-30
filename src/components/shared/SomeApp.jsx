import React, { useEffect } from 'react';
import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => setCount(count + 1), 1000);
    }, []);

    return <div>{count}</div>;
}

export default Example;

// export class Example extends React.Component {
//     state = { count: 0 };
//     componentDidMount() {
//         setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
//     }
//     render() {
//         return <div>{this.state.count}</div>;
//     }
// }

// export default Example;
