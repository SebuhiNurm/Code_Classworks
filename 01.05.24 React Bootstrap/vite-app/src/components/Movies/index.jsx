import { useEffect, useState } from "react";
import { getAll } from "../../services/index"
import { endpoint } from "../../services/constant";
import Movie from "../Movie";
import { Container, Grid } from "@mui/material";
import styles from "./index.module.scss"

function Movies() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAll(endpoint.movies).then((response) => {
            setData(response)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <>
            <Container>
                <div className={styles["movies-wrapper"]}>
                    <Grid container spacing={2}>
                        {data && data.map((movie) => {
                            console.log(movie.posterUrl);
                            return <Movie key={movie.id} movie={movie} data={data} setData={setData} />
                        })}
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Movies