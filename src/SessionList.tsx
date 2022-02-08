import { Datagrid, List, ListProps, NumberField, TextField } from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

const SessionList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/* <NumberField source="id_session" /> */}
      <TextField source="name" />
      {/* <DateField source="date" /> */}
      <TextField source="spot_name" />
      <TextField source="address" />
      {/* <NumberField source="id_surf_style" /> */}
      <NumberField source="nb_hiki_max" />
      <BooleanNumField source="carpool" />
      {/* <NumberField source="id_session" /> */}
      <TextField source="nice_date" />
      <TextField source="nice_time" />
    </Datagrid>
  </List>
);

export default SessionList;
