import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
	return (
		<nav className="header">
			{/* logo */}
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
					alt=""
				/>
			</Link>
			{/* search box */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			{/* 3 links */}
			<div className="header__nav">
				{/* 1st link */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Hello qazi</span>
						<span>sign in</span>
					</div>
				</Link>
				{/* 2nd link */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Hello qazi</span>
						<span>sign in</span>
					</div>
				</Link>
				{/* 3rd link */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Hello qazi</span>
						<span>sign in</span>
					</div>
				</Link>
				{/* 4th link */}
			</div>
			{/* basket icon */}
		</nav>
	);
};

export default Header;
