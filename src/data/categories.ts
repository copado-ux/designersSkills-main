import type { Category } from '../types'

const researchCategory = {
  name: "Research",
  color: "#357aba",
  skills: ["Qualitative", "Quantitative", "User Needs Evaluation", "Analysis", "Domain Knowledge"],
  skillDescriptions: ["Understand customer pain points, conduct usability tests, create personas, user testing or interviews.","Surveys and unmoderated online testing around functionality or information hierarchy.","(field research, competitor research, journey mapping)","Analyze the data and make suggested improvements, and measure for success","Competitors and industry knowledge, technical knowledge about the product"],
};
const qualityAssessmentCategory = {
  name: "Quality Assessment",
  color: "#4faea0",
  skills: ["Usability Evaluation", "Metrics and Measures"],
  skillDescriptions: ["Heuristics evaluation","Understand how to implement effectively and the limitations of existing analytics."],
};
const systemsCategory = {
  name: "Systems",
  color: "#f7ce46",
  skills: ["Information Architecture", "User Flows", "Holistic Design"],
  skillDescriptions: ["about understanding how your information flows and presents its self.","the steps a user takes to achieve a goal or outcome.","Work across departments, create and manage ecosystems, designs for transitions between interactions, create theories"],
};
const craftCategory = {
  name: "Craft",
  color: "#6610bd",
  skills: ["UI Design", "Interaction Design", "Prototyping", "Handoff", "Visual and Motion Design"],
  skillDescriptions: ["hi-fi mockups, design patterns, design systems use","Interface models, right components choice, standards","organise, structure, label the mockups. Create interactive and shareable prototypes","prepare the designs for developers. ","create illustrations and animations. Evolve brand design language. Typography, iconography, colours. "],
};
const businessAndStrategyCategory = {
  name: "Business And Strategy",
  color: "#db6046",
  skills: ["Product Sense", "Vision"],
  skillDescriptions: ["What we are building and why","Future pathways and how things will fit together"],
};
const peopleCategory = {
  name: "People",
  color: "#A7BF45",
  skills: ["Workshop Facilitation", "Empathy", "Storytelling", "Stakeholders Mgmt", "Collaboration", "Mindset"],
  skillDescriptions: ["Effectively synthetise the information and push the participants towards their workshop goals","empathy is all about understanding what it is like to be someone else, what are they feeling, thinking and doing.","our designs mean nothing if we can not effectively explain them and present them in a succinct and effective manner. Scope based on who you are talking to","Engage and maintain communication with stakeholders, and manage their expectations. Promote the value of design thinking, and grow the user-experience competency of the client.","Able to make modifications in work methods, processes in case unexpected issues.Cooperate with other team members, constructively critique their work and collaborate for a common path.","Feedback handling. Help team’s memebers."],
};
const writingCategory = {
  name: "Writing",
  color: "#BF4587",
  skills: ["Content", "Branding"],
  skillDescriptions: ["Create macro and micro copy","Couple with brand rules and industry standards"],
};
const personalCategory = {
  name: "Personal",
  color: "#45BFB0",
  skills: ["Process", "Developer Skills", "Product Management", "Time Management", "Boldness"],
  skillDescriptions: ["Resilience and growth. Clear and adaptable process. You inspire process.","you code?","Techincal Specs and Requirements, AGILE, ","deadlines, etc","believe in their ideas"],
};

const categories: Category[] = [researchCategory,qualityAssessmentCategory,systemsCategory,craftCategory,businessAndStrategyCategory,peopleCategory,writingCategory,personalCategory];

export default categories
