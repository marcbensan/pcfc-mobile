import { ImageSourcePropType } from "react-native";

export interface LifeGroupItem {
  id: string;
  title: string;
  photo: ImageSourcePropType;
  description: string;
  schedule: string;
  leader: string;
  location: string;
}

export const ministriesData: LifeGroupItem[] = [
  {
    id: "1",
    title: "Kids",
    photo: require("../../assets/kids.png"),
    description:
      "A vibrant ministry for children ages 4-12, focused on building a strong foundation of faith through interactive Bible stories, worship, and fun activities.",
    schedule: "Every Sunday, 9:00 AM - 10:30 AM",
    leader: "Teacher Joy Santos",
    location: "Kids Ministry Room, 2nd Floor",
  },
  {
    id: "2",
    title: "Metanoia",
    photo: require("../../assets/metanoia.jpg"),
    description:
      "Our youth and young adults ministry for ages 13-25. Metanoia is a Greek word meaning 'a change of mind' — we gather weekly for worship, the Word, and authentic community.",
    schedule: "Every Saturday, 4:00 PM - 6:00 PM",
    leader: "Pastor David Cruz",
    location: "Youth Hall, Ground Floor",
  },
  {
    id: "3",
    title: "Adult",
    photo: require("../../assets/adult.png"),
    description:
      "Life groups for adults of all stages — singles, married couples, and seniors. We dive deep into Scripture, share life together, and support one another through prayer.",
    schedule: "Every Wednesday, 7:00 PM - 9:00 PM",
    leader: "Elder Ramon Dela Cruz",
    location: "Fellowship Hall",
  },
  {
    id: "4",
    title: "Women of Faith",
    photo: require("../../assets/adult.png"),
    description:
      "A nurturing community for women to grow in faith, share wisdom, and encourage one another. Activities include Bible studies, mentoring sessions, and fellowship gatherings.",
    schedule: "Every Friday, 10:00 AM - 12:00 PM",
    leader: "Sister Maria Gonzales",
    location: "Room 201, 2nd Floor",
  },
  {
    id: "5",
    title: "Men's Fellowship",
    photo: require("../../assets/adult.png"),
    description:
      "A brotherhood of men committed to spiritual growth, accountability, and servant leadership. We meet for Bible study, prayer, and occasional outdoor activities.",
    schedule: "Every Saturday, 6:00 AM - 8:00 AM",
    leader: "Brother James Reyes",
    location: "Conference Room A",
  },
  {
    id: "6",
    title: "Creative Arts",
    photo: require("../../assets/metanoia.jpg"),
    description:
      "For those passionate about using their creative gifts for God's glory. This group includes worship team members, visual artists, media/tech volunteers, and dancers.",
    schedule: "Every Thursday, 6:00 PM - 8:00 PM",
    leader: "Worship Pastor Nico Tan",
    location: "Worship Center, Main Building",
  },
];
