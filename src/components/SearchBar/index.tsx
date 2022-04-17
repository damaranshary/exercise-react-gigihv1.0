import { TextField, Button, Grid } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";

export type propsSearch = {
    handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleFormSubmit: (e: FormEvent) => void,
    query: string,
}

const SearchBar = (props: propsSearch) => {
    const { handleFormSubmit, handleFormChange, query } = props;
    return (
        <form onSubmit={handleFormSubmit}>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={2}>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        size="small"
                        value={query}
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" size="large" type="submit">
                        Search
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SearchBar;