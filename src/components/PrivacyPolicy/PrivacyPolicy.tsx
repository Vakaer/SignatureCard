import React from 'react'
import Navbar from '../Navabar'
import './PrivacyPolicy.css'
import { Footer } from '../Footer/Footer'
import { relative } from 'path'

export const PrivacyPolicy = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div className='video-background-privacy-policy'>
        </div>
        <div className='col-10 text-light bg'>
          <div className='container p-5'>
            <h1 className='main-title '>Privacy Policy</h1>
            <div style={{ marginLeft: '2rem', }}>
              <p style={{ fontSize: '32px', marginTop: '6rem' }}>Privacy Note</p>
              <section className='effective-date' style={{ marginTop: '5rem' }}>
                <p className='title'>Effective Date: 08/23/2018</p>
                <p className='ms-5'>This privacy notice discloses the privacy practices for Lion Credit Card This privacy notice applies solely to information collected by this website, except where stated otherwise. It will notify you of the following</p>
                <ul className='list' >
                  <li className='list-item' >What information we collect;</li>
                  <li className='list-item'>With whom it is shared;</li>
                  <li className='list-item'>How it can be corrected;</li>
                  <li className='list-item'>How it is secured;</li>
                  <li className='list-item'>How policy changes will be communicated; and</li>
                  <li className='list-item'>How to address concerns over misuse of personal data.</li>
                </ul>
              </section>

              <section className='collection-use-and-sharing section-mt-5rem'>
                <p className='title'>Information Collection, Use, and Sharing</p>
                <div className='ms-5'>
                  <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                  <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship an order</p>
                  <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                </div>
              </section>

              <section className='access-and-control section-mt-5rem'>
                <p className='title'>Your Access to and Control Over Information</p>
                <p className='ms-5'>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number provided on our website:</p>
                <ul className='list'>
                  <li className='list-item'>See what data we have about you, if any.</li>
                  <li className='list-item'>Change/correct any data we have about you.</li>
                  <li className='list-item'>Have us delete any data we have about you.</li>
                  <li className='list-item'>Express any concern you have about our use of your data.</li>
                </ul>
              </section>

              <section className='security section-mt-5rem'>
                <p className='title'>Security</p>
                <p className='ms-5'>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for “https” at the beginning of the address of the web page.</p><br></br>
                <p className='ms-5'>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (e.g, billing or customer service) are granted access to personally identifiable information. The computers/servers on which we store personally identifiable information are kept in a secure environment</p>
              </section>

              <section className='notification-of-changes section-mt-5rem'>
                <p className='title'>Notification of Changes</p>
                <p className='ms-5'>Whenever material changes are made to the privacy notice specify how you will notify consumers.
                </p>
                <p className='ms-5'>If you feel that we are not abiding by this privacy policy, you should contact us immediately by phone at 000 000-0000  or via email at signaturecard@gmail.com</p>
              </section>

              <section className='orders section-mt-5rem'>
                <p className='title'>Orders</p>
                <p className='ms-5'>We request information from you on our order form. To buy from us, you must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill your orders. If we have trouble processing an order, we’ll use this information to contact you.
                </p>
              </section>

              <section className='cookies section-mt-5rem'>
                <p className='title'>Cookies</p>
                <p className='ms-5'>We use “cookies” on this site. A cookie is a piece of data stored on a site visitor’s hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance their experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.</p>
                <p className='ms-5'>Some of our business partners may use cookies on our site (e.g., advertisers). However, we have no access to or control over these cookies.</p>
              </section>

              <section className='sharing section-mt-5rem'>
                <p className='title'>Sharing</p>
                <p className='ms-5'>We share aggregated demographic information with our partners and advertisers. This is not linked to any personal information that can identify any individual person.

                  <br></br>
                  <br></br>
                  <br></br>
                  And/or:<br></br><br></br>

                  We use an outside shipping company to ship orders, and a credit card processing company to bill users for goods and services. These companies do not retain, share, store or use personally identifiable information for any secondary purposes beyond filling your order.
                  <br></br>
                  <br></br>
                  <br></br>
                  And/or:<br></br><br></br>

                  We partner with another party to provide specific services. When the user signs up for these services, we will share names, or other contact information that is necessary for the third party to provide these services. These parties are not allowed to use personally identifiable information except for the purpose of providing these services.
                </p>
              </section>

              <section className='links section-mt-5rem'>
                <p className='title'>Links</p>
                <p className='ms-5'>This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
              </section>

              <section className='surveys section-mt-5rem'>
                <p className='title'>Surveys & Contests </p>
                <p className='ms-5'>From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</p>
              </section>
            </div>

          </div>
        </div >
      </div>
      <Footer />
    </>
  )
}
