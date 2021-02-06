import React from "react";

function Header() {
	return (
		<div
			style={{
				height: "50px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// backgroundColor: "blue",
				color:"white",
				fontSize:'20px',
				cursor:'pointer',
                // color:"white", boxShadow:"2px solid gray"
			}}>
			<h2>the Card Game</h2>
		</div>
	);
}

export default Header;
