import type { Category } from '../types'

const strategyCategory = {
  name: "Strategy",
  color: "#357aba",
  skills: ["Product", "Research", "Vision"],
  skillDescriptions: ["What we're building and why", "Qualitative and quantitative evidence", "Future pathways and how things fit together"],
};
const craftCategory = {
  name: "Craft",
  color: "#4faea0",
  skills: ["Visual", "Interaction", "Systems"],
  skillDescriptions: ["How things look", "How things behave", "Underlying models, IAs, etc."],
};
const writingCraftCategory = {
  name: "Writing",
  color: "#f7ce46",
  skills: ["Content", "Copywriting", "Systems\u200B", "Design"],
  skillDescriptions: ["Figuring out what to write", "Finding the perfect words", "Building consistency and cohesion", "Developing your UX design chops"],
};
const collabCategory = {
  name: "Collaboration",
  color: "#6610bd",
  skills: ["Communication", "Process", "Mindset"],
  skillDescriptions: ["Written, verbal, and interpersonal skills", "Resiliency and growth orientation", "Sharing work and incorporating feedback"],
};
const impactCategory = {
  name: "Impact",
  color: "#db6046",
  skills: ["Effectiveness", "Leadership", "Citizenship"],
  skillDescriptions: ["Output, follow-through, and business impact", "Mentorship, ability to influence and drive change", "Improving our culture, hiring, and company practices"],
};

const categories: Category[] = [strategyCategory, craftCategory, writingCraftCategory, collabCategory, impactCategory];

export default categories
