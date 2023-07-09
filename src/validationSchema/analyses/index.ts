import * as yup from 'yup';

export const analysisValidationSchema = yup.object().shape({
  name: yup.string().required(),
  result: yup.string().required(),
  organization_id: yup.string().nullable(),
});
