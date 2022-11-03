import { axiosInstance } from "../axios/index";

export default function LoginService(email) {
	const response = axiosInstance.post(`/auth/login`, {
		destination: JSON.stringify(email),
	});
}
