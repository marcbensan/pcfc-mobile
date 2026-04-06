export interface EventItem {
  id: string;
  title: string;
  description: string;
  month: string;
  day: string;
  time: string;
  location: string;
  fullDescription: string;
}

export const events: EventItem[] = [
  {
    id: "1",
    title: "18th Year Anniversary",
    description:
      "Join us as we celebrate 18 years of God's faithfulness and love.",
    month: "APR",
    day: "20",
    time: "9:00 AM - 12:00 PM",
    location: "PCFC Main Hall",
    fullDescription:
      "Join us for an unforgettable celebration as we mark 18 years of God's faithfulness and love at PCFC! There will be special worship, testimonies from long-time members, a short film presentation looking back on our journey, and a fellowship lunch after the service. All are welcome to attend this milestone celebration.",
  },
  {
    id: "2",
    title: "Vacation Bible School",
    description:
      "A week of fun, learning, and growing in faith for kids ages 5-12.",
    month: "MAY",
    day: "15",
    time: "8:00 AM - 12:00 PM",
    location: "PCFC Kids Building",
    fullDescription:
      "Vacation Bible School is a week-long adventure for kids ages 5-12! Each day is packed with exciting Bible stories, creative arts and crafts, energetic worship songs, and team-building games. Our trained volunteers create a safe, fun environment where children can learn about God's love and make new friends. Snacks and materials are provided.",
  },
  {
    id: "3",
    title: "Metanoia Youth Camp",
    description: "An unforgettable weekend retreat for our youth community.",
    month: "JUN",
    day: "07",
    time: "Friday 5:00 PM - Sunday 12:00 PM",
    location: "Camp Blessing Retreat Center",
    fullDescription:
      "Metanoia Youth Camp is our annual weekend retreat designed for teens and young adults. This year's theme focuses on identity and purpose in Christ. Expect powerful worship sessions, thought-provoking talks, small group discussions, outdoor adventure activities, bonfire worship nights, and lifelong memories. Registration includes meals, accommodation, and a camp kit.",
  },
  {
    id: "4",
    title: "Couples Ministry Retreat",
    description:
      "A special retreat for couples to reconnect and grow together.",
    month: "JUL",
    day: "12",
    time: "Saturday 8:00 AM - 5:00 PM",
    location: "Garden Pavilion, PCFC Grounds",
    fullDescription:
      "The Couples Ministry Retreat is a one-day getaway for married and engaged couples to invest in their relationship. Through guided workshops, couples will explore communication strategies, conflict resolution, and spiritual intimacy. Enjoy a catered lunch, couple activities, and a renewal of commitment ceremony to close the day.",
  },
  {
    id: "5",
    title: "Community Outreach Day",
    description: "Serve our local community through various outreach projects.",
    month: "AUG",
    day: "03",
    time: "7:00 AM - 3:00 PM",
    location: "Various Locations",
    fullDescription:
      "Community Outreach Day is our church-wide mission to bless the local community. Teams will be deployed to different sites for feeding programs, minor home repairs, clean-up drives, and free health screenings. Volunteers of all ages are welcome. Lunch and transportation to sites will be provided. Sign up at the info desk.",
  },
  {
    id: "6",
    title: "Worship Night",
    description: "A night of uninterrupted praise and worship experience.",
    month: "AUG",
    day: "22",
    time: "6:00 PM - 9:00 PM",
    location: "PCFC Main Hall",
    fullDescription:
      "Worship Night is a special evening dedicated to extended worship and prayer. Our worship team will lead the congregation in a powerful time of praise, adoration, and intercession. This is an open event — invite your friends, family, and neighbors for an encounter with God's presence. Doors open at 5:30 PM.",
  },
  {
    id: "7",
    title: "Christmas Celebration",
    description: "Celebrate the birth of Christ with our church family.",
    month: "DEC",
    day: "25",
    time: "9:00 AM - 12:00 PM",
    location: "PCFC Main Hall",
    fullDescription:
      "Our annual Christmas Celebration is the highlight of the year! Join us for a special worship service featuring the choir, drama presentation, and a heartfelt message about the true meaning of Christmas. After the service, enjoy a fellowship meal with the church family. There will be activities for kids and gift bags for children ages 12 and under.",
  },
];
