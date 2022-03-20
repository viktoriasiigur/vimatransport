import Card from "../components/UI/Card";

import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <Card>
      <div className={classes.content}>
        <table className={classes.table}>
          <tr>
            <td colSpan={2}>
              <h3>Võta meiega ühendust:</h3>
            </td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>viktor.siigur@gmail.com</td>
          </tr>
          <tr>
            <th>Telefon:</th>
            <td>56631515</td>
          </tr>
          <tr>
            <th>Facebook:</th>
            <td>
              <a href="https://www.facebook.com/ViMaTransport">ViMaTransport</a>
            </td>
          </tr>
          <br></br>
          <tr>
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
          </tr>
        </table>
      </div>
    </Card>
  );
};

export default Contact;
