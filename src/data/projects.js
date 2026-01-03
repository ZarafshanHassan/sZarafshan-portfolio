import payMyTuitionImg from '../assets/images/paymytuition.jpg';
import nrpImg from '../assets/images/NRP.jpg';
import cmsHecImg from '../assets/images/project-hec-thumbnail.jpg';
import rtaImg from '../assets/images/RTA.jpg';
import carIjaraImg from '../assets/images/car-ijara.jpg';
import etisalatImg from '../assets/images/etisalat.jpg';

const projects = [
  {id:'paymytuition',title:'PayMyTuition',stack:'Angular, ASP.NET, SQL Server',description:'A global education payments platform that lets students pay tuition in multiple currencies. It simplifies campus billing, refunds, and vendor payments with secure integrations and flexible payment options.',link:'https://www.paymytuition.com/', image: payMyTuitionImg},
  {id:'nrp-hec',title:'National Research Program (HEC)',stack:'Angular, Java, Spring Boot',description:'A research grant system by HEC Pakistan that funds promising scientific and industrial projects. It supports basic and applied research, encouraging collaboration across universities and industry.',link:'https://research.hec.gov.pk/', image: nrpImg},
  {id:'cms-hec',title:'Complaint Management System (HEC)',stack:'Angular, Spring Boot',description:'An online portal for registering, tracking, and resolving complaints or queries against HEC services. It makes communication transparent for users and improves response management internally.',link:'https://onlinehelp.hec.gov.pk/', image: cmsHecImg},
  {id:'rta-uae',title:'Road and Transport Authority (UAE)',stack:'Angular, Java',description:'A digital platform offering services like traffic info, licensing, and e-payments for transport in the UAE. It helps residents manage and use transport-related services in one place.',link:'https://www.rta.ae/wps/portal/rta/ae/home?lang=ar', image: rtaImg},
  {id:'car-ijara',title:'Car Ijara (Meezan Bank)',stack:'Angular, .NET',description:'A financing portal that enables customers to lease cars via Islamic finance (“Ijara”) under boutique banking terms. It offers transparent payment schedules and user-friendly service for vehicle financing.',link:'https://www.meezanbank.com/car-ijarah/', image: carIjaraImg},
  {id:'etisalat',title:'ETISALAT Portal',stack:'Angular, Java',description:'A self-service telecom dashboard letting users manage accounts, pay bills, and control services in the UAE. Focuses on convenience, reliability, and full access to telecom tools online.',link:'https://www.etisalat.ae/en/index.html', image: etisalatImg}
]

export default projects
