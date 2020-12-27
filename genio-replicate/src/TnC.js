import React, { useRef, useState, useEffect } from 'react'
// import './App.css';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from 'react-responsive'
import Header from "./Header"
import Footer from "./footer.js"

function App() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  let id = 0
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-height: 600px)'
  })
  
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const buttoncheck = useMediaQuery({ query: '(max-width: 1068px) and (min-width: 960px)' })
  const ipad = useMediaQuery({ query: '(max-width: 960px) and (min-width: 600px)' })
  const issomething = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const onError = (e) => {
    console.log(e, 'error in file-viewer');
  }
  const data = () => {

  return (
    <div>
      <Header />
      <center style={{marginTop: 100}}>
      <h2>Terms of Use</h2>
      <div style={{ width: isTabletOrMobile ? "90%" : "60%" }}>
<p dir="ltr" className="docCss"><span className="docSpan">THESE TERMS AND CONDITIONS (&ldquo;TERMS OF USE&rdquo;) DOCUMENT IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER THE INFORMATION TECHNOLOGY ACT, 2000 AND THE RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THESE TERMS OF USE DO NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">THIS DOCUMENT IS PUBLISHED AND SHALL BE CONSTRUED IN ACCORDANCE WITH THE PROVISIONS OF RULE 3 (1) OF THE INFORMATION TECHNOLOGY (INTERMEDIARIES GUIDELINES) RULES, 2011 PRESCRIBED UNDER INFORMATION TECHNOLOGY ACT, 2000 THAT REQUIRE PUBLISHING THE RULES AND REGULATIONS, PRIVACY POLICY AND USER AGREEMENT FOR ACCESS OR USAGE OF THE WEBSITE.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">THESE TERMS OF USE IS A LEGALLY BINDING DOCUMENT BETWEEN GENIO AND USER (BOTH TERMS DEFINED BELOW). THESE TERMS OF USE WILL BE EFFECTIVE UPON YOUR ACCEPTANCE OF THE SAME (DIRECTLY OR INDIRECTLY IN ELECTRONIC FORM OR BY MEANS OF AN ELECTRONIC RECORD) AND WILL GOVERN THE RELATIONSHIP BETWEEN GENIO AND USER FOR THE USE OF THE WEBSITE, MOBILE APPLICATION OR OTHER SERVICES (DEFINED BELOW).</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">PLEASE READ THESE TERMS OF USE CAREFULLY. BY USING THE WEBSITE, MOBILE APPLICATION OR OTHER SERVICES, YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THESE TERMS OF USE. IF YOU DO NOT AGREE WITH THE TERMS OF THESE TERMS OF USE, PLEASE DO NOT USE THIS WEBSITE, MOBILE APPLICATION OR OTHER SERVICES. YOU HEREBY PROVIDE YOUR UNCONDITIONAL CONSENT OR AGREEMENT TO GENIO AS PROVIDED UNDER SECTION 43A AND SECTION 72A OF INFORMATION TECHNOLOGY ACT, 2000.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">These Terms of Use of the website located at the URL www.genio.app , mobile sites, mobile application and other services (&ldquo;Services&rdquo;) is between Genio (&ldquo;Genio&rdquo; or &ldquo;We&rdquo; or &ldquo;Us&rdquo; or &ldquo;Our&rdquo;), and the guest users or registered users of the Services (&ldquo;You&rdquo; or &ldquo;Your&rdquo; or &ldquo;Yourself&rdquo; or &ldquo;User&rdquo;) describe the terms on which Genio offers You access to the Services.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">These Terms of Use is a contract between You and Genio. These Terms of Use shall be read together with the Privacy Policy or other terms and condition with all other notices, disclaimers, guidelines appearing on the Services from time to time (collectively referred to as &ldquo;Agreement(s)&rdquo;) constitute the entire agreement upon which You are allowed to access and use the Services.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">&nbsp;</span></p>
<h3 dir="ltr" >INTERPRETATION</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Any reference to the singular includes a reference to the plural and vice versa, unless explicitly provided for otherwise; and any reference to the masculine includes a reference to the feminine and vice versa. Headings and captions are used for convenience only and will not affect the interpretation of these Terms of Use. Any reference to a natural person will, unless repugnant to the context, include his heirs, executors and permitted assignees. Similarly, any reference to a juristic person such as Genio will, unless repugnant to the context, include its affiliates, successors and permitted assignees.</span></p>
<h3 dir="ltr" >ELIGIBILITY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Only Users who are 18 years of age or older may use the Services. If You are under 18 years of age and You wish to download, install, access or use the Services, Your parents or legal guardian must acknowledge and agree to the Terms of Use. Should Your parents or legal guardian fail to agree or acknowledge the Terms of Use, You shall immediately discontinue its use. Genio reserves the right to refuse access to use the Services offered if it is brought to Genio&rsquo;s notice or if it is discovered that You are under the age of 18 years.</span></p>
<h3 dir="ltr" >ACCOUNT REGISTRATION AND SECURITY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">You may access and use the Services either as a registered user or as a guest user. However, not all sections of the Services will be accessible to guest users. Registered users: Genio makes certain sections of the Services available to You only if You have provided Genio certain required User information and created an account and a Genio ID by providing your email Id and signing in through the OTP/url you receive via email (&ldquo;Account&rdquo;). In the event You register as a User by creating an Account in order to avail of the Services provided by Genio, You will be responsible for maintaining the confidentiality and security of the Account, and are fully responsible for all activities that occur under Your Account. You agree to (a) immediately notify Genio of any unauthorized use of Your Account Information or any other breach of security, and (b) ensure that You exit from Your Account at the end of each session. Genio cannot and will not be liable for any loss or damage arising from Your failure to comply with this section. You may be held liable for losses incurred by Genio or any other user of or visitor to the Services due to authorized or unauthorized use of Your Account as a result of Your failure in keeping Your Account Information secure and confidential. You shall ensure that the Account information provided by You in the Services&rsquo; registration form is complete, accurate and up-to-date. Use of another user&rsquo;s Account information for availing the Services is expressly prohibited. If You provide any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or Genio has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Genio has the right to suspend or terminate Your Account and refuse any and all current or future use of the Services (or any portion thereof). Guest users: Genio also allows limited access to the Services for unregistered Users (also called as &lsquo;guest users&rsquo;). Such users will be able to browse the landing pages of the Services in order to determine if they choose to register for the Services.</span></p>
<h3 dir="ltr" >USE OF THE SERVICES</h3>
<p dir="ltr" className="docCss"><span className="docSpan">You agree and undertake that when using the Services, You will not:</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; conduct or forward surveys, contests, pyramid schemes or chain letters; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded; any information provided by You on this site shall not be misleading in any way; use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Services, or in any way reproduce or circumvent the navigational structure or presentation of the Services, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Services; reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Services.</span></p>
<h3 dir="ltr" >PAYMENT &amp; REFUND</h3>
<p dir="ltr" className="docCss"><span className="docSpan">You shall be responsible for payment of all fees/costs/charges associated with the Services availed or to be availed from Us and You agree to bear any and all applicable taxes cesses etc. levied thereon. All major Credit/Debit Cards, RTGS/NEFT Transfer are all acceptable methods of payment through the payment gateway Razorpay. In addition, there may be other avenues for payment from time to time. You agree to make payment as soon as you choose to register for the Services for a predefined period. Genio reserves the right to cancel an ongoing or future Services.</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">No refunds shall be offered where a service period is deemed to have begun and is, for all intents and purposes, underway. Genio reserves the right to frame refund policy from time to time or case to case basis.</span></p>
<h3 dir="ltr" >THIRD PARTY CONTENTS</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Links on the Services to third party websites are provided solely for Your convenience. If You use these links, You are no longer using the Services. Genio has not reviewed these third party websites and does not control and is not responsible for these websites or their content or availability. Genio therefore does not endorse or make any representations about them, or any material found on them, or any results that may be obtained from using them. If You decide to access any of the third party websites linked to the Services, you do so entirely at Your own risk. We cannot and will not assure that other users are or will be complying with the foregoing rules or any other provisions of these Terms of Use, and, as between You and Us, You hereby assume all risk of harm or injury resulting from any such lack of compliance. You may link to section of the Services only with the prior written consent of Genio and subject always to the obligations set out in this Agreement. If You wish to do so, please contact Genio using the contact details shown on the &ldquo;Contact Us&rdquo; section of the Services.</span></p>
<h3 dir="ltr" >PRIVACY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Genio&rsquo;s Privacy Policy applies to use of these Services, and its terms are made a part of these Terms of Use by this reference. To view Genio&rsquo;s Privacy Policy, please visit&nbsp;</span><a href="https://genio.app/privacy" ><span>https://genio.app/privacy</span></a><span>&nbsp;. Additionally, by using the Services, You acknowledge and agree that Internet transmissions are never completely private or secure. You understand that any message or information You send to the Services may be read or intercepted by others, even if there is a special notice that a particular transmission is encrypted.</span></p>
<h3 dir="ltr" >COMMUNICATIONS</h3>
<p dir="ltr" className="docCss"><span className="docSpan">When You use the Services or send emails or other data, information or communication to Us, You agree and understand that You are communicating with Us through electronic records and You consent to receive communications via electronic records from Us periodically and as and when required. We may communicate with You by email or by such other mode of communication, electronic or otherwise.</span></p>
<h3 dir="ltr" >INTELLECTUAL PROPERTY RIGHTS</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Nothing contained in these Terms of Use constitutes a license in favour of the User to use trademarks, service marks or logos and/or any other marks, owned by Genio that may be reflected on the Services (&ldquo;IPR&rdquo;). Any use by User of IPR will be only with the prior written permission from Us. You acknowledge that We are the sole and exclusive owner of our respective IPR&rdquo;s and agree that You will not contest the ownership of the said IPR&rdquo;s for any reason whatsoever. You agree not to circumvent, disable or otherwise interfere with security related features of the Services or features that prevent or restrict use or copying of any materials or enforce limitations on use of the Services or the materials therein. The Service is protected to the maximum extent permitted by copyright laws, other laws, and international treaties. Content displayed on or through the Services is protected by copyright as a collective work and/or compilation, pursuant to copyrights laws. The materials on the Services or otherwise may not be modified, copied, reproduced, distributed, republished, downloaded, displayed, sold, compiled, posted or transmitted in any form or by any means, including but not limited to, electronic, mechanical, photocopying, recording or other means.</span></p>
<h3 dir="ltr" >NO WARRANTIES</h3>
<p dir="ltr" className="docCss"><span className="docSpan">The Services are provided on an &ldquo;as is&rdquo; basis. We do not make any other representations or warranties of any kind, express or implied, including without limitation that the Services will meet Your requirements, will always be available, accessible, uninterrupted, timely, secure, or operate without error.</span></p>
<h3 dir="ltr" >INDEMNITY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">You shall indemnify and hold harmless Genio, its owner, licensee, affiliates (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys&rsquo; fees, made by any third party or penalty imposed due to or arising out of your breach of these Terms of Use, Privacy Policy and other terms and conditions, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.</span></p>
<h3 dir="ltr" >LIMITATION OF LIABILITY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Except where prohibited by law, in no event will Genio be liable to You for any indirect, consequential, exemplary, incidental or punitive damages, including lost profits, even if Genio has been advised of the possibility of such damages. If, notwithstanding the other provisions of these Terms of Use, Genio is found to be liable to You for any damage or loss which arises out of or is in any way connected with Your use of the Services or any content, Genio&rsquo;s liability shall in no event exceed the INR 100 / &ndash; (Indian Rupees One Hundred only). Some jurisdictions do not allow limitations of liability, so the foregoing limitation may not apply to You.</span></p>
<h3 dir="ltr" >UPDATES</h3>
<p dir="ltr" className="docCss"><span className="docSpan">We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. We suggest that You regularly check these Terms of Use to apprise Yourself of any updates. Your continued use of the Services following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Services.</span></p>
<h3 dir="ltr" >SEVERABILITY</h3>
<p dir="ltr" className="docCss"><span className="docSpan">If any of these terms should be determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state in which these terms are intended to be effective, then to the extent and within the jurisdiction which that term is illegal, invalid or unenforceable, it shall be severed and deleted and the remaining Terms of Use shall survive, remain in full force and effect and continue to be binding and enforceable.</span></p>
<h3 dir="ltr" >NON-ASSIGNMENT</h3>
<p dir="ltr" className="docCss"><span className="docSpan">You shall not assign or transfer or purport to assign or transfer the contract between You and Us to any other person.</span></p>
<h3 dir="ltr" >DISPUTE RESOLUTION</h3>
<p dir="ltr" className="docCss"><span className="docSpan">All disputes arising out of or in relation to these Terms of Use, including any question regarding its existence, validity or termination, which cannot be amicably resolved by the Parties within 15 days of being brought to their attention (such 15 day period is referred to as the &ldquo;Consultation Period&rdquo;), shall be settled by arbitration governed by the provisions of Arbitration and Conciliation Act, 1996. If the parties are not able to agree on a sole arbitrator, a panel of three arbitrators shall be appointed wherein each Party shall appoint one arbitrator within 15 days of the expiry of the Consultation Period, and the two arbitrators together shall appoint the presiding arbitrator within 15 days of the appointment of the last of the two arbitrators. The venue/seat of Arbitration shall be Bangalore and the language of arbitration shall be English. A dispute shall be deemed to have arisen when either Party notifies the other Party in writing to that effect.</span></p>
<h3 dir="ltr" >GOVERNING LAW AND JURISDICTION</h3>
<p dir="ltr" className="docCss"><span className="docSpan">Subject to Clause 16, these Terms of Use are governed by the laws of India. Any action, suit, or other legal proceeding, which is commenced to resolve any matter arising under or relating to these Services, shall be subject to the jurisdiction of the courts at Bangalore, India.</span></p>
<h3 dir="ltr" >GRIEVANCE OFFICER</h3>
<p dir="ltr" className="docCss"><span className="docSpan">In accordance with Information Technologncey Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">Name: Piyush Mayank</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">Address: Genio, Ittina Shivas, Agara, HSR Layout, Bangalore &ndash; 560102</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">Phone: +91 8861024466</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">Email: support@genio.app</span></p>
<p dir="ltr" className="docCss"><span className="docSpan">Time: 9.00 am &ndash; 11.00 am</span></p>
</div>
</center>
      <Footer />
    </div>
    );
  }
  
  return (
    data()

  );
}

export default App;