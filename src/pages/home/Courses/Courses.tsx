import ItemCard from "../../../components/Cards/ItemCard/ItemCard";
import Styles from "./Courses.module.scss";

const COURSE_LIST = [
  {
    name: "Personal interview for SSB",
    desc: "Online interview by experienced army officer and SSB mentor. Discussion about strengths and weaknesses of the candidate, where he/she needs to improve, do's and don'ts in personal interview, plan of action to improve OLQs and get recommended.",
    price: "₹399.00",
  },
  {
    name: "Psychology assessment for SSB",
    desc: "Psychology tests conducted exactly as per SSB format. Experienced military psychologist will assess the responses given and tell the candidate all areas of improvement. OLQ score and suggestions for better performance will be provided.",
    price: "₹399.00",
  },
  {
    name: "GTO tasks practice and improvement",
    desc: "Series of group tasks conducted at SSB - group discussions, GPE, lecturette, PPDT and more. Peer learning with fellow aspirants. Everyday recorded sessions and personal suggestions for improvement. Focus on OLQ development through various interactive sessions.",
    price: "₹0.00",
  },
  {
    name: "Personal mentorship by SSB bro",
    desc: "Individual mock SSB including psychology tests, personal interview and group testing. Complete analysis of OLQs. Detailed discussion about areas of improvement, plan of action to overcome weaknesses and face SSB with confidence. Conducted personally by the chief mentor - Capt Smart (aka SSB bro)",
    price: "₹0.00",
  },
];

const Courses = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.sectionTitle}>Courses</p>
      <div className={Styles.courses}>
        {COURSE_LIST.map((course) => {
          return (
            <ItemCard
              desc={course.desc}
              name={course.name}
              price={course.price}
              key={course.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
