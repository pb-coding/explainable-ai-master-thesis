# Master thesis Explainable AI
Topic: To what extent does the form of presentation (textual, visual, hybrid) in combination with AI explanation types (input influence-based, sensitivity-based) influence end users' acceptance of AI-based decision support systems?

## Summary
To address this question, I created a user-friendly React app that takes participants through a scenario where they play the role of insurance company employees. In this role, they must assess surrogate based explanations (based on LIME) of an AI system's recommendations for customers' data-driven price ratings.

## Scenario
In this scenario, participants are asked to assume the role of a clerk at an insurance company that uses AI to offer personalized and competitive car insurance premiums.  The participant learns that the insurance company collects data on driving behavior through sensors installed in customers' vehicles and that this data is analyzed by AI to evaluate individual driving habits. Participants are informed that the willingness of customers to participate in this system is based on the fact that customers would receive a discount on their insurance premium as an incentive if they voluntarily participate in the data collection. The scenario outlines that participants will receive the task to review a comprehensive overview of a fictitious customer's profile, including personal details and data on his driving behavior and that this data serves as the basis for the AI's analysis and subsequent recommendation. The participant is instructed that after the AI’s recommendation an AI explanation will follow explaining the decision rationale behind the AI result and that the participant is tasked to rate this AI explanation afterwards.

## Steps of the participant

Step 1: Participants reviews a fictitious customer profile

![image](https://user-images.githubusercontent.com/71174645/236624924-d64555c2-b818-4071-946d-f3722776e087.png)

Step 2: Participant sees how the "AI" supposedly analyzes the customers data (loading screen)

![image](https://user-images.githubusercontent.com/71174645/236625179-5406b159-5292-4996-b2ac-a87e1a0ad3d4.png)

Step 3: Participant sees result

![image](https://user-images.githubusercontent.com/71174645/236625349-f2a21fcc-42f2-40c1-9560-5dc001bfd813.png)

Step 4: Participant receives based on the 6 experimental group he was randomly assigned to a combinations of explanation type (input influence-based | sensitivity-based) and display type (textual, visual, hybrid).

Step 5: Participant gets redirected back to my Limesurvey instance and rates the explanation.


## Explanation types

Group randomization happened prior on Limesurvey. When redirected to this app, /register?g=<groupnumber 1 to 6> defines which explanation is seen.

/register?g=1 --> textual input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625684-492b994c-6c3c-46c9-931e-05200bb8e394.png)


/register?g=2 --> visual input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625689-cba6cf20-db4e-4318-ad3a-0f8d476acaf3.png)


/register?g=3 --> hybrid input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625696-f0fd655c-a827-4eb2-905e-b0b7aa42d02c.png)


/register?g=4 --> textual input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625778-7d6c5cd3-1a0e-4321-b7a7-b5a0d5255b70.png)


/register?g=5 --> visual input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625847-dd66f3fa-73c2-47eb-8e12-d4f11d6df5af.png)


/register?g=6 --> hybrid input influence-based explanation

![image](https://user-images.githubusercontent.com/71174645/236625900-68c0c019-c233-4d9b-b184-ff5f7f7d70b7.png)

