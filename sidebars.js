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
  docsSidebar: [
    
      {
        type: 'category',
      label: 'Acronyms',
      items: [
        'Acronyms',
         ],
          },
          {
            type: 'category',
            label: ' Accessing the System',
            items: [
              'Accessing-the-system/Accessing-the-system',
            ],
          },
          
          {
            type: 'category',
            label: ' Setting up the Electronic TB Register',
            items: [
              'Setting-up-the-Electronic-TB-Register/Setting-up-a-User',
              'Setting-up-the-Electronic-TB-Register/Password-policies',
              'Setting-up-the-Electronic-TB-Register/Accessing-the-system',
            ],
          },

          {
            type: 'category',
            label: ' Performing Data Entry into the System',
            items: [
              'Performing-Data-Entry-into-the-System/Performing-Data-Entry-into-the-System',
            ],
          },
          {
            type: 'category',
            label: ' Getting Started',
            items: [
              'Getting-started/Selecting-Register',
              'Getting-started/Entering-records-in-eTB-Register',
              'Getting-started/Handling-Transfer-and-Referrals',
              'Getting-started/Entering-data-about-Adverse-Event',
              'Getting-started/DS-TB-Treatment-Outcome',
              'Getting-started/Entering-data-for-DR-patient',
              'Getting-started/Specimen-submission-for-culture-and-DST-testing',
              'Getting-started/Recording-DR-TB-Treatment-Outcome',
               ],
               },
               {
                type: 'category',
                label: ' Entering records into eLeprosy Register',
                items: [
                  'Entering-records-into-eLeprosy-Register/Entering-records-into-eLeprosy-Register',
                  'Entering-records-into-eLeprosy-Register/Leprosy-Treatment-Outcome',
                  'Entering-records-into-eLeprosy-Register/Enrolling-Leprosy-case-into-POD-treatment',
                ],
              },
              {
                type: 'category',
                label: ' Reports',
                items: [
                  'Reports/Introduction-to-Reporting-Functionality',
                  'Reports/Standard-Report',
                  'Reports/How-to-use-Pivot-Table',
                  'Reports/How-to-use-Data-Visualizer',
                  'Reports/How-to-Use-GIS',
                   ],
                   },
                   {
                    type: 'category',
                    label: 'Dashboard',
                    items: [
                      'Dashboard/Creating-a-Dashboard',
                      'Dashboard/Removing-a-Dashboar-Item',
                      'Dashboard/Saving-a-Dashboard',
                      'Dashboard/Modifying-an-Existing-Dashboard',
                      'Dashboard/Deleting-a-Dashboard',
                      'Dashboard/Dashboard-items-with-charts,pivot-tables-and-maps',
                    ],
                  },
                  {
                    type: 'category',
                    label: ' Message and feedback',
                    items: [
                      'Message-and-feedback/Message-and-Feedback-Overviews',
                      'Message-and-feedback/Compose-a-message',
                      'Message-and-feedback/Read-a-message',
                      'Message-and-feedback/Create-a-feedback-message',
                    ],
                  },
                  {
                    type: 'category',
                    label: ' EQA Forms',
                    items: [
                      'EQA-Forms/EQA-Forms',
                      'EQA-Forms/Selecting-and-entering-data-into-EQA-form',
                      'EQA-Forms/Enter-data-offline',
                      'EQA-Forms/EQA-Reports',
                    ],
                  },
                ],
              }
          
        
export default sidebars;
