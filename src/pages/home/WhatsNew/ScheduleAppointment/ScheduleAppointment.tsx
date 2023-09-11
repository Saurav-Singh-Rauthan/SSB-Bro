import Styles from "./ScheduleAppointment.module.scss";

import { GiTeacher } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsFilePersonFill, BsBookHalf } from "react-icons/bs";

const ScheduleAppointment = () => {
  return (
    <div className={Styles.container}>
      <div>
        <p className={Styles.sectionTitle}>What's Different</p>
        <button className={Styles.apptmntBtn}>Schedule an appointment</button>
      </div>
      <div className={Styles.iconContainer}>
        <div className={Styles.iconWithText}>
          <div className={Styles.icon}>
            <GiTeacher />
          </div>
          <span>Skilled Mentors</span>
        </div>

        <div className={Styles.iconWithText}>
          <div className={Styles.icon}>
            <TfiHeadphoneAlt />
          </div>
          <span>Daily Online Meets</span>
        </div>

        <div className={Styles.iconWithText}>
          <div className={Styles.icon}>
            <BsFilePersonFill />
          </div>
          <span>Personal Feedback</span>
        </div>

        <div className={Styles.iconWithText}>
          <div className={Styles.icon}>
            <BsBookHalf />
          </div>
          <span>Free Resources</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
