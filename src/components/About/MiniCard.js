import "./MiniCard.scss";

const MiniCard = (props) => {
  return <div className="mini-card">{props.children}</div>;
};

export default MiniCard;