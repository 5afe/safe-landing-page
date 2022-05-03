export interface OfficeAddress {
  city: string
  street: string
  extra?: string
  postcode: string
  country: string
}

export const offices: OfficeAddress[] = [
  {
    city: 'Berlin',
    street: 'Skalitzer Str. 85-86',
    extra: 'c/o Full Node',
    postcode: '10997',
    country: 'Germany',
  },
  {
    city: 'Lisboa',
    street: 'Rua António Maria Cardoso 25',
    postcode: '1200-126',
    country: 'Portugal',
  },
  {
    city: 'A Coruña',
    street: 'Calle Orzán 50',
    postcode: '15003',
    country: 'Spain',
  },
]
