import * as Yup from 'yup';

export const validate = Yup.object({
    city: Yup.string()
        .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, 'Only one space allow between words')
        .required('City name is required'),
})