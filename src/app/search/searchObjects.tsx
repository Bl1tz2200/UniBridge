export type universityCardInfo = { // Used to get universityInfo for cards from db
  image_name: string,
  keyName: string,
  label: string,
  worldRating: number,
  acceptanceRating: number,
  tuitionFee: string,
  dates: {
    [whichDate: string]: {
      [dateParts: string]: string,
    }
  }
}

export type universityPageInfo = universityCardInfo & { // Used to get universityInfo for university page from db
  description: string,
  scholarships: string[],
  accomadations: string[],
  majors: string[],
  qualifications: string[],
  otherPrograms: string[],
  contacts: {[key: string]: string}
  elegibility: {
    general: string[],
    international: string[]
  }
}

export type filterParams = { // Used to fetch each filter from filtersList
    filterTypeName: string,
    values: string[]
}

export type filtersList = { // Used to get filters from universityInfo
    [key: string]: string[]
}