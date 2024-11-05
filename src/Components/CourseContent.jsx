import { PartSection } from "./index-component";
import { ImgComponent } from "../Components/ImgComponent";
import playbutton from "../Assets/playbutton.svg";
import codesign from "../Assets/codesign.svg";
import Q from "../Assets/Q.svg";
import document from "../Assets/document.svg";

const CourseContent = () => {
  const parts = [
    {
      partNumber: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      items: [
        {
          icon: <ImgComponent src={playbutton} />,
          title: "Video 1",
          time: "10:00",
        },
        {
          icon: <ImgComponent src={Q} />,
          title: "Article 1",
          time: "10:00",
        },
        {
          icon: <ImgComponent src={Q} />,
          title: "Quiz 1",
          time: "10:00",
        },
        {
          icon: <ImgComponent src={codesign} />,
          title: "Coding Exercise 1",
          time: "10:00",
        },
        {
          icon: <ImgComponent src={document} />,
          title: "Combined Resource 1",
          time: "10:00",
        },
      ],
      completion: 45,
    },
    {
      partNumber: 2,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      items: [
  
      ],
      completion: 20,
    },
    {
      partNumber: 3,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      items: [],
      completion: 0,
    },
  ];

  return (
    <div className="ml-7  rounded-2xl ">
      {parts.map((part, index) => (
        <PartSection key={index} {...part} />
      ))}
    </div>
  );
};

export { CourseContent };
