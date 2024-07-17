'use client'

import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'
import { useSuspenseQuery } from '@apollo/client'
import { FieldIdQuery, FieldQuery, GET_FIELD, GET_FIELD_ID } from './query'
import { useParams } from 'next/navigation'
import { renderHtml } from '@/utils/renderers'
import { BLOCKS } from '@contentful/rich-text-types'
import { padWithZeros } from '@/utils/helpers'
import classNames from 'classnames'
import { useState } from 'react'

type RouteParams = {
  slug: string
}

export default function FieldsPage() {
  const [expandedIdx, setExpandedIdx] = useState(0)
  const params = useParams<RouteParams>()
  const { data: fieldsData } = useSuspenseQuery<FieldIdQuery>(GET_FIELD_ID, {
    variables: {
      slug: params.slug
    }
  })

  const { items } = fieldsData.fieldCollection || {}

  const { data: fieldData } = useSuspenseQuery<FieldQuery>(GET_FIELD, {
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { field } = fieldData || {}

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
          {field.p0 && <div dangerouslySetInnerHTML={{ __html: renderHtml(field.p0.json) }} />}

          {field.p1 && (
            <div dangerouslySetInnerHTML={{ __html: renderHtml(field.p1.json, {
              renderNode: {
                [BLOCKS.HEADING_3]: (node, next) => `<h3 class="details_item_info_title">${next(node.content)}</h3>`,
                [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-4">${next(node.content)}</p>`
              }
            }) }} />
          )}
         
          <div className="row mb-5">
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {field.benefits.slice(0, field.benefits.length / 2).map((benefit, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {field.benefits.slice(field.benefits.length / 2, field.benefits.length).map((benefit, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <img src="/assets/images/icons/icon_check_3.svg" alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="details_item_info_title">Service Process</h3>
          <div className="row mb-5 align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="accordion" id="service_process_faq">
                {field.processes.map((process, idx) => (
                  <div className="accordion-item" key={idx}>
                    <div
                      className={classNames('accordion-button', { collapsed: idx > 0 })}
                      onClick={() => setExpandedIdx(idx)}
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#process_${idx}`}
                      aria-expanded={idx === expandedIdx}
                      aria-controls={`process_${idx}`}
                    >
                      {padWithZeros(idx + 1, 2)}. {process.title}
                    </div>
                    <div id={`process_${idx}`} className={classNames('accordion-collapse collapse', { show: idx === 0 })} data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div> 
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="content_layer_group unordered_list_block text-center">
                {field.processes.map((process, idx) => (
                  <li
                    key={idx}
                    className={classNames('accordion-button', { collapsed: idx === 0 })}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#process_${idx}`}
                    aria-expanded={idx === expandedIdx}
                    aria-controls={`process_${idx}`}
                  >
                    <span>{process.title}</span>
                  </li>
                ))}
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
                    {field.whyUs.title}
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {field.whyUs.children?.map((child, idx) => (
                    <li key={idx}>
                      <div className="iconbox_block layout_icon_left">
                        <span className="iconbox_icon">
                          <img src={`/assets/images/icons/${child.icon}`} alt={child.title} />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">{child.title}</strong>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}