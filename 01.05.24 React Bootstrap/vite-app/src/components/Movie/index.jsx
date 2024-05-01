/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { deleteOneID } from "../../services"
import { endpoint } from "../../services/constant"

function Movie({ movie, data, setData }) {
    function handleDelete(id) {
        deleteOneID(endpoint.movies, id).then((res) => {
            if (res.status === 200) {
                const filtered = [...data].filter((movie) => {
                    return movie.id !== id
                })
                setData(filtered)
            }
        })

    }
    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={movie.posterUrl}
                        title={movie.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.genre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.releaseYear}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">Show </Button>
                        <Button variant="contained">Add </Button>
                        <Button onClick={() => handleDelete(movie.id)} variant="contained">delete</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Movie