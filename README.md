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

## Latency and Throughput without Web Caching

## Latency and Throughput with Web Caching

## Summary

## What I learned
