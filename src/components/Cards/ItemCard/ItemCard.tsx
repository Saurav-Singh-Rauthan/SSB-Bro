import { Link } from "react-router-dom";
import Styles from "./ItemCard.module.scss";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ItemCardProps = {
  desc: string;
  name: string;
  price: string;
};
const ItemCard = ({ desc, name, price }: ItemCardProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}></div>
      <div className={Styles.courseDesc}>
        <div className={Styles.courseTitle}>
          <h1>{name}</h1>
          <Link to={"/courses"}>
            <OpenInNewIcon />
          </Link>
        </div>
        <span>{price}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ItemCard;
