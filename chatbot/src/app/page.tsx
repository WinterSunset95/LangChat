import Image from "next/image";
import { 
	Button,
	Grid2 as Grid,
	TextField,
} from "@mui/material";

export default function Home() {
	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				This is the main grid
			</Grid>
			<Grid size={10} display="flex">
				<TextField
					id="userinput"
					label="Chat"
					variant="filled"
				>
				</TextField>
			</Grid>
			<Grid size={2}>
				<Button variant="contained">Click me</Button>
			</Grid>
		</Grid>
	);
}
