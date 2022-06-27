export default {
  // Global
  title: "Header",
  sideMenu: [
    { link: "/", icon: "home", label: "Home" },
    { link: "/completed", icon: "check", label: "Completed" },
    { link: "/logout", icon: "logout", label: "Logout" },
  ],
  navigation: {
    home: [
      { link: "/organization", label: "organization", type: "heading" },
      { link: "/organization/org-1", label: "Org 1", type: "link" },
      { link: "/organization/org-2", label: "Org 2", type: "link" },
      { link: "/organization/org-3", label: "Org 3", type: "link" },
      { link: "/organization/org-4", label: "Org 4", type: "link" },
      { link: "/organization/org-5", label: "Org 5", type: "link" },
      { link: "/settings", label: "settings", type: "heading" },
      { link: "/settings/setting-1", label: "Setting 1", type: "link" },
      { link: "/settings/setting-2", label: "Setting 2", type: "link" },
      { link: "/settings/setting-3", label: "Setting 3", type: "link" },
    ],
    completed: [
      { link: "/completed/vip", label: "VIP", type: "heading" },
      { link: "/completed/vip/org-1", label: "Org 1", type: "link" },
      { link: "/completed/vip/org-2", label: "Org 2", type: "link" },
    ],
  },
  // Pages
  pages: [
    {
      heading: "Just a heading!",
      path: "/",
      content: `
     <p> Bits of moving fluff with pretty stories for which there's little good evidence gathered by gravity another world Hypatia quasar. Hearts of the stars preserve and cherish that pale blue dot billions upon billions with pretty stories for which there's little good evidence two ghostly white figures in coveralls and helmets are softly dancing decipherment. Citizens of distant epochs stirred by starlight vanquish the impossible rich in heavy atoms star stuff harvesting star light take root and flourish?
</p><br/>
<p>
Circumnavigated science inconspicuous motes of rock and gas rings of Uranus how far away something incredible is waiting to be known. The sky calls to us bits of moving fluff kindling the energy hidden in matter courage of our questions vastness is bearable only through love concept of the number one. Vanquish the impossible a very small stage in a vast cosmic arena a very small stage in a vast cosmic arena realm of the galaxies bits of moving fluff preserve and cherish that pale blue dot.
</p><br/>
<p>
Star stuff harvesting star light another world cosmic ocean at the edge of forever shores of the cosmic ocean rogue. Inconspicuous motes of rock and gas as a patch of light not a sunrise but a galaxyrise a still more glorious dawn awaits the carbon in our apple pies how far away. From which we spring Cambrian explosion take root and flourish take root and flourish a mote of dust suspended in a sunbeam of brilliant syntheses and billions upon billions upon billions upon billions
 </p>     `,
    },
    {
      heading: "The Manifesto",
      path: "/completed",
      content: `<p>Billions upon billions hearts of the stars kindling the energy hidden in matter science consectetur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Emerged into consciousness a mote of dust suspended in a sunbeam Ut enim ad minima veniam permanence of the stars Ut enim ad minima veniam emerged into consciousness. Paroxysm of global death sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem nisi ut aliquid ex ea commodi consequatur Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium descended from astronomers Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
 </p>  <br/>
<p>
A still more glorious dawn awaits prime number venture inconspicuous motes of rock and gas sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Flatland. Across the centuries invent the universe not a sunrise but a galaxyrise rich in heavy atoms at the edge of forever finite but unbounded. Invent the universe adipisci velit Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur Cambrian explosion bits of moving fluff emerged into consciousness?
</p><br/>
<p>
Extraplanetary across the centuries with pretty stories for which there's little good evidence Ut enim ad minima veniam vanquish the impossible Vangelis. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit a mote of dust suspended in a sunbeam courage of our questions inconspicuous motes of rock and gas bits of moving fluff Neque porro quisquam est. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium made in the interiors of collapsing stars not a sunrise but a galaxyrise another world qui dolorem ipsum quia dolor sit amet nisi ut aliquid ex ea commodi consequatur.
</p><br/>
<p>
Shores of the cosmic ocean network of wormholes tendrils of gossamer clouds rogue something incredible is waiting to be known cosmos. Explorations nisi ut aliquid ex ea commodi consequatur concept of the number one realm of the galaxies muse about descended from astronomers. Neque porro quisquam est at the edge of forever the only home we've ever known citizens of distant epochs consectetur Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
</p><br/>
<p>
Trillion consciousness citizens of distant epochs network of wormholes Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium finite but unbounded. Emerged into consciousness encyclopaedia galactica Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit nisi ut aliquid ex ea commodi consequatur a billion trillion vanquish the impossible. Made in the interiors of collapsing stars Ut enim ad minima veniam hundreds of thousands consectetur preserve and cherish that pale blue dot two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>`,
    },
    {
      heading: "Wait, leaving so soon?",
      path: "/logout",
      content: `<img src="https://media.giphy.com/media/Ty9Sg8oHghPWg/giphy.gif" alt="me sad"></img>`,
    },
  ],
};
