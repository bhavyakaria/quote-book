import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

const LandingPage = () => {
	return (
		<Box 
			display="flex" 
			width={"100wh"} height={"100vh"} 
			alignItems="center"
			justifyContent="center"
			>
				<Card sx={{minWidth: 450, padding: 2}}>
            <CardContent>
					<Stack spacing={2}>
						<Typography>
							Upload your Kindle file here and wait for the magic to happen!
						</Typography>
                    <Button variant="contained">Upload Your File</Button>
                </Stack>
            </CardContent>
        </Card>
			</Box>
    )
};

export default LandingPage;