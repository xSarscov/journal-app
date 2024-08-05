import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
            
    >
        <Grid item>
            <Typography 
                fontSize={ 39 }
                fontWeight='light'
            >
                05 de Agosto, 2024
            </Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                <Typography>
                    Guardar
                </Typography>
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Type a title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
            />
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="How's your day been?"
                sx={{ border: 'none', mb: 1 }}
                minRows={5}
            />
        </Grid>

        <ImageGallery />
    </Grid>
  )
}
