import * as React from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  EditGuesser,
  ListGuesser,
  useList,
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
// import AddressList from "./AddressList";
import authProvider from "./authProvider";
import SessionList from "./SessionList";
import SessionEdit from "./SessionEdit";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

//permet de faire le lien avec l'API REST (back)
const dataProvider = simpleRestProvider(
  "http://localhost:3000/api",
  httpClient
);

const App = () => (
  // Le composant Admin constitue le composant raçine de l'app admin
  // Admin prend un dataProvider qui passé en props permet de faire les appels API
  // AuthProvider quand à lui permet la connexion en tant qu'admin
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    {/* Admin prend <Resource> comme enfant et le name="" pointe vers la route à exploiter.
    <Resource> vaut pour toutes les opération CRUD.

    La props list={UserList} déclare que react-admin utilisera le composant UserList pour
    lister les utilisateurs.
    
    Si aucun enfant/composant n'est créer (ex: UserList) ListGuesser permet de visualiser tous les users*/}
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="sessions" list={SessionList} edit={SessionEdit} />
  </Admin>
);

export default App;
