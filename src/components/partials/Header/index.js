import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderArea } from './styled';

export default function Header() {
	return (
		<HeaderArea>
			<div className="container">
				<div className="leftSide">
					<Link to={'/portfolio-react/home'}>JOHN DOE</Link>
				</div>
				<div className="rightSide">
					<NavLink
						to={'/portfolio-react/home'}
						activeClassName="active"
					>
						HOME
					</NavLink>
					<NavLink
						to={'/portfolio-react/work'}
						activeClassName="active"
					>
						WORK
					</NavLink>
					<NavLink
						to={'/portfolio-react/about'}
						activeClassName="active"
					>
						ABOUT
					</NavLink>
					<NavLink
						to={'/portfolio-react/story'}
						activeClassName="active"
					>
						STORY
					</NavLink>
					<NavLink
						to={'/portfolio-react/contact'}
						activeClassName="active"
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</HeaderArea>
	);
}
