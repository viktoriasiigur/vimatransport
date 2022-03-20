import classes from './About.module.scss';

const About = () => {
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <h2>Kes me oleme?</h2>
        ViMa Transport (Vima Grupp OÜ) on väikefirma, mis korraldab väikebussiga
        bussireise ja väljasõite vastavalt tellimusele. Firma omanik ja
        bussijuht on Viktor Siigur.
      </div>
    </div>
  );
};

export default About;
