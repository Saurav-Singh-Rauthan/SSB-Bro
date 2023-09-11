import Styles from "./Testimonials.module.scss";

const tags = ["Army officer", "Psychologist", "Life coach", "Mentor"];

const Testimonials = () => {
  return (
    <div className={Styles.container}>
      {/* About Sir */}
      <div className={Styles.mentorContainer}>
        <p className={Styles.mentorTitle}>Meet The Mentor</p>
        <div className={Styles.mentorDetails}>
          <div className={Styles.imgContainer}></div>
          <div className={Styles.aboutMentor}>
            <span className={Styles.mentorName}>Capt. Smart</span>
            <div className={Styles.tagsContainer}>
              {tags.map((tag) => {
                return <span className={Styles.tags}>{tag}</span>;
              })}
            </div>
            <span className={Styles.mentorAboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              vitae, esse sapiente recusandae at incidunt! Optio mollitia nisi
              exercitationem non, in distinctio veritatis doloribus, ea culpa at
              ipsa itaque a!
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div></div>
    </div>
  );
};

export default Testimonials;
