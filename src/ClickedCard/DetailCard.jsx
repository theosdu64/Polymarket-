import './detailcarrd.css'

export default function DetailCard() {


    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                    backgroundColor: 'background.default',
                }}
            >
                <Container>
                    <HeaderBar />
                    <MenuTop1 />
                </Container>
            </Box>
        </Container>
    )
}