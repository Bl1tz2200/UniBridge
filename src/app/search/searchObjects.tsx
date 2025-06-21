export type universityInfo = { // Used to get universityInfo for cards from db
  image_name: string,
  keyName: string,
  label: string,
  starSum: number,
  startCounter: number,
  acceptanceRating: number,
  tuitionFee: string,
  dateStart: string,
  dateEnd: string
}

export type filterParams = { // Used to fetch each filter from filtersList
    filterTypeName: string,
    values: string[]
}

export type filtersList = { // Used to get filters from universityInfo
    [key: string]: string[]
}