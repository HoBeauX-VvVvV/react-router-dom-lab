import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>Mailboxes</h2>
        <div>
          {mailboxes.map((mailbox) => (
            <div className="mail-box"
              key={mailbox._id}
            >
              <Link to={`/mailboxes/${mailbox._id}`}>
                <p>Box No: {mailbox._id}</p>
                <p>{mailbox.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default MailboxList;