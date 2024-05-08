import * as Yup from "yup";

const CountrySchema = Yup.object().shape({
    name: Yup.string().min(15, 'Too Short!').required('Required').matches(/^[A-Z].*i/, 'boyuk yaz'),
    population: Yup.number().min(1000, 'Too Short!').required('Required'),
    capital: Yup.string().required('Required'),
    description: Yup.string().min(100, 'Invalid description').required('Required'),
    flagImg: Yup.string().url('Invalid url').required('Required'),
});

export default CountrySchema;