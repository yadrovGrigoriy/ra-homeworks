

function Menu(props) {
	const menuItems = props.items.map(item => {
		return <li><a href={item.href}>{item.title}</a></li>
	});

	return props.opened ?
		<div className="menu menu-open">
			<div className="menu-toggle"><span/></div>
			<nav>
				<ul>
					{menuItems}
				</ul>
			</nav>
		</div>
		:
		<div className="menu">
			<div className="menu-toggle"><span/></div>
		</div>
	}

