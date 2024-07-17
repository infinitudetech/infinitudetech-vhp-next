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

export interface ServiceLink {
  _id: string;
  name: string;
  slug: string;
}

export interface ServicesLinksQuery {
  serviceCollection: {
    items: ServiceLink[];
  }
}

export const GET_SERVICES = gql`
  query ServiceCollection {
    serviceCollection {
      items {
        _id
        name
        slug
      }
    }
  }
`

export interface FieldLink {
  _id: string;
  name: string;
  slug: string;
}

export interface FieldsLinksQuery {
  fieldCollection: {
    items: ServiceLink[];
  }
}

export const GET_FIELDS = gql`
  query FieldCollection {
    fieldCollection {
      items {
        _id
        name
        slug
      }
    }
  }
`
