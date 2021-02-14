import React from 'react';
import herologo from '../images/HeroImagelg.png';
import Search from './Search';

function Header() {
	return (
		<div className="header"
			style={{
				backgroundImage: `url(${herologo})`,
				 backgroundPosition: 'center',
  				 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
		 }}
		>
			<div className="header__title">
				<span>CatWiki</span>
			</div>	
			<h2 className="header__desc">
				Get to know more about your cat breed
			</h2>
			<div className="header__search">
		 	   <Search />
			</div>
		</div>
	)
}

export default Header;
