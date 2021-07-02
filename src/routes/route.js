import React from "react";
import { Route, Redirect } from "react-router-dom";


const AppRoute = ({
	component: Component,
	isAuthProtected,
	isUserLoggedIn,
	isMountDataLoaded,
	getLocalStorage,
	...rest
}) => (
		<Route
			{...rest} 
			
			render={props => { 
				if (isAuthProtected && !isUserLoggedIn && isMountDataLoaded) { 
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);				
				} 

				if (!isAuthProtected && isUserLoggedIn && isMountDataLoaded) { 
					return (
						<Redirect to={{ pathname: "/home", state: { from: props.location } }} />
					);				
				} 

				return (
          <Component {...props } />
				);
			}}
		/>
	);

export default AppRoute;
