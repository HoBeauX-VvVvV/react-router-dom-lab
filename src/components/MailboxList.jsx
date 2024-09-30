import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox, index) => (
          <li key={index}>
            <Link to={`/mailboxes/${index}`}>{mailbox.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;