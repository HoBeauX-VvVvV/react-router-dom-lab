import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { id } = useParams();
  const mailbox = mailboxes[parseInt(id)];

  if (!mailbox) {
    return <p>Mailbox not found.</p>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Name: {mailbox.name}</p>
    </div>
  );
};

export default MailboxDetails;