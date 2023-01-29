import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="mailDesc">Sign up, and we'll send notification</span>
      <div className="mailInputContainer">
        <input type="type" placeholder="Enter your mail" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
