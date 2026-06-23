import { Post, User } from "./types";

export const currentUser: User = {
  id: "u0",
  username: "single quin",
  avatarColor: "#6B21A8",
  initials: "SQ",
  avatarUrl: "/images/avatars/quin.png",
};

const singlebae: User = {
  id: "u1",
  username: "singlebae",
  avatarColor: "#0D9488",
  initials: "SB",
  avatarUrl: "/images/avatars/bae.png",
};

const pringlesingle: User = {
  id: "u2",
  username: "pringlesingle",
  avatarColor: "#7C3AED",
  initials: "PS",
  avatarUrl: "/images/avatars/pringle.png",
};

const lonelyqueen: User = {
  id: "u3",
  username: "lonelyqueen",
  avatarColor: "#DB2777",
  initials: "LQ",
  avatarUrl: "/images/avatars/lonely.png",
};

const singlet2: User = {
  id: "u4",
  username: "singlet2",
  avatarColor: "#EA580C",
  initials: "S2",
  avatarUrl: "/images/avatars/singlet.png",
};

const solosavage: User = {
  id: "u5",
  username: "solosavage",
  avatarColor: "#2563EB",
  initials: "SS",
  avatarUrl: "/images/avatars/savage.png",
};

export const posts: Post[] = [
  {
    id: "1",
    user: singlebae,
    title: "Annoying couple",
    imageUrl: "/images/couple1.png",
    caption:
      "Have you guys seen this annoying couple? always posting their nonsense self online, we can sha destroy their relationship on hinder",
    hateCount: 20,
    comments: [
      {
        id: "c1",
        user: singlet2,
        text: "ikr! very exhausting couple. I'm in oo",
        timestamp: "1 min ago",
      },
      {
        id: "c2",
        user: solosavage,
        text: "Lmaooo they think they're goals 😂 nah we moving different",
        timestamp: "3 min ago",
      },
    ],
    timestamp: "2 min ago",
  },
  {
    id: "2",
    user: pringlesingle,
    title: "Annoying couple again",
    imageUrl: "/images/couple2.png",
    caption:
      "This one and his bae went on date and won't let us rest, na so so post and shining teeth everywhere, ugh!",
    hateCount: 20,
    comments: [
      {
        id: "c3",
        user: singlet2,
        text: "Abi oooooooooooooo. what will we not see",
        timestamp: "5 min ago",
      },
    ],
    timestamp: "2 min ago",
  },
  {
    id: "3",
    user: lonelyqueen,
    title: "PDA overload",
    imageUrl: "/images/couple3.png",
    caption:
      "These two won't stop taking selfies every 5 minutes. My timeline is SUFFERING. Someone help me report their happiness 😤",
    hateCount: 35,
    comments: [
      {
        id: "c4",
        user: singlebae,
        text: "the audacity to be this happy in public honestly",
        timestamp: "10 min ago",
      },
      {
        id: "c5",
        user: solosavage,
        text: "reporting for emotional damage 💀",
        timestamp: "8 min ago",
      },
      {
        id: "c6",
        user: pringlesingle,
        text: "They're doing it on purpose at this point",
        timestamp: "6 min ago",
      },
    ],
    timestamp: "15 min ago",
  },
  {
    id: "4",
    user: solosavage,
    title: "Matching outfits alert",
    imageUrl: "/images/couple1.png",
    caption:
      "BRO. They came to the party in matching outfits. MATCHING. Like we don't already know they're together. The cringe is unbearable 🤮",
    hateCount: 48,
    comments: [
      {
        id: "c7",
        user: lonelyqueen,
        text: "I would simply pass away if I had to witness this irl",
        timestamp: "20 min ago",
      },
    ],
    timestamp: "30 min ago",
  },
];
