import { useState } from 'react';

const MailboxForm = ({ onCreateMailbox }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onCreateMailbox({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;