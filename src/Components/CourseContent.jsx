import { PartSection } from "./index-component";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

const CourseContent = () => {
  const parts = [
    {
      partNumber: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      items: [
        { icon: <AiOutlinePlayCircle />, title: "Video 1", time: "10:00" },
        { icon: <GoQuestion />, title: "Article 1", time: "10:00" },
        { icon: <GoQuestion />, title: "Quiz 1", time: "10:00" },
        { icon: <BsCodeSlash />, title: "Coding Exercise 1", time: "10:00" },
        {
          icon: <HiOutlineDocumentDuplicate />,
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
        { icon: <AiOutlinePlayCircle />, title: "Video 2", time: "10:00" },
        {
          icon: <HiOutlineDocumentDuplicate />,
          title: "Article 2",
          time: "10:00",
        },
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
    <div className="p-6 bg-gray-100 min-h-screen ">
      {parts.map((part, index) => (
        <PartSection key={index} {...part} />
      ))}
    </div>
  );
};

export { CourseContent };
