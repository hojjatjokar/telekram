import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chats from "./routes/chats/Chats";
import Chat from "./routes/chat/Chat";
import Contacts from "./routes/contacts/Contacts";
import ContactInfo from "./routes/contactInfo/ContactInfo";
import Profile from "./routes/profile/Profile";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/contact">
            <ContactInfo />
          </Route>
          <Route path="/">
            <Chats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
