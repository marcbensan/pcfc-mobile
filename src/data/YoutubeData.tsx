import { ImageSourcePropType } from "react-native";

export interface SermonItem {
  id: string;
  photo: ImageSourcePropType;
  title: string;
  speaker: string;
  date: string;
  duration: string;
}

export const youtubeData: SermonItem[] = [
  {
    id: "1",
    photo: require("../../assets/visionSunday.jpg"),
    title: "Vision Sunday",
    speaker: "Pastor Mark Dolor",
    date: "Mar 30, 2026",
    duration: "45 min",
  },
  {
    id: "2",
    photo: require("../../assets/holdOn.jpg"),
    title: "Hold On",
    speaker: "Pastor Mark Dolor",
    date: "Mar 23, 2026",
    duration: "38 min",
  },
  {
    id: "3",
    photo: require("../../assets/findConfidence.jpg"),
    title: "Find Confidence",
    speaker: "Pastor David Cruz",
    date: "Mar 16, 2026",
    duration: "42 min",
  },
  {
    id: "4",
    photo: require("../../assets/visionSunday.jpg"),
    title: "Anchored in Hope",
    speaker: "Pastor Mark Dolor",
    date: "Mar 9, 2026",
    duration: "40 min",
  },
  {
    id: "5",
    photo: require("../../assets/holdOn.jpg"),
    title: "Unshakeable Faith",
    speaker: "Elder Ramon Dela Cruz",
    date: "Mar 2, 2026",
    duration: "35 min",
  },
  {
    id: "6",
    photo: require("../../assets/findConfidence.jpg"),
    title: "The Good Shepherd",
    speaker: "Pastor Mark Dolor",
    date: "Feb 23, 2026",
    duration: "50 min",
  },
];
