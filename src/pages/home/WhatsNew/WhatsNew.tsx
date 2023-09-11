import ScheduleAppointment from "./ScheduleAppointment/ScheduleAppointment";
import Styles from "./WhatsNew.module.scss";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const WhatsNew = () => {
  return (
    <div className={Styles.container}>
      <ScheduleAppointment />

      <div className={Styles.latestPost}>
        <p className={Styles.sectionTitle}>Latest Post</p>
        <div className={Styles.postImage}></div>
        <div className={Styles.postDesc}>
          <div className={Styles.postTitle}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at
              consectetur atque, quam nemo eligendi ut ipsa, molestias alias in
              perspiciatis qui labore veniam sapiente error, quidem soluta quis
              neque.
            </p>
            <div>
              <OpenInNewIcon className={Styles.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
