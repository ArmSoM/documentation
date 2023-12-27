/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  sige: [
    {
      type: 'autogenerated',
      dirName: 'sige',
    }
  ],  
  link: [
    {
      type: 'autogenerated',
      dirName: 'link',
    },
  ],
  lm: [
    {
      type: 'autogenerated',
      dirName: 'lm',
    }
  ],
  aim: [
    {
      type: 'autogenerated',
      dirName: 'aim',
    },
  ],
  
  "general-tutorial": [
    {
      type: 'category',
      label:  "General tutorial" ,
      link: {
        type: 'generated-index',
        title: 'General tutorial',
        description: 'ArmSoM General Tutorial, Applicable to All ArmSoM Products',
        slug: '/general-tutorial',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'general-tutorial',
      }],
      // items: ['general-tutorial/baidu-cloud'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
