import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className={style.container}>
      {recipes.map(({ id, name, summary, image, healthScore, steps }) => {
        return (
          <Card
            id={id}
            name={name}
            summary={summary}
            image={image}
            healthScore={healthScore}
            steps={steps}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
