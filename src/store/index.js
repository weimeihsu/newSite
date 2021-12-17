import { createStore } from 'vuex';

// create store
const store =  createStore({
    state: {
      expcs:[
        {
          id:1,
          date: 'May 2019 - Apr 2020',
          icon:require('@/assets/img/company-logo/c6.jpg'),
          title:'UI/UX Designer',
          dept:'Development Team',
          comp:'Bamboo Design and Development',
          loc:'Taipei,Taiwan',
          list:[
            {li:'Brainstormed with team to develope and improve UX flow.'},
            {li:'Worked closely with Product Manager and programers to ensure the application quality.'},
            {li:'Executed design stage from concept to assets for digital development.'},
            {li:'Coordinated with the marketing team and back-end engineers to build up cross-platform environment from webpages to mobile applications.'}
          ]},
        {
          id:2,
          date: 'Jul 2015 - Apr 2019',
          icon:require('@/assets/img/company-logo/c5.jpg'),
          title:'Supervior',
          dept:'Creative Team',
          comp:'Corsair Components',
          loc:'Taipei,Taiwan',
          list:[
            {li:'Led team of 4 employees in Taipei branch. Established responsibilities, clearly defining tasks and improving productivity.'},
            {li:'Produced digital artworks and web mock-ups of product campaign pages.'},
            {li:'Supported print projects of worldwide events or conferences.'},
            {li:'Oversaw regional GTMK assets. Maintained the corporate branding image.'}
          ]
        },
        {
          id:3,
          date: 'Sep 2014 - Jul 2015',
          icon:require('@/assets/img/company-logo/c4.jpg'),
          title:'Senior Create Designer',
          dept:'APAC Creative Team',
          comp:'NVIDIA',
          loc:'Taipei,Taiwan',
          list:[
            {li:'Co-worked with marketing team to accomplish corporate-oriented exhibitions and other related materials.'},
            {li:'Performed key visual design for product launch or promotions.'},
            {li:'Researched region’s visual preference and user experience to come out the best directions for GUI design.'},
            {li:'Responsible for brand consistency across all communication platforms.'}
          ]
        },
        {
          id:4,
          date: 'Feb 2012 - Sep 2014',
          icon:require('@/assets/img/company-logo/c5.jpg'),
          title:'Supervior',
          dept:'Marketing Communication',
          comp:'Nu Skin Great China',
          loc:'Taipei,Taiwan',
          list:[
            {li:'Supported incentive trips with approximately 8,000 attendees a time.'},
            {li:'Managed and executed the design of monthly newspaper and increased readership.'},
            {li:'Partnered with creative agency to develop and launch mobile applications.'},
            {li:'Responsible for website reporting/analytic and collected the Google Analytic data.'},
            {li:'Supported walk-in center renovation.'}
            ]
        },
        {
          id:5,
          date: 'Mar 2010 - Sep 2012',
          icon:require('@/assets/img/company-logo/c2.jpg'),
          title:'Graphic Designer',
          dept:'Marketing Team',
          comp:'Wintec Industries',
          loc:'Touyuan,Taiwan',
          list:[
            {li:'Produced both print and web assets for marketing usage.'},
            {li:'Executed industry trade-show Computext with more than 1,700 exhibitors and 120,000 attendees in 2010.'},
            {li:'Retouched product photos.'},
            {li:'Supervised print quality and made sure the printer meet the lead time.'}
          ]
        }
      ],
      uiuxImages:[
        {
          id:1,
          title:'SingleSignOn',
          path:'/Uiux/sso',
          images: [
            { url: require('@/assets/img/uiux/csp/sso/sso-1.jpg'), alt: 'img-1' },
            { url: require('@/assets/img/uiux/csp/sso/sso-2.jpg'), alt: 'img-2' }
          ]
        },
        {
          id:2,
          title:'Charts',
          path:'/Uiux/chart',
          images: [
            { url: require('@/assets/img/uiux/csp/chart/charts.png'), alt: 'img-1' },
            { url: require('@/assets/img/uiux/csp/chart/chart property.jpg'), alt: 'img-2' },
            { url: require('@/assets/img/uiux/csp/chart/chart data.jpg'), alt: 'img-2' }
          ]
        },
        {
          id:3,
          title:'UserGuide',
          path:'/Uiux/userGuide',
          images: [
            { url: require('@/assets/img/uiux/csp/chart/charts.png'), alt: 'img-1' },
            { url: require('@/assets/img/uiux/csp/chart/chart property.jpg'), alt: 'img-2' },
            { url: require('@/assets/img/uiux/csp/chart/chart data.jpg'), alt: 'img-2' }
          ]
        },
      ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  })
  export default store;