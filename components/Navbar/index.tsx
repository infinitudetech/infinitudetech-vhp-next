"use client";

import Image from "next/image";
import { GET_LINKS, HeaderLinksQuery } from "./query";
import { query } from "@/app/ApolloClient";
import { useSuspenseQuery } from "@apollo/client";

export default function Navbar() {
  const { data } = useSuspenseQuery<HeaderLinksQuery>(GET_LINKS)

  console.log(data)

  return (
    <header className="site_header site_header_2">
      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <a className="site_link" href="contact.html">
                  <Image width={200} height={200} src="/assets/images/site_logo/logo-white.svg" alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li className="active">
                      <a className="nav-link" href="index.html" role="button" aria-expanded="false">
                        Home
                      </a>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                      </a>
                      <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="about.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_wifi.svg" alt="Wifi SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">About Us</small>
                                      </span>
                                      <span className="description mb-0">
                                        Learn more about Techco
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="pricing.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_dollar_2.svg" alt="Dollar SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Our Pricing</small>
                                      </span>
                                      <span className="description mb-0">
                                        Streamlined Pricing
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="portfolio.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_chart.svg" alt="Chart SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Portfolio</small>
                                      </span>
                                      <span className="description mb-0">
                                        Explore our all overview
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="portfolio_details.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_tag_2.svg" alt="Event Tag SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Portfolio Details</small>
                                      </span>
                                      <span className="description mb-0">
                                        Explore our work overview
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="team.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_user_2.svg" alt="User Check SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Team</small>
                                      </span>
                                      <span className="description mb-0">
                                        We are friendly Join our team 
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="team_details.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_users.svg" alt="Users SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Team Details</small>
                                      </span>
                                      <span className="description mb-0">
                                        We are friendly Join our team 
                                      </span>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="service.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_pen.svg" alt="Pen SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Services</small>
                                      </span>
                                      <small className="description mb-0">
                                        Happy to help you!
                                      </small>
                                    </a>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <a className="iconbox_block_2" href="service_details.html">
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image width={200} height={200} src="/assets/images/icons/icon_pen.svg" alt="Pen SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">Service Details</small>
                                      </span>
                                      <small className="description mb-0">
                                        Happy to help you!
                                      </small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <ul className="btns_group p-0 unordered_list justify-content-start">
                                <li>
                                  <a className="btn btn-primary" href="contact.html">
                                    <span className="btn_label" data-text="Free Consultation">Free Consultation</span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <Image width={200} height={200} src="/assets/images/clients/client_logo_9.webp" alt="Client Logo" />
                                    </div>
                                    <div className="review_info_content">
                                      <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                      </ul>
                                      <div className="review_counter">From <b>200+</b> reviews</div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <Image width={200} height={200} src="/assets/images/clients/client_logo_10.webp" alt="Client Logo" />
                                    </div>
                                    <div className="review_info_content">
                                      <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                      </ul>
                                      <div className="review_counter">From <b>200+</b> reviews</div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <div className="site_author bg-primary">
                                <div className="author_box">
                                  <div className="author_image bg-light">
                                    <Image width={200} height={200} src="/assets/images/avatar/avatar_7.webp" alt="Site Author Image" />
                                  </div>
                                  <div className="author_box_content">
                                    <h3 className="author_name text-white">Maverick Phoenix</h3>
                                    <span className="author_designation text-white">CEO At Techco</span>
                                  </div>
                                  <div className="quote_icon">
                                    <Image width={200} height={200} src="/assets/images/icons/icon_quote.svg" alt="Quote Icon" />
                                  </div>
                                </div>
                                <p className="mb-0 text-white">
                                  As a CEO at Techco  I have been voice crying in the wilderness,  trying to make requirements clear, use every minute to deliver the  result, and not reinvent the wheel. Here at Techco, I made that possible  for the clients.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portfolio
                      </a>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                        <div className="container">
                          <div className="row justify-content-lg-between">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">Services</h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            IT Management Services
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            Data Tracking Security
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            Website Development
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            CRM Solutions and Design
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            UI/UX Design Services
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            Technology Solution
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service_details.html">
                                          <span className="icon_list_text">
                                            Software Development
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">Our Fields</h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Healthcare
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Banks
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Logistics
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Supermarkets
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Industries
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Hotels
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="fields.html">
                                          <span className="icon_list_text">
                                            Fintech
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">Product</h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <a href="portfolio.html">
                                          <span className="icon_list_text">
                                            Case Studies
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="pricing.html">
                                          <span className="icon_list_text">
                                            Our Pricing
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service.html">
                                          <span className="icon_list_text">
                                            Features
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="about.html">
                                          <span className="icon_list_text">
                                            Overview
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          <span className="icon_list_text">
                                            New Releases
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="service.html">
                                          <span className="icon_list_text">
                                            Solutions
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="social_area">
                                <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                  <li>
                                    <a href="#!">
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#!">
                                      <i className="fa-brands fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#!">
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#!">
                                      <i className="fa-brands fa-dribbble"></i>
                                    </a>
                                  </li>
                                </ul>
                                <p className="career_link m-0">Looking for new career? <a href="#!">We’re Hiring</a></p>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="megamenu_case bg-primary">
                                <h3>Computer Software</h3>
                                <h4>Astarte Medical</h4>
                                <Image width={200} height={200} src="/assets/images/case/case_image_4.webp" alt="Case Image" />
                                <a className="btn" href="portfolio.html">
                                  <span className="btn_label" data-text="Read Case">Read Case</span>
                                  <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link" href="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="pages_submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li className="dropdown">
                          <a className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blogs
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="blog_submenu">
                            <li><a href="blog.html">Our Blogs</a></li>
                            <li><a href="blog_details.html">Blod details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Help Center</a></li>
                        <li><a href="#!">Careers <small className="badge bg-danger-subtle text-danger">We’re Hiring</small></a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <a className="btn btn-primary" href="pricing.html">
                    <span className="btn_label" data-text="Get Started">Get Started</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}