import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

interface ServiceDetailsPageProps {
  params: {
    slug: string;
  }
}

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  return (
    <>
      <PageBanner title={`Services Details ${params.slug}`}>
        Services
        <Badge>Details 😍</Badge>
      </PageBanner>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative">
              <img src="assets/images/services/service_details_image_1.webp" alt="Service Details Image" />
              <a className="video_btn ripple_effect" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div>
            <h2 className="details_item_title">Network Infrastructure and Design</h2>
            <p>
              Network infrastructure and design are the backbone of modern businesses, serving as the foundation upon which all digital operations rely. At our IT solution agency, we specialize in crafting robust and reliable network architectures tailored to meet the unique needs of our clients. From small businesses to large enterprises, we understand the critical importance of a well-designed network infrastructure in driving efficiency, security, and scalability. Our team of experienced professionals works closely with clients.
            </p>
            <p>
              We take a holistic approach to network design, considering factors such as bandwidth requirements, security protocols, scalability, and future growth potential. By leveraging industry best practices and cutting-edge technologies,
            </p>

            <h3 className="details_item_info_title">Service Process</h3>
            <div className="row mb-5 align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="accordion" id="service_process_faq">
                  <div className="accordion-item">
                    <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one">
                      01. Listening to Your Needs
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two">
                      02. Tailored Solutions
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                      03. Tactical Alignment
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                      04. Measurable Results
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="content_layer_group unordered_list_block text-center">
                  <li className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one"><span>Listening to Your Needs</span></li>
                  <li className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two"><span>Tailored Solutions</span></li>
                  <li className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three"><span>Tactical Alignment</span></li>
                  <li className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four"><span>Measurable Results</span></li>
                </ul>
              </div>
            </div>

            <h3 className="details_item_info_title">Services Outcome</h3>
            <p className="mb-4">
              Here are six key points that can be associated with a digital Transformation gallery case global Digital Systems Engineer Services leader helping Fortune 500 companies on their innovation agenda:
            </p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Scalability and Flexibility
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Performance Optimization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      User Experience
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      Training and Education
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="assets/images/services/service_details_image_2.webp" alt="Service Details Image" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="assets/images/services/service_details_image_3.webp" alt="Service Details Image" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="assets/images/services/service_details_image_4.webp" alt="Service Details Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}