import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

export default function FieldsPage() {
  return (
    <>
      <PageBanner title="Our Fields">
        Our
        <Badge>Fields 😍</Badge>
      </PageBanner>
      <section className="service_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            <img src="/assets/images/services/service_details_image_5.webp" alt="Service Details Image" />
          </div>
          <h2 className="details_item_title">Ransform Healthcare With Our Custom App Solutions</h2>
          <p>
            The &ldquo;Cloud Migration and Integration Project&rdquo; represents a pivotal step for our client&apos;s digital transformation journey. By transitioning from traditional on-premises infrastructure to cloud-based solutions, we are unlocking a world of possibilities, from scalability and flexibility to enhanced security and cost efficiency. Our meticulous planning and execution ensure a smooth migration process, with minimal disruption to business operations. From assessing the current environment to preparing the infrastructure, migrating data and applications.
          </p>
          <p>
            Providing comprehensive training and support, we leave no stone unturned in ensuring the success of this project. With our expertise and dedication, we empower our client to embrace the full potential of cloud computing, driving innovation.
          </p>

          <h3 className="details_item_info_title">Benefits of Our Healthcare Software Services</h3>
          <p className="mb-4">
            In this phase of the Cloud Migration and Integration project, our focus is on executing robust data migration strategies to ensure the seamless transfer of data from on-premises servers to cloud storage solutions. Leveraging advanced techniques and tools,
          </p>
          <div className="row mb-5">
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    In-depth medical expertise
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Focus on client’s success
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Wide tech stack
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    100% reliability guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>

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
        </div>
      </section>

      <section className="service_section section_space bg-light pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <img src="/assets/images/about/about_image_5.webp" alt="Techco - About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Why Us</span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_check_2.svg" alt="Check SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quality Comes First</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_leaf.svg" alt="Leaf SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Flexible Cooperation</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_box.svg" alt="Box SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">On-time Delivery</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_receipt_add.svg" alt="Receipt Add SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Transparent Costs</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_monitor.svg" alt="Monitor SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Qualified Developers</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="iconbox_block layout_icon_left" href="service_details.html">
                      <span className="iconbox_icon">
                        <img src="/assets/images/icons/icon_microscope.svg" alt="Microscope SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">Quick Scale-up</strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}