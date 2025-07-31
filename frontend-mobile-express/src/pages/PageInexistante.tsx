import { Stack, Typography } from "@mui/material"

function PageInexistante() {
    return (
        <Stack direction="column" sx={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
            <Typography variant="h4" gutterBottom>
                Page Inexistante (404)
            </Typography>
            <Typography variant="body1">
                La page que vous cherchez n'existe pas.
            </Typography>
        </Stack>
    )
}

export default PageInexistante