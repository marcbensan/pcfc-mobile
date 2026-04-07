export interface PrayerPost {
  id: string;
  content: string;
  author: string; // "Anonymous" or user-provided name
  timestamp: number;
  prayerCount: number;
}

/** Mock prayer requests that simulate what would come from a backend. */
export const mockPrayerPosts: PrayerPost[] = [
  {
    id: "mock-1",
    content:
      "Please pray for my family during this challenging season. We trust in God's faithfulness and provision.",
    author: "Anonymous",
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    prayerCount: 14,
  },
  {
    id: "mock-2",
    content:
      "Praying for healing for my mother who is in the hospital. We believe in miracles and God's grace.",
    author: "Maria",
    timestamp: Date.now() - 1000 * 60 * 60 * 5, // 5 hours ago
    prayerCount: 23,
  },
  {
    id: "mock-3",
    content:
      "Please pray for our youth as they prepare for exams this week. May God grant them wisdom and peace.",
    author: "Anonymous",
    timestamp: Date.now() - 1000 * 60 * 60 * 8,
    prayerCount: 8,
  },
  {
    id: "mock-4",
    content:
      "Thank God for answered prayers! My husband got the job offer we've been praying for. Glory to God!",
    author: "Sister Joy",
    timestamp: Date.now() - 1000 * 60 * 60 * 12,
    prayerCount: 31,
  },
  {
    id: "mock-5",
    content:
      "Praying for peace in our community and for our leaders to have wisdom in decision-making.",
    author: "Anonymous",
    timestamp: Date.now() - 1000 * 60 * 60 * 18,
    prayerCount: 19,
  },
  {
    id: "mock-6",
    content:
      "Please lift up my friend who is going through a really difficult time with loss. Pray for comfort.",
    author: "David",
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
    prayerCount: 12,
  },
];
