import { createTheme, } from '@mui/material/styles'

const theme = createTheme({
	typography: {
		fontFamily: ["Poppins", "Noto Sans Thai"].join(', ') 
	},
	palette: {
		primary: {
			main: '#082c5c'
		},
		secondary: {
			main: '#DCDDE1'
		}
	}
})

export default theme