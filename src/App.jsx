import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
 
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    const _id = mailboxes.length; 
    const mailboxWithId = { ...newMailbox, _id };
    setMailboxes((prevMailboxes) => [...prevMailboxes, mailboxWithId]);
  };
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<main><h1>Post Office</h1></main>} 
        />
        <Route 
          path="/mailboxes" 
          element={<MailboxList mailboxes={mailboxes} />} 
        />
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm onCreateMailbox={addBox} />} 
        />
        <Route 
          path="/mailboxes/:mailboxId" 
          element={<MailboxDetails mailboxes={mailboxes} />} 
        />
      </Routes>
    </Router>
  );
}


export default App;
