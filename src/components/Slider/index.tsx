import { type ElementType } from "react";
import cn from "./utils/cn";
import "./styles/slider.css";

interface SliderProps {
  asTag?: ElementType;
  className?: string;
  images: string[];
  text?: SliderText[];
}

function Slider({
  asTag = "div",
  className = "",
  images,
  text,
}: SliderProps) {
  const Tag = asTag;

  console.log("text", text);

  const sliderClassName = cn([
    "cs-slider",
    className,
  ]);

  return images.length > 0 ? (
    <Tag className={sliderClassName}>
      <nav className="cs-slider__nav">
        <ul className="cs-slider__list">
          {images.map((image) => {
            console.log("image", image);
            return (
              <li key={image}>
                <figure
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    minWidth: 100,
                    height: 200,
                  }}
                ></figure>
              </li>
            );
          })}
        </ul>
      </nav>
    </Tag>
  ) : null;
}

export default Slider;
