import React from 'react';

export const RecentNews = ({ title, news }) => {
	return (
		<div id="recent-news" className="bg-light py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{news.map((item, index) => (
						<div key={index} style={{ marginBottom: '2rem' }}>
							<h2>{item.date}</h2>
							<p>{item.description}</p>
							{item.image && (
								<img
									src={item.image}
									alt={`News from ${item.date}`}
									style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '8px' }}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};