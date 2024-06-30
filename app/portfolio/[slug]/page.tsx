import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

interface PortfolioDetailsPageProps {
  params: {
    slug: string;
  }
}

export default function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  return (
    <>
      <PageBanner title={`Portfolio Details ${params.slug}`}>
        Portfolio
        <Badge>Details 😍</Badge>
      </PageBanner>
      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            <img src="assets/images/portfolio/portfolio_details_image_1.webp" alt="Portfolio Item Image" />
          </div>
          <h2 className="details_item_title">Cloud Migration and Integration Project</h2>
          <p>
            The &ldquo;Cloud Migration and Integration Project&rdquo; represents a pivotal step for our client&apos;s digital transformation journey. By transitioning from traditional on-premises infrastructure to cloud-based solutions, we are unlocking a world of possibilities, from scalability and flexibility to enhanced security and cost efficiency. Our meticulous planning and execution ensure a smooth migration process, with minimal disruption to business operations. From assessing the current environment to preparing the infrastructure, migrating data and applications.
          </p>
          <p className="mb-0">
            providing comprehensive training and support, we leave no stone unturned in ensuring the success of this project. With our expertise and dedication, we empower our client to embrace the full potential of cloud computing, driving innovation.
          </p>
          <hr />
          <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Services:</strong>
                Cloud Migration
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Client:</strong>
                Techco
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Location:</strong>
                New York,NY,USA
              </span>
            </li>
            <li>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">Completed Date:</strong>
                20-12-2024
              </span>
            </li>
          </ul>

          <h3 className="details_item_info_title pt-4">Project Requirement</h3>
          <p>
            In this phase of the Cloud Migration and Integration project, our focus is on executing robust data migration strategies to ensure the seamless transfer of data from on-premises servers to cloud storage solutions. Leveraging advanced techniques and tools,
          </p>
          <div className="row mb-4">
            <div className="col-lg-5">
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Comprehensive Assessment Phase
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Strategic Migration Plan Development
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Robust Data Migration Strategies
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Infrastructure Preparation
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Application Migration
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Training and Documentation
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Infrastructure Preparation
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img src="assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">
                    Post-migration Support
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="details_item_info_title pt-4">Solution & Result</h3>
          <p>
            The successful execution of robust data migration strategies ensures the seamless transfer of data from on-premises servers to cloud storage solutions. Data integrity, security, and regulatory compliance are prioritized throughout the migration process. Rigorous testing and validation verify the accuracy and completeness of data migration, minimizing downtime and data loss risks.
          </p>
          <p>
            To achieve successful data migration, our solution includes a comprehensive approach that encompasses meticulous planning, advanced techniques, and thorough testing. We leverage industry-leading tools and expertise.
          </p>

          <h3 className="details_item_info_title pt-5 mb-4">Our Similar Projects</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="assets/images/portfolio/portfolio_item_image_10.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Pioneering Progress Exploring the Evolution and Impact of
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Web Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Health</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="assets/images/portfolio/portfolio_item_image_11.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Web Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Industry</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}