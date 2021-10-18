import React from 'react';
import './Comments.css'

const Comments = () => {
    return (
        <div className="comments container-fluid">
            <h1>Some People Comments Are Here:</h1>
            <div className="single-comment bg-danger fs-4">
            <p>1. It is one of the best hospital</p>
            <p>2. I recommend all to come to this hospital</p>
            <p>3. This hospital doctors ar so much proffesional</p>
            <p>4. It is a beautiful place</p>
            <p>5. They are so much helpfull</p>
            <p>6. It is one of the best hospital. I am glad because I can find them when I need them.</p>
            </div>
        </div>
    );
};

export default Comments;