import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderArea } from './styled';

export default function Header() {
	return (
		<HeaderArea>
			<div className="container">
				<div className="leftSide">
					<Link to={'/new/home'}>JÚLIO MANTA</Link>
				</div>
				<div className="rightSide">
					<NavLink to={'/new/home'} activeClassName="active">
						HOME
					</NavLink>
					<NavLink to={'/new/work'} activeClassName="active">
						WORK
					</NavLink>
					<NavLink to={'/new/about'} activeClassName="active">
						ABOUT
					</NavLink>
					<NavLink to={'/new/story'} activeClassName="active">
						STORY
					</NavLink>
					<NavLink to={'/new/contact'} activeClassName="active">
						CONTACT
					</NavLink>
				</div>
			</div>
		</HeaderArea>
	);
}
