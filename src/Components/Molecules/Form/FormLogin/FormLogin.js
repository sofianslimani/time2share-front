import React from 'react';
import ButtonWithOneClickActions from "../../../Atomes/Buttons/ButtonWithOneClickActions";

const MyComponent = () => {
	const submit = () =>{
	
	}
	return (
		<form>
			<ButtonWithOneClickActions title={"Connexion"} onClick={(e)=>submit}/>
		</form>
	);
};

export default MyComponent;
