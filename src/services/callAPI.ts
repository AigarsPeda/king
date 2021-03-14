const BASE_URL = "http://localhost:8000/v1";

// fetch option object interface
interface IOptions {
  method: string;
  headers: {
    // Accept: string;
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
}

// functions argument is object with this keys
interface IArgs {
  url: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  data?: Object;
}

/** Get cookies by name and return everting after = */
const getCookieByName = (name: string) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  if (match) {
    // console.log(match[2]);
    return match[2];
  } else {
    // console.log("--something went wrong---");
    return "";
  }
};

export const callAPI = async ({ url, method, data }: IArgs): Promise<any> => {
  let options: IOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookieByName("access_token")
    }
  };

  // if there are data object add it to options
  if (data) {
    options = {
      ...options,
      body: JSON.stringify({
        ...data
      })
    };
  }

  const rawResponse = await fetch(`${BASE_URL}${url}`, options);

  const response = await rawResponse.json();

  return response;
};
