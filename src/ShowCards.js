import TextCard from "./TextCard";

function ShowCards(props) {
  const { cards } = props;
  return (
    <ul style={{'display':'flex'}}>
      {cards.map((card) => (
        <TextCard
          key={card.id}
          title={card.title}
          text={card.text}
        />
      ))}
    </ul>
  );
}

export default ShowCards;