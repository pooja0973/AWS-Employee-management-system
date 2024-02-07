
<br/>

# Employee Managemnt 

###### Prof. Dr Thomas Fankhauser | Cloud Computing  | Hochshule Heilbronn 

---

<br />
<table>
    <tbody>
        <tr>
            <td>Students (ID)</td>
            <td>Pooja Ramesh () , </td>
        </tr>
        <tr>
            <td>Semester</td>
            <td>Winter Semester 2023/24</td>
        </tr>
        <tr>
            <td>Repository</td>
            <td><a href="https://git.it.hs-heilbronn.de/it/courses/msem/cc2/ws23/platform1">https://git.it.hs-heilbronn.de/it/courses/msem/cc2/ws23/platform1</a>&nbsp;</td>
        </tr>
        <tr>
            <td>Course</td>
            <td>Cloud Computing (SEM)</td>
        </tr>
        <tr>
            <td>Course ID</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Chapter 1 - Introduction

The project involves the development of an Employee Management System, serving as a centralized platform for efficient handling of employee-related operations within an organization. This system facilitates the management of employee information. 

Employee Management Page:
The Employee Management page is the central hub for CRUD (Create, Read, Update, Delete) operations related to employee data.
HR personnel, and authorized administrators can create new employee profiles, capturing essential details such as personal information, Adress, Phone number and  position.
Existing employee records can be updated with ID.
The system allows for the removal of employee profiles as needed.

Amazon Cognito Integration:
Amazon Cognito is integrated for robust identity management and user authentication.
It enables secure and seamless user sign-up, sign-in, and access control, ensuring that only authorized personnel can perform CRUD operations on employee data.

Amazon Simple Email Service (SES):
SES is utilized to notify the HR through mail for the convicted employees. 

To provide a user-friendly interface, the frontend of the application was developed as a static website using HTML and JavaScript. The frontend interacts with the backend through API endpoints to fetch a list of available Employee data , Add employee , update using id and to delete employee.

The backend of the application is built as a serverless application using AWS Lambda and JS. The backend exposes Representational State Transfer (REST) API endpoints that handle requests from the frontend. The data is stored in DynamoDB, a cloud database service provided by AWS. The use of serverless architecture allows for automatic scaling based on demand, ensuring efficient resource allocation.

### 1.1 screenshots of the application:
Here are some screenshots of the frontend of the application which is available at 
[http://sem-project-cc.s3-website.eu-central-1.amazonaws.com/](http://sem-project-cc.s3-website.eu-central-1.amazonaws.com)

Figure 1.1.1 - Job Listings 

![](screenshots/home-page.png)


Figure 1.1.2 - Create a job 
![](screenshots/Create-Job.png)



Figure 1.1.3 - Job Details Page
![](screenshots/Job-Stock.png)



## Chapter 2 - Architecture 


![](images/architecture.png)
Figure 2.1 - Architecture of Employee managemnt project



### 1.2 Data Model

The data model of the application includes entities such details. The data model is stored in DynamoDB and follows a NoSQL structure. The attributes of the Employee data is shown in Table 1.2
**Table 1.2 - Data model **

<table>
    <tbody>
        <tr>
            <td><strong>Attribute</strong></td>
            <td><strong>Data Type</strong></td>
        </tr>
        <tr>
            <td>Emplloyee ID</td>
            <td>string</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>string</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>Number</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>string</td>
        </tr>
        <tr>
            <td>Position</td>
            <td>String</td>
        </tr>
        <tr>
            <td>Deparment</td>
            <td>String</td>
        </tr>
        <tr>
            <td>Phone Number</td>
            <td>Number</td>
        </tr>
        <tr>
            <td>Convicted</td>
            <td>True or False</td>
        </tr>
    </tbody>
</table>



### 2.4 AWS - Services Used

The application uses the following AWS services:

1. **AWS Lambda:** Executing the backend JavaScript code responsible for handling REST API requests. It reads, writes and detlete data to the database. Lambda was chosen for its serverless nature, automatically scaling and eliminating the need for server management.
2. **DynamoDB**: A NoSql database, was used in storing and retrieving  data about employees details. DynamoDB was used because it provides table ,fast and predictable performance with seamless scalability. It is a managed NoSQL database which fits well with our serverless architecture.
3. **API Gateway**: For exposing the API endpoints and to interact with the lambda backend.
4. **Identity and Authorisation Management** **(IAM)**: IAM plays a crucial role in managing access control , policies and permissions for various AWS services, including DynamoDB. It ensures that only authorized entities have the necessary permissions to interact with specific resources.
5. **Simple Storage Service** (s3): Amazon CloudFront is employed as a content delivery network (CDN) to distribute static website content globally, enhancing performance, reliability, and security. S3, in conjunction with CloudFront, offers a scalable and cost-effective solution for hosting and delivering static website content.
6. **Amazon Cognito** :  Integrated for identity management and user authentication. Cognito allows you to easily add user sign-up, sign-in, and access control to web and mobile apps.
7. **Amazon Simple Email Service** (SES): We have used Amazon Simple Email Service to provide an alert email to the HR team. This helps the team to be aware and have a record of all the convicted employees. While filling the employee data on our web page, if the Convicted box is checked, an alert email is send with the Employee name to the team. As a part of learning, we found this service to be simple and effective and also very useful. 
We provided a source and destination email address in terraform ses.tf file and a java script file. On performing terraform apply, a verfication mail is sent to both the destination and source email Id. The verification has to be by the clicking on the link provided in the mail. 
Once the verification was completed, we could see “Verified” status for both email ids in AWS SES page. We tested this using multiple Employees data with Convicted box checked and unchecked. We got an alert email only for the employees where Convicted was checked. Thus, we successfully created an alert mechanism.


**2.5 Application Programming Interface (API)**

The application exposes REST API endpoints to enable communication between the frontend and the backend. These endpoints handle requests for fetching Employee data listings ,adding  new employee data listings , updating the employee data with Id and deleting a employee with id. The communication between the frontend and the backend occurs over HTTP protocols.

The communication between the frontend and backend is facilitated by the API Gateway, which acts as a mediator for the requests and responses.


 

## Chapter 3 -  Tooling
### 3.1 Working on the application

The development process of the application is facilitated by several tools and practices. The application was worked on in a local development environment in Visual Studio Code, a text editor. The following tools were installed in the local environment to enable testing parts of the application locally - 

-  **Command Line Interface for Amazon Web Services** (aws-cli) : for interacting with resources in the AWS account. An IAM user was created in the AWS portal and the access key id, secret access key and default aws region were stored in a file on disk located at  ~./aws/credentials
-  **Git** : a version control system was used to save code changes, fetch code from the remote repository and also send code (push) to the remote repository.

-  **JavaScript language** : was used in implementing the REST api endpoints and node_module installation is automated in code for macos and Ubuntu. 

### 3.2 Automation
-  **Terraform** : an Infrastructure as Code tool, was used for automated infrastructure provisioning and management, ensuring consistent and reproducible deployments. It was used to define the AWS resources required for the application, such as API Gateway, Lambda functions, DynamoDB, and IAM policies.
- **CI/CD**: When code changes are deployed, GitLab CI/CD automatically applies the Terraform configuration, which creates, updates, or deletes the necessary AWS resources.

### 3.3 Deployment Process
Code changes in the serverless Employee listing platform are deployed using GitLab's CI/CD pipelines. The deployment process involves the following steps:

1. **Version Control and Collaboration**: Developers work in feature branches in the Git repository and collaborate using GitLab's version control system. Branches are created for each new feature or bug fix.

2. **Continuous Integration/Continuous Deployment (CI/CD)**: The CI/CD pipeline is triggered automatically when changes are pushed to the repository. It performs automated builds, tests, and deployments.

3. **Test and Deploy**: During the pipeline, the code changes are built, tested, and packaged for deployment. 





## Chapter 4 - Lessons Learned
### 4.1 - Learnings

- I have embarked on a captivating journey into the realm of cloud platforms. The evolution from those stringent measures to the seamless access of easily scalable, robust hardware through minimal lines of declarative configuration or a few intuitive clicks on cloud platforms has been a revelation.
Amidst this exploration, I delved into various AWS services, acquiring practical skills in deploying static websites, defining REST APIs with a specific focus on user authentication using Cognito, optimizing content delivery through CloudFront, implementing Lambda functions, and mastering data interactions with DynamoDB for CRUD operations.
However, this journey wasn't without its challenges. Notably, I encountered a 403 Forbidden error during API testing, which required a nuanced approach in policy definition (as reflected in policy.tf). Additionally, grappling with CORS errors during URL automation and REST API deployment demanded innovative solutions, including a unique adjustment to the source_arn of aws_lambda_permission and the implementation of a dedicated CORS handling file in the project.
This journey has not only enriched my technical proficiency but has also provided valuable insights into troubleshooting and optimizing cloud-based infrastructures. I've accomplished the following activities:
* Deployed a static website.
    * Defined a REST API with specific emphasis on:
    * Cognito for user authentication.
    * CloudFront for content delivery.
* Implemented Lambda functions.
* Interacted with DynamoDB for CRUD operations.
### 4.2 - Challenges Faced and Solutions (complicated)

### 4.2.1 - 403 Forbidden Error for API Testing

- Encountering a 403 Forbidden error during API testing led to the realization that additional policies needed to be defined. This was addressed by adding relevant policies in policy.tf.

### 4.2.2 - CORS Error Resolution

- Issue Deploying the REST API
During frontend testing, a CORS error emerged due to insufficient knowledge about cross-functional errors. The issue was addressed by learning more about CORS and implementing a specific file to handle it.

### 4.2.3 - Fetching the API_URL With script 
- The api url was fetched from the html file using a json file. First we performed echo operation to save the api url in a json file(api_url.json). This echo operation is done in the output.tf file. The api_url is saved in the json file as a key-value pair and this file is created in the frontend folder. 
From the json file, we are fetching the url into the html file using fetch operation in <script> tag. We are reading the json file and saving the value of the api_url key into a variable “apiUrl”. This apiUrl is made to be globally accessible and is used in code for GET, POST and PUT operation. 
The url is saved to a variable when we run the terraform apply cmd once. 
In order to fetch the api url for performing operations from the frontend web page, we have to run terraform apply once again, i.e we run terraform apply twice overall. This is one of the challenge we faced and found that running the terraform apply cmd twice, can fetch us the required url to perform the operations from front end.

### 4.2.3 - difficult to resolve
- The URL can be accessed successfully after the second Terraform apply operation.

### 4.2.4 - Gitlab access issue 

### 4.2 - System Specification
- This project has been developed and tested on macOS and Ubuntu. The Node module installation process is automated, so there's no need for manual installation in macOS and Ubuntu for backend.



## Chapter 5 - Conclusion

This project has not only provided technical proficiency but has also offered insights into troubleshooting, optimization, and best practices in cloud-based infrastructures. The lessons learned and challenges overcome contribute to a more resilient and knowledgeable approach to future cloud computing endeavors. The collaboration of students on this project under the guidance of Prof. Dr. Thomas Fankhauser has resulted in the creation of a functional and efficient Employee Management System, showcasing the potential of cloud computing in modern applications.


# Project Video
<video src="Video/.mp4" controls title="Project Video"></video>
