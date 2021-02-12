import React from 'react';
// 

const Forum = () => {
let forums = [
    {
        id:1,
        description:"This is a great book!",
        comment: "You should read this!",
        book: {
            title: "The power of now",
            author: "Eckhart Tolle",
            category: "Spirituality"}
        },

        {
            id:2,
            description:"Awesome!",
            comment: "Great book!",
            book: {
                title: "The power of positive thinking",
                author: "Norman Peale",
                category: "Spirituality"}
            },

            {
                id:3,
                description:"Would read again!",
                comment: "Read it now!",
                book: {
                    title: "Relentless Optimism",
                    author: "Darrin Donnelly",
                    category: "Spirituality"}
                }
];

function getForums(id) {
    return Object.keys(forums([getForums]));
   
};


    return(
        <h1>Forum</h1>
    );

};

export default Forum;