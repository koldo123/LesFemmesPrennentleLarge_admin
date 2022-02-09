import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
  DateTimeInput,
} from "react-admin";

const SessionEdit = (props: ListProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="spot_name" />
      <DateTimeInput source="date" />
      <TextInput source="address" />
      <NumberInput source="nb_hiki_max" />
      <NumberInput source="carpool" />
      <TextInput source="nice_date" disabled />
      <TextInput source="nice_time" disabled />
    </SimpleForm>
  </Edit>
);

export default SessionEdit;
