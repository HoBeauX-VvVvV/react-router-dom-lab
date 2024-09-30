import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ onCreateMailbox }) => {
  const [name, setName] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onCreateMailbox({ name, boxSize });
      setName(''); 
      setBoxSize('Small'); 
      navigate('/mailboxes'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;