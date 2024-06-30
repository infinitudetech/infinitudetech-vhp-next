export default function PortfolioPage() {
  return (
    <>
      <section
        className="page_banner_section text-center"
        style={{ backgroundImage: 'url(\'assets/images/shapes/bg_pattern_4.svg\')' }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            Our
            <span className="badge bg-secondary">Portfolio 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">Our Portfolio</h1>
        </div>
      </section>

      <section className="portfolio_section section_space bg-light">
        <div className="container">
          <div className="filter_elements_nav">
            <ul className="unordered_list justify-content-center">
              <li className="active" data-filter="all">See All</li>
              <li data-filter="technology">Technology</li>
              <li data-filter="helpdesk">Helpdesk</li>
              <li data-filter="analysis">Analysis</li>
              <li data-filter="marketing">Marketing</li>
            </ul>
          </div>
          <div className="filter_elements_wrapper row">
            <div className="col-lg-6 technology">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_4.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Driving Digital Transformation Explore the Depth of Our IT Projects
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Logo Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Finance</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 helpdesk">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_5.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Explore Our IT Solutions Portfolio for Public Sector Organizations
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> App Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Public</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 analysis">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_6.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Innovative Solutions Showcase the Diversity of Our IT Portfolio
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Card Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Transpiration</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_7.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Tech Triumphs Celebrating Our Achievements in IT Solutions
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Web Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Logistic</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 technology">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_8.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Revolutionizing IT Strategies A Closer Look at Our Dynamic IT Solutions
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Web Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Fution</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 helpdesk">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_9.webp" alt="Mobile App Design" />
                  </a>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <a href="portfolio_details.html">
                      Cloud Migration and Integration Project IT Solutions Portfolio
                    </a>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li><a href="portfolio.html"><i className="fa-solid fa-tags"></i> Web Design</a></li>
                    <li><a href="portfolio.html"><i className="fa-solid fa-building"></i> Energy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 analysis">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_10.webp" alt="Mobile App Design" />
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
            <div className="col-lg-6 marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="portfolio_details.html">
                    <img src="/assets/images/portfolio/portfolio_item_image_11.webp" alt="Mobile App Design" />
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