# CS 6675 HW 4

## Problem:

I chose to do the second problem for the coding assignment, attempting to create a web server and finding metrics for it.

## How I did it?

I finished this assignment by creating 5 different HTML files with different images. I served each of these HTML files using nginx as my web server. For nginx to work, I had to install the service and update the nginx configuration (nginx.conf) file to point towards my html file directory. By pointing it to the correct one, I can simply just run 'nginx' to start the server and point localhost:8080 to my HTML files. This allows me to point localhost:8080/page1.html to my page1.html file, localhost:8080/page2.html to my page2.html, etc. In addition, within the nginx configuration, we're able to list other IP addresses we want to point to. I included my own network IP address as an additional point to serve to because of how my personal device should be able to access the website.

## Mobile Screenshots

![mobile_ss1](https://github.com/user-attachments/assets/17e6aff7-c7b9-43f1-a7e4-d5844bdf8713)
![mobile_ss2](https://github.com/user-attachments/assets/12823221-ffec-4d79-b9b0-d640682fa130)
![mobile_ss3](https://github.com/user-attachments/assets/b44e87d9-a889-4b5c-9ff5-49c80d1c9936)
![mobile_ss4](https://github.com/user-attachments/assets/72aebbac-fa9b-4606-b987-6ba9c39fe847)
![mobile_ss5](https://github.com/user-attachments/assets/8e5198bf-efb5-4223-8763-143763a72974)

## Testing

I particularly used Grafana K6 as a testing method to figure out the metrics. This works using Javascript and creates makeshift users who try to access a certain website and retrieves metrics about the data and how long it takes.

### Configuration

For the non stress test version we go from 0 to 100 concurrent users in 10 seconds, stay at 100 concurrent users for 30 seconds, and then ramp down concurrent users to 0 in 10 seconds. For the stress test version we go from 0 to 100 concurrent users in 10 seconds, ramp up from 100 to 500 in 10 seconds, ramp up from 500 to 1000 in 10 seconds, stay at 1000 concurrent users for 30 seconds, and then ramp back down to 0 users in 10 seconds. To learn more you can read through the testing files within the scripts folder.

## Latency and Throughput without Web Caching

![NonStressNonCacheMetrics](https://github.com/user-attachments/assets/6349031d-86a9-409d-b2b9-b5af5edf6c3b)

From this image, we can deduce that average throughput is 781.55 RPS (http_reqs) and average latency is 1.65ms (http_req_duration) across all 5 pages.

## Stress Testing without Web Caching

![StressNonCacheMetrics](https://github.com/user-attachments/assets/c1ae7581-2be5-4e75-b09f-a27a75be30e3)

From this image, we can deduce that average throughput is 1474.56 RPS (http_reqs) and average latency is 55.09ms (http_req_duration) across all 5 pages.

## Latency and Throughput with Web Caching

![NonStressCacheMetrics](https://github.com/user-attachments/assets/4ef22bef-2448-40b6-9579-729142d54c41)

From this image, we can deduce that average throughput is 783.61 RPS (http_reqs) and average latency is 1.52ms (http_req_duration) across all 5 pages.

## Stress Testing with Web Caching

![StressCacheMetrics](https://github.com/user-attachments/assets/8142deec-9f1a-4d40-a603-c2184a6ed9eb)

From this image, we can deduce that average throughput is 1490.54 RPS (http_reqs) and average latency is 55.04ms (http_req_duration) across all 5 pages.

## Summary

## What I learned

- I learned a lot about how web servers work in terms of their configuration. A lot of frameworks I use abstract out this process, leaving with the final product. By going through this project, I got a chance to see how web servers work, what types of configurations you can make within a web server and how serving content actually works from static content.
- Another cool lesson that was learned was with caching. I understand that caching is beneficial, especially for larger scale applications because of how long requests take. However, I've never really gotten the chance to expirment with it much. This project was probably my first time messing around with caches and trying to see the actual significance of it.
- I also learned a lot about how nginx works. I've attempted using it beforehand, but never really got it to fully work. However, this time around, I got a chance to get it fully working and understand a lot more about the inner worksing of it. This was extremely beneficial since nginx is a very popular web server option for a lot of cloud platforms and is potentially something I could implement in my future-work.
