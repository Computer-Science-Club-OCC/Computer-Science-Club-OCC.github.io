import axiosInstance from "../axios/index";

function LoginService(email) {
	const response = axiosInstance.post(`/auth/login`, {
		destination: JSON.stringify(email),
	});
}

export default LoginService;
