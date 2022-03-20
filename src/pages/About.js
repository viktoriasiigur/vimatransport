import Card from "../components/Card";
import classes from "./About.module.scss";
import bus from "../assets/ford.jpeg";

const About = () => {
  return (
    <div className={classes.content}>
      <Card>
        <div className={classes.text}>
          <h2>Kes me oleme?</h2>
          ViMa Transport (Vima Grupp OÜ) on väikefirma, mis korraldab
          väikebussiga bussireise ja väljasõite vastavalt tellimusele. Firma
          omanik ja bussijuht on Viktor Siigur.
          <br />
          <br />
          Sõiduvahendiks on väikebuss Ford Transit, kus on 10 reisijakohta + 2
          ratastooli kohta. Samuti on olemas tõstuk, mille abil on võimalik
          ratastoolid hõlpsasti masinasse toimetada. Buss asub Mulgimaal, sõidud
          toimuvad üle Eesti.
        </div>
        <img className={classes.bus} src={bus} alt="Buss Ford Transit"></img>
      </Card>
    </div>
  );
};

export default About;
