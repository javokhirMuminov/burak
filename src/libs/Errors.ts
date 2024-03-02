export enum HttpmCode {
  OK = 200,
  CREAT =201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOD_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}


export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FAUND = "No data is found!",
  CREATE_FAILED = "Create is failed!",
  UPDATE_FAILED = "Update is failed!",
}

class Errors extends Error {
  public code: HttpmCode;
  public message: Message;

  constructor(statusCode: HttpmCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;