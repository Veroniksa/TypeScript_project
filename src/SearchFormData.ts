//TODO interface SearchFormData, function search
export interface SearchFormData {
  arrivalDate?: Date
  leavingDate?: Date
  arrivalString: string
  leavingString: string
  minDate: string
  maxDate: string
}

export const search = (SearchDate: SearchFormData, ) => {
  console.log(SearchDate.arrivalDate, SearchDate.leavingDate, SearchDate.arrivalString, SearchDate.leavingString, SearchDate.minDate, SearchDate.maxDate)
}