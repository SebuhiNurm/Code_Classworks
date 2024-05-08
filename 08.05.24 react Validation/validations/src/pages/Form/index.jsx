import TextField from '@mui/material/TextField';
  import { useFormik } from 'formik';
import CountrySchema from '../../validations/country.validations';

function Form() {
    const formik = useFormik({
        initialValues: {
            name: "",
            population: "",
            capital: "",
            description: "",
            flagImg: "",
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: CountrySchema
    })
    return (
        <>
            <div style={{ width: "500px", margin: "0 auto" }}>
                <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <TextField onChange={formik.handleChange} value={formik.values.name} name="name" id="outlined-basic" label="Name" variant="outlined" />
                    {formik.errors.name && formik.touched.name && <div style={{ color: "red" }} id="feedback">{formik.errors.name}</div>}
                    <TextField onChange={formik.handleChange} value={formik.values.population} name="population" id="outlined-basic" type='number' label="Population" variant="outlined" />
                    {formik.errors.population && formik.touched.population && <div style={{ color: "red" }} id="feedback">{formik.errors.population}</div>}
                    <TextField onChange={formik.handleChange} value={formik.values.capital} name="capital" id="outlined-basic" label="Capital" variant="outlined" />
                    {formik.errors.capital && formik.touched.capital && <div style={{ color: "red" }} id="feedback">{formik.errors.capital}</div>}
                    <TextField onChange={formik.handleChange} value={formik.values.description} name="description" id="outlined-basic" label="Description" variant="outlined" />
                    {formik.errors.description && formik.touched.description && <div style={{ color: "red" }} id="feedback">{formik.errors.description}</div>}
                    <TextField onChange={formik.handleChange} value={formik.values.flagImg} name="flagImg" id="outlined-basic" label="flag Image" variant="outlined" />
                    {formik.errors.flagImg && formik.touched.flagImg && <div style={{ color: "red" }} id="feedback">{formik.errors.flagImg}</div>}
                    <button type='submit'>Add</button>
                </form>
            </div>
        </>
    )
}

export default Form