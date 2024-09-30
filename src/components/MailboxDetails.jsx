import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === parseInt(mailboxId));

  if (!mailbox) {
    return <p>Mailbox not found.</p>;
  }

  return (
    <div className="mail-box">
      <h2>Mailbox Details</h2>
      <p>Box No: {mailbox._id}</p>
      <p>Name: {mailbox.name}</p>
      <p>Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;