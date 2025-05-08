import * as Yup from 'yup';

export const validate = Yup.object({
    city: Yup.string()
        .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, 'Only alphabets are allowed')
        .required('City name is required'),
})