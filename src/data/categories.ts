import type { Category } from '../types'

const researchCategory = {
  name: "Research",
  color: "#357aba",
  skills: ["Qualitative", "Quantitative", "User Needs Evaluation", "Analysis", "Domain Knowledge"],
  skillDescriptions: ["1","2","3","4","5"],
};
const qualityAssessmentCategory = {
  name: "Quality Assessment",
  color: "#4faea0",
  skills: ["Usability Evaluation", "Metrics and Measures"],
  skillDescriptions: ["1","2"],
};
const systemsCategory = {
  name: "Systems",
  color: "#f7ce46",
  skills: ["Information Architecture", "User Flows", "Holistic Design"],
  skillDescriptions: ["1","2","3"],
};
const craftCategory = {
  name: "Craft",
  color: "#6610bd",
  skills: ["UI Design", "Interaction Design", "Prototyping", "Handoff", "Visual and Motion Design"],
  skillDescriptions: ["1","2","3","4","5"],
};
const businessAndStrategyCategory = {
  name: "Business And Strategy",
  color: "#db6046",
  skills: ["Product Sense", "Vision"],
  skillDescriptions: ["1","2"],
};
const peopleCategory = {
  name: "People",
  color: "#A7BF45",
  skills: ["Workshop Facilitation", "Empathy", "Storytelling", "Stakeholders Mgmt", "Collaboration", "Mindset"],
  skillDescriptions: ["1","2","3","4","5","6"],
};
const writingCategory = {
  name: "Writing",
  color: "#BF4587",
  skills: ["Content", "Branding"],
  skillDescriptions: ["1","2"],
};
const personalCategory = {
  name: "Personal",
  color: "#45BFB0",
  skills: ["Process", "Developer Skills", "Product Management", "Time Management", "Boldness"],
  skillDescriptions: ["1","2","3","4","5"],
};

const categories: Category[] = [researchCategory,qualityAssessmentCategory,systemsCategory,craftCategory,businessAndStrategyCategory,peopleCategory,writingCategory,personalCategory];

export default categories
