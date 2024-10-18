'use client'
import Image from "next/image";
import { 
	Button,
	Grid2 as Grid,
	TextField,
	Container,
	Box,
	FormControl,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { sendMessage } from "./lib/chat";

export default function Home() {
	const [message, setMessage] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget as HTMLFormElement)
		const chat = formData.get('chat') as string
		console.log(chat)
		sendMessage({
			q: chat,
			chatId: 'chatId',
		})
		.then((res) => {
			if (res.success) {
				setMessage(res.success)
			} else {
				setMessage(res.error!)
			}
		})
		.catch((err) => {
			setMessage(err.message)
		})
	}

	return (
		<section className="w-screen h-screen grid grid-cols-12 grid-rows-12 bg-gray-500">
			<section className="row-start-1 row-span-11 col-span-12">
				{message && <p>{message}</p>}
			</section>
			<form onSubmit={(e) => handleSubmit(e)} className="row-start-12 col-span-12 flex flex-row items-center justify-center gap-4 p-4">
				<TextField name="chat" label="Chat" variant="outlined" color="primary" className="grow-1 w-full text-white border border-1 border-white"
					sx={{
						color: 'white',
					}}
				></TextField>
				<Button variant="contained">Submit</Button>
			</form>
		</section>
	);
}
