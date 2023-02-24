import React from 'react';

const ButtonWithOneClickActions = ({onClick,title}) => {
	return (
		<button onClick={onClick}>{title}</button>
	);
};

export default ButtonWithOneClickActions;
