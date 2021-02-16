import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Soulchat = () => {
	const [forums, setForums] = useState([]);

	async function getForums() {
		const resp = await axios.get('/api/soulchat');
		console.log(resp.data);
		setForums(resp.data);
	}

	/*
FE--
map through forums to display book + desc 
use div/li to modify how it looks 

map through c

map through member 
*/

	/* 

BE - controller model query Forum.findAll({
    order: [
        ['createdAt', 'desc']
    ], 
    include: [
        {
            model: Comment,
            include: Member 
        }
    ]
})
*/
	return (
		<div>
			<h1>Soulchat</h1>
			{forums.length !== 0 && forums.map((forum) => {})}
		</div>
	);
};

export default Soulchat;
