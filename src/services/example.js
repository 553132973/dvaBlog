import request from "../utils/request";

export function query() {
  return request("/ltlline-admin-app/ltlline/appeal/page");
}
