import advancedReact from '../assets/advanced_react.png';
import codingInterviewPreparation from '../assets/coding_interview_preparation.png';
import developingFrontEndAppsWithReact from '../assets/developing_front-end_apps_with_react.png';
import frontEndDeveloperCapstone from '../assets/front-end_developer_capstone.png';
import htmlAndCssInDepth from '../assets/html_and_css_in_depth.png';
import introductionToFrontEndDevelopment from '../assets/introduction_to_front-end_development.png';
import javascriptPatterns from '../assets/javascript_-_patterns.png';
import learningGraphQL from '../assets/learning_graphql.png';
import learningReact from '../assets/learning_react.png';
import metaFrontEndDeveloper from '../assets/meta_front-end_developer.png';
import principlesOfUXUIDesign from '../assets/principles_of_ux_ui_design.png';
import programmingWithJavaScript from '../assets/programming_with_javascript.png';
import reactEssentialTraining from '../assets/react.js_essential_training.png';
import reactEcosystems from '../assets/react_-_ecosystems.png';
import reactUsingTypeScript from '../assets/react_-_using_typescript.png';
import reactBasics from '../assets/react_basics.png';
import reactHooks from '../assets/react_hooks.png';
import succeedingInWebDevelopment from '../assets/succeeding_in_web_development-_full_stack_and_front_end.png';
import versionControl from '../assets/version_control.png';

const certificates = [
  {
    name: 'Meta Front-End Developer',
    getImageSrc: () => metaFrontEndDeveloper,
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H7PBQH8AWD6W',
  },
  {
    name: 'Coding Interview Preparation',
    getImageSrc: () => codingInterviewPreparation,
    url: 'https://www.coursera.org/account/accomplishments/certificate/RFN3742YVMV4',
  },
  {
    name: 'Front-End Developer Capstone',
    getImageSrc: () => frontEndDeveloperCapstone,
    url: 'https://www.coursera.org/account/accomplishments/certificate/KYBVNGM9XQNY',
  },
  {
    name: 'Principles of UX/UI Design',
    getImageSrc: () => principlesOfUXUIDesign,
    url: 'https://www.coursera.org/account/accomplishments/certificate/4KS46KG52KVU',
  },
  {
    name: 'Advanced React',
    getImageSrc: () => advancedReact,
    url: 'https://www.coursera.org/account/accomplishments/certificate/L5BJQ3U56DMK',
  },
  {
    name: 'React Basics',
    getImageSrc: () => reactBasics,
    url: 'https://www.coursera.org/account/accomplishments/certificate/K3ZDJ5W6GG3E',
  },
  {
    name: 'HTML and CSS in depth',
    getImageSrc: () => htmlAndCssInDepth,
    url: 'https://www.coursera.org/account/accomplishments/certificate/NEAL56TSQFPU',
  },
  {
    name: 'Version Control',
    getImageSrc: () => versionControl,
    url: 'https://www.coursera.org/account/accomplishments/certificate/DDYN2LYJDRLN',
  },
  {
    name: 'Programming with JavaScript',
    getImageSrc: () => programmingWithJavaScript,
    url: 'https://www.coursera.org/account/accomplishments/certificate/6FEFPJY6LH79',
  },
  {
    name: 'Introduction to Front-End Development',
    getImageSrc: () => introductionToFrontEndDevelopment,
    url: 'https://www.coursera.org/account/accomplishments/certificate/XQ2DR7ESJG2X',
  },
  {
    name: 'Developing Front-End Apps with React',
    getImageSrc: () => developingFrontEndAppsWithReact,
    url: 'https://www.coursera.org/account/accomplishments/certificate/Y23SMZEAHKJX',
  },
  {
    name: 'JavaScript - Patterns',
    getImageSrc: () => javascriptPatterns,
    url: 'https://www.linkedin.com/learning/certificates/3e0a088e4793884e31d0a40733a2e031f8b6d50b599a53fe9d969b858c9d0a8d?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'Learning GraphQL',
    getImageSrc: () => learningGraphQL,
    url: 'https://www.linkedin.com/learning/certificates/7beb59e349fa859ac92495626b7362c8f27fa0f88f6cf562878f9d774d672f6a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'Learning React',
    getImageSrc: () => learningReact,
    url: 'https://www.linkedin.com/learning/certificates/e6239c327909b2244aef04efe30963603001814ea5fba15b5f9c73f7cd80f225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'React Essential Training',
    getImageSrc: () => reactEssentialTraining,
    url: 'https://www.linkedin.com/learning/certificates/d117ece24b890a94a6c7eb98251b113d8dc4b866d1d33773b1123c63e3e213ca?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'React - Ecosystems',
    getImageSrc: () => reactEcosystems,
    url: 'https://www.linkedin.com/learning/certificates/979babaf84aa2890f2a52d2d3f391f5a69d90986df6cbcb1ae56418718c51201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'React - Using TypeScript',
    getImageSrc: () => reactUsingTypeScript,
    url: 'https://www.linkedin.com/learning/certificates/1ea270e8a850ccf02d6b420c620120e64cea81519f16dd174cb79ee09af807a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'React Hooks',
    getImageSrc: () => reactHooks,
    url: 'https://www.linkedin.com/learning/certificates/69bebe37c197f7ff238acd5b59cfcd828ef9ca1b066ca852fe44a3ec99da6527?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
  {
    name: 'Succeeding in Web Development- Full Stack and Front End',
    getImageSrc: () => succeedingInWebDevelopment,
    url: 'https://www.linkedin.com/learning/certificates/da8c298f00bcd3fb6ea3dbddcf2e67cc7cff88a8937b6f58ea26d77114dab403?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQC%2FBlY6bQvqWVLdiCYbs3w%3D%3D',
  },
];

export default certificates;
