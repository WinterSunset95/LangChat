// Objective: Define the interfaces of the project
export const api = 'http://localhost:8000'

export interface ChatReq {
	q: string;
	chatId: string;
}

export interface ChatRes {
	success?: string;
	error?: string;
}
