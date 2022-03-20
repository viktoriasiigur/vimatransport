import Card from '../components/Card';

import classes from './Contact.module.scss';

import emailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/phone.png';
import facebookIcon from '../assets/icons/facebook.png';
import viktor from '../assets/viktor.jpeg';

const Contact = () => {
  return (
    <div className={classes.content}>
      <Card>
        <h2>Võta meiega ühendust:</h2>
        <br />
        <div className={classes.header}>
          <img
            className={classes.picture}
            src={viktor}
            alt="Viktor Siigur"
          ></img>
          <br />
          <div>Viktor Siigur</div>
        </div>
        <div className={classes.contactLines}>
          <div className={classes.contactLine}>
            <img
              className={classes.icon}
              src={emailIcon}
              alt="Emaili ikoon"
            ></img>
            viktor.siigur@gmail.com
          </div>
          <div className={classes.contactLine}>
            <img
              className={classes.icon}
              src={phoneIcon}
              alt="Telefoni ikoon"
            ></img>
            +372 56631515
          </div>
          <div className={classes.contactLine}>
            <img
              className={classes.icon}
              src={facebookIcon}
              alt="Telefoni ikoon"
            ></img>
            <a
              href="https://www.facebook.com/ViMaTransport"
              target="_blank"
              rel="noreferrer"
            >
              ViMaTransport
            </a>
          </div>
        </div>

        {/* <tr>
            <td colSpan={2}>
              <h3>Ettevõtte andmed:</h3>
            </td>
          </tr>
          <tr>
            <th>Ärinimi:</th>
            <td>Vima Grupp OÜ</td>
          </tr>
          <tr>
            <th>Registrikood:</th>
            <td>11499511</td>
          </tr> */}
      </Card>
    </div>
  );
};

export default Contact;
