import http from "k6/http";
import { check, sleep } from "k6";
import { Trend } from "k6/metrics";

let latencyTrend = new Trend("latency");

const urls = [
  "http://10.91.103.158:8080/page1.html",
  "http://10.91.103.158:8080/page2.html",
  "http://10.91.103.158:8080/page3.html",
  "http://10.91.103.158:8080/page4.html",
  "http://10.91.103.158:8080/page5.html",
];

// testing for non stress and without caching

export const options = {
  stages: [
    { duration: "10s", target: 100 }, // ramp up from 0 to 100 concurrent users in 10s
    { duration: "30s", target: 100 }, // stay constant at 100 users for 10 seconds
    { duration: "10s", target: 0 }, // ramp down to 0 users
  ],
  thresholds: {
    http_reqs: ["count>=40000"],
  },
};

export default function () {
  let url = urls[Math.floor(Math.random() * urls.length)];
  let res = http.get(url);

  latencyTrend.add(res.timings.duration);

  check(res, { "status was 200": (r) => r.status === 200 });
  sleep(0.1); // Small delay to simulate real users
}
