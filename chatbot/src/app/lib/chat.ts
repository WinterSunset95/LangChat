import type { ChatReq, ChatRes } from "./interfaces"
import { api } from "./interfaces"

const sendMessage = async (req: ChatReq): Promise<ChatRes> => {
	try {
		const response = await fetch(`${api}/chat?q=${req.q}&chatId=${req.chatId}`)
		const data = await response.json() as ChatRes
		return data
	} catch (error) {
		console.error('Error:', error)
		return {
			error: 'This is an error message'
		}
	}
}

export { 
	sendMessage
}
