import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of hashirshoaeb"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, news }) => {
	return (
		<div id="about" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>
				<div className="px-sm-5">
					{news.map((item, index) => (
						<div key={index} style={{ marginBottom: '2rem' }}>
							<h2 className="text-secondary">{item.date}</h2>
							<p className="text-light">{item.description}</p> {/* Add text-light here */}
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
				<div className="text-center">
					<Link href="/news" passHref>
						<button type="button" className="btn btn-outline-light">See More News</button>
					</Link>
				</div>
			</div>
		</div>
	);
};