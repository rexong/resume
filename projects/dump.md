1. Identity Provider (IdP) in Go
    The "Why": Why did you build this? (e.g., to understand OAuth2/OIDC, to replace an existing solution, or for a specific app).
    I build this for my home server to replace an existing solution. I initially tried using authentik as my iDP but it is really heavy and hard to configure authentik for my use case. It feels dense and starting up a lot of different processes in the background. I only have a simple machine that has 2 cores and 16GB of RAM and I feel like a light weighted idp built with a sqlite (file-base) database would be better on my machine.


    Technical Architecture: Did you implement specific protocols (OAuth2, OIDC, SAML)? How did you handle password hashing (bcrypt, argon2)? How did you handle session management or JWT signing?

    I only implemented Basic Authentication and LDAP Authentication Protocols, but this iDP is designed to be flexible and could be potentially extended to other protocol like OIDC if needed. Again, I really just build what I needed for my home server to function. Password hashing is done using bcrypt. My iDP issues session tokens to clients and store session tokens in memory. Currently the storage is just a simple dictionary but possible extension such as using redis to store the tokens or using JWT for a stateless authentication.

    Go Specifics: Did you use Goroutines for concurrency? Which frameworks (Gin, Echo) or was it standard library?
    No Goroutines are used for concurrency. To adhere to my philosophy of having a lightweight idp, I did this application using all standard libraries as much as possible.


2. Optimove AI (Hackathon)

    The Problem: What was the hackathon theme and what specific problem did you solve?
    We are tasked to use LTA's public API to come up with a solution to solve a problem regarding the inconsistency and unreliablility regarding crowdsource information.

    AI Implementation: What models did you use? How did you integrate them?
    I use LLM for this project in a few ways.
    1. Given a new crowdsource update, check if it is an event that has been acknowledged. If yes, the update will be classified together with the other similar events to reduce noise. To be acknowledge, we used a LLM to check the data between the new crowdsource update and existing events. The LLM will give a structured output.
    2. If it is a new event, we pass it to another LLM that scores the event in order for the LTA to priortise different events. 

    We have this pipeline as our backend written in Flask and using streamlit as my frontend to invoke the pipeline and display the information to the user.


    Speed/Result: Did you win? Did you build a working demo in 24/48 hours? What was the "wow" factor?
    Did not win. Built a working demo within 2 weekends.

3. PeerPrep (School Project)

    Role: Since this is a team project, what was your specific contribution? (e.g., "Architected the microservices communication" or "Built the real-time collaboration engine").
    1. Build user service and auth service that can potentially scale up to over 300 accounts. Containerized the services. For the auth service, I implemented OAuth2/OIDC protocol with JWT. Both services are done using go.
    2. Wrote frontend using react to display dashboard and worked with websockets connection from the frontend to allow for real time update for the users.
    3. Orchestrate a GCP Cloud Function (serverless) using go to dynamically ingest over 200 leetcode questions to achieve a 60x time reduction in populating the question banks compared to the manual method.

4. TEAMMATES (Open Source)

    Contributions: What PRs did you get merged? (e.g., "Refactored the student feedback module," "Migrated UI to Angular/Bootstrap").
    Worked on 6 PR to improve the frontend built using Angular.

    Scale: Mention that this is a large-scale OSS used by thousands.
    This is a OSS that has been used by thousands of students

    Process: Did you perform code reviews or write unit tests (JUnit)?
    I identified and documented 2 production-level defects, preventing potential system failures and strengthening overall project reliability.

5. MyInsure (School Project)

    Purpose: What kind of insurance app was it?
    Transformed a legacy system into a modern CRM platform, increasing insurance agents’ client tracking and meeting efficiency by 30% through intuitive UI/UX and automated workflows.


