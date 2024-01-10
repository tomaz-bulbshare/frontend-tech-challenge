import React, { useEffect, useState } from 'react';
import './comments.css';

function Comments({ item }) {
    const [comments, setComments] = useState([]);

    try {
        useEffect(() => {
            async function init() {
                let data = await fetch(`http://localhost:4000/comments/${item.briefref}`);
                data = await data.json();
                setComments(data);
            }
            if (item !== null) {
                init();
            }
        }, [item]);

        if (item === null) {
            return null;
        }
        return (
            <div className="sticky-content">
                <div className="comment-header">
                    <img className="brand-logo" src={item.brand.logo} alt={`Logo of ${item.brand.name}`} ></img>
                    <h2 className="brand-name">{item.brand.name}</h2>
                </div>
                <div className="comment-list">
                    {comments.map((item, index) => {
                        return <Comment item={item} key={index} />
                    })}
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

function Comment({ item }) {
    try {
        return (
            <div className="comment">
                <img className="avatar" src={item.user.avatar} alt="user avatar" ></img>
                <span className="text-wrapper">
                    <h3 className="name">{item.user.name}</h3>
                    <p className="text">{item.comment}</p>
                </span>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default Comments;
