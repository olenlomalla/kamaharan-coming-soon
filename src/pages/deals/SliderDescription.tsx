import SliderDescriptionItem from "./SliderDescriptionItem";
import { textElements } from "./textElements";

const SliderDescription = () => {
  return (
    <>
      {textElements.map((textElement) => {
        return (
          <SliderDescriptionItem
            head={textElement.head}
            key={textElement.id}
            price={textElement.price}
            rate={textElement.rate}
            reviews={textElement.reviews}
          />
        );
      })}
    </>
  );
};

export default SliderDescription;
