import SocialLinks from "../SocialLinks/SocialLinks";
import EmailList from "../EmailList/EmailList";

function Footer( props ) {
    return (
    <div className="App-footer">
        <h1>Footer</h1>
        <EmailList />
        <SocialLinks />
    </div>
    );
}

export default Footer;