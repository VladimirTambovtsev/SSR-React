import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return <h3 className="center-align">Ooops.. Page Not Found.</h3>
};

export default {
	component: NotFoundPage
};