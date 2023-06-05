import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderArea } from './styled';

export default function Header() {
	return (
		<HeaderArea>
			<div className="container">
				<div className="leftSide">
					<Link to={'/home'}>JOHN DOE</Link>
				</div>
				<div className="rightSide">
					<NavLink to={'/home'} activeClassName="active">
						HOME
					</NavLink>
					<NavLink to={'/work'} activeClassName="active">
						WORK
					</NavLink>
					<NavLink to={'/about'} activeClassName="active">
						ABOUT
					</NavLink>
					<NavLink to={'/story'} activeClassName="active">
						STORY
					</NavLink>
					<NavLink to={'/contact'} activeClassName="active">
						CONTACT
					</NavLink>
				</div>
			</div>
		</HeaderArea>
	);
}
