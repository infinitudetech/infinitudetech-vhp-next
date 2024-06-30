import { Link } from '@/app/layout.types'
import gql from 'graphql-tag'

export interface HeaderLinks {
  home: Link;
  company: Link;
  services: Link;
  portfolio: Link;
  fields: Link;
  product: Link;
  pages: Link;
  contact: Link;
}

export interface HeaderLinksQuery {
  links: {
    header: HeaderLinks;
  }
}

export const GET_LINKS = gql`
  query Links {
    links(id: "5wSNq34HGEvBudALxOO3ZD") {
        header
    }
  }
`