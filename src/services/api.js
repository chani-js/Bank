import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/user',
});


/**
 * Gets user infos from API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id) => {
	try {
		const res = await instance.get(`/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
		return {msg:JSON.stringify(e.message)}
	}
};

/**
 * Gets user performance from API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserPerformance = async (id) => {
	try {
		const res = await instance.get(`/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
		return e
	}
};

/**
 * Gets user activity from API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserActivity = async (id) => {
	try {
		const res = await instance.get(`/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user average sessions from API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserAverageSessions = async (id) => {
	try {
		const res = await instance.get(`/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
