import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Accordion } from 'react-bootstrap'

const openRoles = () => {
  return (
    <div>
        <Header/>
        <Accordion style={{marginTop:"50px"}}>
                <div id='openRolesMain'>
            <Accordion.Item eventKey="0" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Logistics Coordinator</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>Job ID: CC-1009</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup. <br />
                            <b>Job Summary:</b> We are seeking a detail-oriented Logistics Coordinator to join our team. The ideal candidate will manage the supply chain process, ensuring timely delivery of products and efficient inventory management. You will work closely with vendors, transportation providers, and internal teams to streamline operations and improve customer satisfaction.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>Coordinate and oversee logistics operations from procurement to delivery.</li>
                                <li>Manage relationships with suppliers, vendors, and transportation providers.</li>
                                <li>Schedule and track shipments to ensure timely deliveries.</li>
                                <li>Monitor inventory levels and coordinate restocking as needed.</li>
                                <li>Prepare and maintain accurate shipping and receiving documentation.</li>
                                <li>Analyze logistics data to identify trends and areas for improvement.</li>
                                <li>Resolve any issues related to transportation, shipping, or inventory discrepancies.</li>
                                <li>Collaborate with cross-functional teams to enhance supply chain efficiency.</li>
                                <li>Ensure compliance with company policies and relevant regulations.</li>
                            </ul>

                            <p><b>Qualifications:</b></p>
                            <ul>
                                <li>Bachelor’s degree in Logistics, Supply Chain Management, or related field (preferred).</li>
                                <li>Proven experience in logistics coordination or supply chain management.</li>
                                <li>Strong organizational and multitasking skills.</li>
                                <li>Proficient in logistics software and Microsoft Office Suite.</li>
                                <li>Excellent communication and negotiation skills.</li>
                                <li>Problem-solving mindset and attention to detail.</li>
                                <li>Ability to work in a fast-paced environment and adapt to changing priorities.</li>
                            </ul>

                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Competitive salary and performance-based bonuses.</li>
                                <li>Health, dental, and vision insurance.</li>
                                <li>Retirement savings plan.</li>
                                <li>Opportunities for professional development and advancement.</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Supply Chain Manager</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>ob ID: CC-1010</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup. <br />
                            <b>Job Summary:</b> We are seeking a detail-oriented Supply Chain Manager to join our team. The ideal candidate will manage the supply chain process, ensuring timely delivery of products and efficient inventory management. You will work closely with vendors, transportation providers, and internal teams to streamline operations and improve customer satisfaction.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>Develop and execute supply chain strategies that align with CafeCold’s business goals.</li>
                                <li>Manage relationships with suppliers, negotiating contracts and ensuring compliance with quality standards.</li>
                                <li>Oversee inventory management, ensuring optimal stock levels to meet customer demand while minimizing excess.</li>
                                <li>Coordinate logistics operations, including transportation, warehousing, and distribution of goods.</li>
                                <li>Analyze supply chain data and metrics to identify trends, forecast demand, and drive continuous improvement initiatives.</li>
                                <li>Collaborate with cross-functional teams, including production, sales, and finance, to ensure alignment and efficiency across operations.</li>
                                <li>Monitor industry trends and best practices, recommending process improvements and technology solutions.</li>
                                <li>Prepare and present reports on supply chain performance to senior management.</li>
                            </ul>

                            <p><b>Qualifications:</b></p>
                            <ul>
                                <li>Bachelor’s degree in Supply Chain Management, Business Administration, or a related field; MBA preferred.</li>
                                <li>Years of experience in supply chain management or logistics.</li>
                                <li>Strong understanding of supply chain processes and logistics.</li>
                                <li>Proficiency in supply chain software and data analysis tools.</li>
                                <li>Excellent negotiation, communication, and leadership skills.</li>
                                <li>Ability to work in a fast-paced environment and manage multiple priorities.</li>
                            </ul>

                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Competitive salary and benefits package</li>
                                <li>Opportunities for professional growth and development</li>
                                <li>A collaborative and innovative work environment</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Freight Forwarder</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>ob ID: CC-1011</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup. <br />
                            <b>Job Summary:</b> The Freight Forwarder is responsible for coordinating and managing the transportation of goods on behalf of clients. This role involves liaising with carriers, managing shipping documentation, and ensuring timely and cost-effective delivery of shipments.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>Coordinate the shipment of goods from origin to destination, ensuring compliance with all regulations and requirements.</li>
                                <li>Prepare and manage shipping documentation, including bills of lading, invoices, and customs declarations.</li>
                                <li>Communicate with clients to understand their shipping needs and provide updates on shipment status.</li>
                                <li>Negotiate freight rates with carriers and ensure the best pricing options for clients.</li>
                                <li>Track shipments and resolve any issues that may arise during transit.</li>
                                <li>Collaborate with customs brokers to ensure timely clearance of shipments.</li>
                                <li>Maintain accurate records of all shipments, including documentation and communication with clients and carriers.</li>
                                <li>Monitor market trends and changes in logistics regulations to keep clients informed.</li>
                                <li>Provide excellent customer service and support to clients, addressing any inquiries or concerns.</li>
                                <li>Prepare and present reports on supply chain performance to senior management.</li>
                            </ul>

                            <p><b>Qualifications:</b></p>
                            <ul>
                                <li>Bachelor’s degree in logistics, supply chain management, business administration, or a related field is preferred; equivalent experience will be considered.</li>
                            </ul>
                            <p><b>Experience:</b></p>
                            <ul>
                                <li>2+ years of experience in freight forwarding, logistics, or a related field.</li>
                                <li>Familiarity with international shipping regulations and customs procedures is essential.</li>
                            </ul>

                            <p><b>Skills:</b></p>
                            <ul>
                                <li>Strong organizational skills with the ability to manage multiple shipments and deadlines.</li>
                                <li>Excellent communication and interpersonal skills for effective client and carrier interactions.</li>
                                <li>Proficiency in logistics software and Microsoft Office Suite.</li>
                                <li>Strong negotiation skills and attention to detail.</li>
                            </ul>

                            <p><b>Attributes:</b></p>
                            <ul>
                                <li>Problem-solving mindset with the ability to think critically and make informed decisions.</li>
                                <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
                                <li>Adaptability to changing situations and priorities.</li>
                            </ul>

                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Competitive salary and benefits package</li>
                                <li>Opportunities for professional growth and development</li>
                                <li>A collaborative and innovative work environment</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Customer Service Expert</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>ob ID: CC-1012</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup. <br />
                            <b>Job Summary:</b> The Customer Service Expert is responsible for delivering exceptional service to customers by addressing inquiries, resolving issues, and ensuring a positive customer experience. This role requires excellent communication skills, problem-solving abilities, and a strong commitment to customer satisfaction.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>Respond to customer inquiries via phone, email, or chat in a timely and professional manner.</li>
                                <li>Provide accurate information regarding products, services, and company policies.</li>
                                <li>Resolve customer issues and complaints effectively, ensuring a satisfactory outcome.</li>
                                <li>Maintain detailed records of customer interactions and transactions in the CRM system.</li>
                                <li>Identify trends in customer inquiries and provide feedback to management for continuous improvement.</li>
                                <li>Collaborate with other departments to address customer needs and improve service delivery.</li>
                                <li>Assist in training new customer service representatives and share best practices.</li>
                                <li>Participate in team meetings and contribute ideas for enhancing customer service processes.</li>
                                <li>Stay updated on product knowledge, company policies, and industry trends.</li>
                            </ul>

                            {/* <p><b>Qualifications:</b></p>
                            <ul>
                                <li>Bachelor’s degree in logistics, supply chain management, business administration, or a related field is preferred; equivalent experience will be considered.</li>
                            </ul> */}
                            <p><b>Education:</b></p>
                            <ul>
                                <li>High school diploma or equivalent; a bachelor’s degree in business, communications, or a related field is preferred.</li>
                            </ul>

                            <p><b>Experience:</b></p>
                            <ul>
                                <li>2+ years of experience in customer service or a related field.</li>
                                <li>Experience in a fast-paced environment, preferably in a call center or retail setting.</li>
                            </ul>

                            <p><b>Skills:</b></p>
                            <ul>
                                <li>Excellent verbal and written communication skills.</li>
                                <li>Strong problem-solving skills with a customer-focused mindset.</li>
                                <li>Proficient in using customer service software and Microsoft Office Suite.</li>
                                <li>Ability to handle difficult situations with patience and professionalism.</li>
                            </ul>

                            <p><b>Attributes:</b></p>
                            <ul>
                                <li>Strong attention to detail and ability to multitask.</li>
                                <li>Empathetic and approachable demeanor with a genuine desire to help customers.</li>
                                <li>Ability to work independently and as part of a team.</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Warehouse Supervisor</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>ob ID: CC-1013</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup.<br />
                            <b>Job Summary:</b> The Warehouse Supervisor is responsible for overseeing daily warehouse operations, ensuring efficient and accurate handling of inventory, and managing a team of warehouse staff. This role requires strong leadership skills, a focus on safety and compliance, and the ability to optimize warehouse processes.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>High school diploma or equivalent; bachelor’s degree in logistics, supply chain management, or related field preferred.</li>
                                <li>Proven experience in warehouse management or supervisory role (3+ years preferred).</li>
                                <li>Strong knowledge of warehouse operations and inventory management systems.</li>
                                <li>Excellent leadership and team management skills.</li>
                                <li>Proficient in using warehouse management software and Microsoft Office Suite.</li>
                                <li>Strong organizational skills and attention to detail.</li>
                                <li>Effective communication and problem-solving abilities.</li>
                                <li>Ability to work in a fast-paced environment and manage multiple tasks simultaneously.</li>
                                <li>Forklift certification (or willingness to obtain) is a plus.</li>
                                <li>Prepare and present reports on supply chain performance to senior management.</li>
                            </ul>

                            <p><b>Education:</b></p>
                            <ul>
                                <li>High school diploma or equivalent; a bachelor’s degree in logistics, supply chain management, business administration, or a related field is preferred.</li>
                            </ul>

                            <p><b>Experience:</b></p>
                            <ul>
                                <li>1+ years of experience in warehouse operations, logistics, or supply chain management.</li>
                                <li>Previous supervisory or management experience in a warehouse setting is highly desirable.</li>
                            </ul>

                            <p><b>Skills:</b></p>
                            <ul>
                                <li>Strong understanding of warehouse management systems (WMS) and inventory control processes.</li>
                                <li>Proficiency in Microsoft Office Suite (Excel, Word, Outlook) and familiarity with warehouse management software.</li>
                                <li>Excellent leadership and team-building skills, with the ability to motivate and manage a diverse team.</li>
                                <li>Strong organizational and time-management skills, with a keen attention to detail.</li>
                                <li>Effective verbal and written communication skills.</li>
                            </ul>

                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Competitive salary and performance-based bonuses.</li>
                                <li>Health, dental, and retirement benefits.</li>
                                <li>Opportunities for career advancement and professional development.</li>
                                <li>Competitive salary and benefits package.</li>
                                <li>Opportunities for professional growth and development.</li>
                                <li>A collaborative and innovative work environment.</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className='accordionSub'>
                    <Accordion.Header>
                        <p className='openRolesHeading'>Inventory Control Specialist</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='openRolesBody'>
                            <p>Location: Bangalore <br/>
                            Company: Cafe Cold <br />
                            Job Type: Full-Time  <b>ob ID: CC-1014</b></p>

                            <p><b>About Us:</b> Cafe Cold is dedicated to providing exceptional products and services while fostering a dynamic and innovative workplace. Our mission is to deliver quality and sustainability in every cup.<br />
                            <b>Job Summary:</b> The Inventory Control Specialist is responsible for maintaining accurate inventory records, managing stock levels, and ensuring the efficient flow of materials throughout the organization. This role involves conducting regular inventory audits, analyzing data, and collaborating with various departments to optimize inventory management.</p> 

                            <p><b>Key Responsibilities:</b></p>
                            <ul>
                                <li>Monitor inventory levels and ensure stock accuracy through regular audits and cycle counts.</li>
                                <li>Maintain and update inventory records in the inventory management system.</li>
                                <li>Investigate discrepancies in inventory counts and resolve issues in a timely manner.</li>
                                <li>Collaborate with purchasing and warehouse teams to ensure adequate stock levels and timely replenishment.</li>
                                <li>Analyze inventory data to identify trends, optimize stock levels, and minimize excess inventory.</li>
                                <li>Assist in the development and implementation of inventory control policies and procedures.</li>
                                <li>Prepare and maintain reports on inventory metrics, including turnover rates and stock levels.</li>
                                <li>Support the annual physical inventory process and assist with inventory reconciliation.</li>
                                <li>Train and support warehouse staff on inventory management best practices.</li>
                            </ul>

                            <p><b>Education:</b></p>
                            <ul>
                                <li>High school diploma or equivalent; a bachelor’s degree in business, logistics, or a related field is preferred.</li>
                            </ul>

                            <p><b>Experience:</b></p>
                            <ul>
                                <li>2+ years of experience in inventory management or a related field.</li>
                                <li>Familiarity with inventory management software and systems.</li>
                            </ul>

                            <p><b>Skills:</b></p>
                            <ul>
                                <li>Strong analytical skills with attention to detail and accuracy.</li>
                                <li>Proficiency in Microsoft Excel and other data analysis tools.</li>
                                <li>Excellent organizational and time-management skills.</li>
                                <li>Strong communication and interpersonal skills for collaboration across departments.</li>
                            </ul>

                            <p><b>Attributes:</b></p>
                            <ul>
                                <li>Problem-solving mindset with the ability to work independently.</li>
                                <li>Ability to handle multiple tasks and prioritize effectively in a fast-paced environment.</li>
                                <li>Commitment to continuous improvement and process optimization.</li>
                            </ul>
                        <p className='applyTag'><b>How to Apply:</b></p>
                        <p className='applyTag'><b>Interested candidates should submit their resume and a cover letter to careers@cafecold.com and hr@cafecold.com</b></p>
                        </p>
                    </Accordion.Body>
            </Accordion.Item>
                </div>

        </Accordion>
        {/* <Footer/> */}
    </div>
  )
}

export default openRoles