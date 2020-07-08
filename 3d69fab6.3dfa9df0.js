(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(9),r=(a(0),a(200)),o={id:"billing",title:"Billing"},c={id:"anatomy/billing",isDocsHomePage:!1,title:"Billing",description:"Overview",source:"@site/docs/anatomy/anatomy-billing.md",permalink:"/anatomy/billing",sidebar:"someSidebar",previous:{title:"Advanced Settings",permalink:"/anatomy/advanced"},next:{title:"Web App",permalink:"/service-types/web-app"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Free User Limitations",id:"free-user-limitations",children:[]},{value:"Pay As You Go Benefits",id:"pay-as-you-go-benefits",children:[]},{value:"Billing Operations",id:"billing-operations",children:[{value:"Activate Pay-As-You-Go Billing",id:"activate-pay-as-you-go-billing",children:[]},{value:"Cancel Pay-As-You-Go Billing",id:"cancel-pay-as-you-go-billing",children:[]},{value:"View Invoice &amp; Receipt",id:"view-invoice--receipt",children:[]},{value:"Add or Remove Cards",id:"add-or-remove-cards",children:[]}]},{value:"Pricing Overview",id:"pricing-overview",children:[{value:"CPU Pricing",id:"cpu-pricing",children:[]},{value:"Memory Pricing",id:"memory-pricing",children:[]}]},{value:"Storage Pricing",id:"storage-pricing",children:[]},{value:"Build &amp; Deploy Time Pricing",id:"build--deploy-time-pricing",children:[]},{value:"Bandwidth Pricing",id:"bandwidth-pricing",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"KintoHub uses a ",Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," billing similar to Amazon, Google and Azure.\nOnce a credit card is attached to your account, you will be able to access all the features of KintoHub without any limitations.\nKintoHub does not plan to charge for seats, or specific features aside from the three ways your team may utilize the platform."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Free")," - users may deploy up to ",Object(r.b)("strong",{parentName:"li"},"3 services")," with up to ",Object(r.b)("inlineCode",{parentName:"li"},"256 Mb")," and ",Object(r.b)("inlineCode",{parentName:"li"},"shared cpu")," with minimal limitations"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pay-As-You-Go")," - users have no limits to what they can deploy on the KintoHub Platform."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Private Clusters")," - We provide ",Object(r.b)("strong",{parentName:"li"},"Startup"),", ",Object(r.b)("strong",{parentName:"li"},"Small Business")," and ",Object(r.b)("strong",{parentName:"li"},"Enterprise")," licenses to a private version of the KintoHub platform across your company's multi-cloud, multi-region and on-prem hardware.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Once you have signed up for ",Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," billing, you will ",Object(r.b)("strong",{parentName:"p"},"NOT")," be charged immediately.\nAll charges are made on the 1st of every month and pro-rated by the second."),Object(r.b)("p",{parentName:"div"},"All ",Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," users gets $10 USD of usage charges waved per month"))),Object(r.b)("h2",{id:"free-user-limitations"},"Free User Limitations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"May only deploy up to ",Object(r.b)("inlineCode",{parentName:"li"},"256 Mb")," of memory per service"),Object(r.b)("li",{parentName:"ul"},"May only have ",Object(r.b)("inlineCode",{parentName:"li"},"1")," environment"),Object(r.b)("li",{parentName:"ul"},"Cannot use ",Object(r.b)("strong",{parentName:"li"},"Dedicated CPU"),". All services are ",Object(r.b)("strong",{parentName:"li"},"Shared CPU")," by default"),Object(r.b)("li",{parentName:"ul"},"All services have ",Object(r.b)("strong",{parentName:"li"},"Sleep Mode")," enabled and will sleep after ",Object(r.b)("inlineCode",{parentName:"li"},"1 hour")," of inactivty"),Object(r.b)("li",{parentName:"ul"},"Cannot ",Object(r.b)("strong",{parentName:"li"},"Auto Scale")," your services"),Object(r.b)("li",{parentName:"ul"},"Catalog Persistent Storage is capped at ",Object(r.b)("inlineCode",{parentName:"li"},"1Gb")," of persistence"),Object(r.b)("li",{parentName:"ul"},"Cannot scale any services to multiple instances or replicas.")),Object(r.b)("h2",{id:"pay-as-you-go-benefits"},"Pay As You Go Benefits"),Object(r.b)("p",null,"After entering in your credit card, all ",Object(r.b)("strong",{parentName:"p"},"Free User Limitations")," are lifted.\nAll ",Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," customer's bill will have the following benefits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The first ",Object(r.b)("strong",{parentName:"li"},"10 USD")," of cost usage for ",Object(r.b)("strong",{parentName:"li"},"any")," feature on the platform is waved"),Object(r.b)("li",{parentName:"ul"},"First ",Object(r.b)("inlineCode",{parentName:"li"},"3000 minutes")," of build & deploy time is waived"),Object(r.b)("li",{parentName:"ul"},"First ",Object(r.b)("inlineCode",{parentName:"li"},"100 Gb")," of bandwith is waived")),Object(r.b)("p",null,"Here are some examples that can be deployed for ",Object(r.b)("strong",{parentName:"p"},"FREE")," after becoming a ",Object(r.b)("inlineCode",{parentName:"p"},"pay-as-you-go")," user:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy up to ",Object(r.b)("strong",{parentName:"li"},"5 services")," with ",Object(r.b)("inlineCode",{parentName:"li"},"512 Mb")," memory and ",Object(r.b)("inlineCode",{parentName:"li"},"shared cpu")," enabled."),Object(r.b)("li",{parentName:"ul"},"Deploy a free full stack application with a ",Object(r.b)("strong",{parentName:"li"},"Database"),", ",Object(r.b)("strong",{parentName:"li"},"Web App")," and ",Object(r.b)("strong",{parentName:"li"},"Backedn API"))),Object(r.b)("h2",{id:"billing-operations"},"Billing Operations"),Object(r.b)("h3",{id:"activate-pay-as-you-go-billing"},"Activate Pay-As-You-Go Billing"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to your account"),Object(r.b)("li",{parentName:"ol"},"Click on your ",Object(r.b)("strong",{parentName:"li"},"Account Icon")," at the bottom left of the screen"),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"View Plan")),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Upgrade")," under the ",Object(r.b)("inlineCode",{parentName:"li"},"pay-as-you-go")," plan."),Object(r.b)("li",{parentName:"ol"},"Enter in your ",Object(r.b)("inlineCode",{parentName:"li"},"name")," and ",Object(r.b)("inlineCode",{parentName:"li"},"credit card")," information"),Object(r.b)("li",{parentName:"ol"},"Enjoy KintoHub!")),Object(r.b)("h3",{id:"cancel-pay-as-you-go-billing"},"Cancel Pay-As-You-Go Billing"),Object(r.b)("p",null,"Currently there is no automatic way to cancel due to the complexities of ",Object(r.b)("em",{parentName:"p"},"safely")," downgrading your account.\nPlease ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"contact us")," to cancel your subscription."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Self-serviced downgrade functionality is coming in September 2020"))),Object(r.b)("h3",{id:"view-invoice--receipt"},"View Invoice & Receipt"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to your account"),Object(r.b)("li",{parentName:"ol"},"Click on your ",Object(r.b)("inlineCode",{parentName:"li"},"Account Icon")," at the bottom left of the screen"),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Billing")),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Billing History")," select the ",Object(r.b)("inlineCode",{parentName:"li"},"arrow")," next to the invoice date")),Object(r.b)("h3",{id:"add-or-remove-cards"},"Add or Remove Cards"),Object(r.b)("p",null,"It is not possible to remove your credit card unless you ",Object(r.b)("strong",{parentName:"p"},"Cancel")," your subscription by following the ",Object(r.b)("strong",{parentName:"p"},"Cancel Pay-As-You-Go")," billing above."),Object(r.b)("p",null,"If you wish to update your subscription with a new card, you may follow these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to your account"),Object(r.b)("li",{parentName:"ol"},"Click on your ",Object(r.b)("strong",{parentName:"li"},"Account Icon")," at the bottom left of the screen"),Object(r.b)("li",{parentName:"ol"},"Select Billing"),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Payment Method")," click ",Object(r.b)("inlineCode",{parentName:"li"},"Add payment method")),Object(r.b)("li",{parentName:"ol"},"Once your new payment method is added, click ",Object(r.b)("inlineCode",{parentName:"li"},"Set Default Payment Method")," to your new card"),Object(r.b)("li",{parentName:"ol"},"Optionally, you may now remove your original card that was on the account.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This option will not show unless you are a paying user."))),Object(r.b)("h2",{id:"pricing-overview"},"Pricing Overview"),Object(r.b)("p",null,"All charges are pro-rated per second.\nDepending on the type of resources you are being charged for, you are also pro-rated by its type:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"vCPU")," is pro-rated up to 1/10th ",Object(r.b)("inlineCode",{parentName:"li"},"10%")," of a virtual cpu core.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This means if you select ",Object(r.b)("inlineCode",{parentName:"em"},"0.1")," vCPU, it will cost you $1.5 USD per month pro rated by the second versus the full cost of $15 USD for a full ",Object(r.b)("inlineCode",{parentName:"em"},"100%")," dedicated vCPU")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Memory")," is pro-rated per Mb.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This means if you select ",Object(r.b)("inlineCode",{parentName:"em"},"32")," Mb of memory, it will cost you $0.09 USD per month pro rated by the second versus the full cost of $3 USD per month")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Storage")," is pro rated per Mb per second"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Bandwidth")," is pro rated per Mb")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To learn more of how to estimate your costs, visit the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/anatomy/advanced#max-monthly-cost-estimation"}),"Advanced Settings")," tab."))),Object(r.b)("h3",{id:"cpu-pricing"},"CPU Pricing"),Object(r.b)("p",null,"CPU cost are broken down into three catgories and is charged per second:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Shared CPU")," - $1 USD /month"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dedicated CPU with Optimization Enabled")," - $15 USD /month "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dedicated CPU with Optimization Disabled")," - $30 USD /month")),Object(r.b)("p",null,"The smallest amount of ",Object(r.b)("strong",{parentName:"p"},"Dedicated CPU")," available is ",Object(r.b)("inlineCode",{parentName:"p"},"0.1")," or ",Object(r.b)("inlineCode",{parentName:"p"},"10%")," of a CPU core which costs $1.50 USD per month."),Object(r.b)("h3",{id:"memory-pricing"},"Memory Pricing"),Object(r.b)("p",null,"Memory cost are broken down into two categories and is charged per second:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1 Gb Memory with Optimization Enabled")," - $2 USD /month"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1 Gb Memory with Optimization Disabled")," - $7 USD /month")),Object(r.b)("h2",{id:"storage-pricing"},"Storage Pricing"),Object(r.b)("p",null,"Persistent storage disks sit on solid state drives (SSDs) and are charged per second:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1 Gb Storage")," - $0.28 (28 cents) /month")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Right now the only storage KintoHub charges for is Catalog Service disks."),Object(r.b)("p",{parentName:"div"},"In the future it may also include ",Object(r.b)("strong",{parentName:"p"},"Backups"),", ",Object(r.b)("strong",{parentName:"p"},"Build Artifacts")," and ",Object(r.b)("strong",{parentName:"p"},"Log History")," with the option to automatically delete after a specific amount of days."))),Object(r.b)("h2",{id:"build--deploy-time-pricing"},"Build & Deploy Time Pricing"),Object(r.b)("p",null,"Build and Deploy tasks are usually heavy operations and are broken down into two categories and are charged per second."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"First 3000 Build & Deploy Seconds")," - FREE!"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1 Build & Deploy Second")," - $0.0000167 per second or $0.001 (1/10th) of a cent per second.")),Object(r.b)("h2",{id:"bandwidth-pricing"},"Bandwidth Pricing"),Object(r.b)("p",null,"Bandwidth cost are broken down into 3 categories"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Static Websites")," - have unlimited bandwidth."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"First 100 GB Bandwidth")," - FREE!"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1 Gb bandwidth")," - $0.12 or 12 cents pro-rated to the megabyte.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Bandwidth is currently 100% Free Until October 2020"))))}s.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,c(c({ref:t},b),{},{components:a})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);