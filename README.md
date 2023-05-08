# my100dayproject

Problem Statement : https://docs.google.com/document/d/1_Pf7rj0uLbtha-u43U9Gfg2aqMGiZrUlP3q7xX30esU/edit?usp=share_link

Market Research : https://docs.google.com/document/d/1bvJH0O-uaBRsUnB2iGJB5HD8__9KjDrinAn8G-KQ-qE/edit?usp=share_link

Userflow : https://drive.google.com/file/d/1rHpxKdlMyPLv_IHi_iLAH494TIQ6qagt/view?usp=share_link

Wireframe : https://drive.google.com/drive/u/0/folders/1kDu4RGFSiBuNe_1GUBYGXiURoZ628Zgx

// My web progress table

CRUD For User signing page => Create user account [completed] => Read User Data For Profile Page [completed] => Update user details For Edit Page [completed] => Delete user details For deactivate [completed]

CRUD For Seller signing page => Create Seller account [completed] => Read Seller Data Page [completed] => Update Seller details Page [completed] => Delete Seller details For deactivate [completed]

CRUD For Seller Features page => Create Course Feature [completed] => Read Course Feature [completed] => Update Course feature [completed] => Delete Course feature [completed]

CRUD For User Features page => Create Course in Cart Feature [completed] => Read Course in Cart Feature [completed] => Delete Course in Cart feature [completed]

CRUD For User Features page => Create Comment Feature [completed] => Read Comment Feature [completed] => Update Comment feature [completed] => Delete Comment feature [completed]

Courses Filter Search tabs feature [completed] 


CRUD For User Features page => Create Favourites Feature [completed] => Read Favourites Feature [completed] => Delete Favourites feature [completed]



# Trading-and-Learning-Website

## Buyer

### Create an account
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, age, profile_pic, gender, mobile_number, about_me, date-of-birth, email, and password.
        3. Click the "Create Account" button.
    - Expected Result:
        - The user is redirected to the login page.

### Create an account
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "login" button.
    - Expected Result:
        - The user is redirected to the User HomePage page.
        
        
### View account details
- Scenario 1: Successfully View account details
    - Steps:
        1. Log in as a User.
        2. Click the Profile icon in top-right.
        3. Navigate to the User Profile page.
    - Expected Result:
        - The User can view his account details.

### Edit account details
- Scenario 1: Successfully edit account details
    - Steps:
        1. Log in as a User.
        2. Navigate to the User Profile page.
        3. Click the "Edit" button.
        4. Update the account details.
        5. Click the "Done" button.
    - Expected Result:
        - The User's account details are updated.
        
        
### Delete account details
- Scenario 1: Successfully Delete account details
    - Steps:
        1. Log in as a User.
        2. Navigate to the User Profile page.
        3. Click the "Delete" button.
        4. Accept the Alert Confirmation.
    - Expected Result:
        - The User's account details is Deleted.
        
### View User Avatar
- Scenario 1: Successfully View User Avatar
    - Steps:
        1. Log in as a User.
        2. Click the Profile icon in top-right.
        3. Navigate to the User Profile page.
    - Expected Result:
        - The User can view his User Avatar.

### Edit User Avatar
- Scenario 1: Successfully edit User Avatar
    - Steps:
        1. Log in as a User.
        2. Navigate to the User Profile page.
        3. Click the "Edit" button.
        4. Update the User Avatar by Add New Profile Link.
        5. Click the "Done" button.
    - Expected Result:
        - The User's New Avatar is updated.
        
        
### Delete User Avatar
- Scenario 1: Successfully Delete User Avatar
    - Steps:
        1. Log in as a User.
        2. Navigate to the User Profile page.
        3. Click the "Delete User Profile" button.
        4. Accept the Alert Confirmation.
    - Expected Result:
        - The User's New Avatar is Deleted.
        
        
### View Courses
- Scenario 1: Successfully view courses
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the courses listing page ( learn Page ).
        3. View the list of available courses.
    - Expected Result:
        - The user can view the list of available Courses.

### View Courses details
- Scenario 1: Successfully View Courses details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a Course to view its details.
    - Expected Result:
        - The user can view the details of the selected Course.

### Buy a Course
- Scenario 1: Successfully purchase a Course
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Course listing page.
        3. Select a Course to view its details.
        4. Click the "Buy Now" button.
        5. Course Added to My Courses ( If It's Free ).
        6. You will be redirected to Payment Page ( If It's Cost ).
    - Expected Result:
        - The user is redirected to the Payment page.
        - The Course is Added to My Courses.

### Delete a Course
- Scenario 1: Successfully Delete a Course
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Course listing page.
        3. Select a Course to view its details.
        4. Click the "Buy Now" button.
        5. Course Added to My Courses ( If It's Free ).
        6. You will be redirected to Payment Page ( If It's Cost ).
        7. The Course is Added to My Courses.
        8. Click the Course and it will redirect to details page
        9. Click "Delete Course" to Delete Course from My Courses
    - Expected Result:
        - The Course is deleted by the user from My Courses tab.

### Add Courses to Bookmarks
- Scenario 1: Successfully add Courses to Bookmarks
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Select a Courses to add to Bookmarks.
        4. Click the "Bookmark Icon" button.
    - Expected Result:
        - The Course is added to the user's Bookmarks.

### View Courses in Bookmarks 
- Scenario 1: Successfully view Courses in Bookmarks 
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Bookmarks page.
        3. View the list of Courses in the Bookmarks.
    - Expected Result:
        - The user can view the list of Courses in the Bookmarks.

### Remove Course from Bookmarks
- Scenario 1: Successfully remove Courses from Bookmarks 
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Details page.
        4. Click the "Remove from Bookmark" Button.
        4. Remove the selected Course from the Bookmarks.
    - Expected Result:
        - The Courses is removed from the user's Bookmarks.

### Add Comments to the Courses
- Scenario 1: Successfully add Comments to Courses
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Click the course and it will redirect to Details Page.
        4. Add Comments in the Comment Section Input.
        5. Click "Submit" or Press "Enter" to Add the Comments.
    - Expected Result:
        - The Comment is added to the Course details Page.

### View Comments In the Courses 
- Scenario 1: Successfully View Comments In Courses
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Click the course and it will redirect to Details Page.
        4. Type Comment in the Comment Section Input.
        5. Click "Submit" or Press "Enter" to Add the Comments.
        6. the Comments are Visible in the Course Detail Page.
    - Expected Result:
        - The user can view the list of Comments in the Course Details Page.

### Update Comments In the Courses
- Scenario 1: Successfully Update Comments In Courses 
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Click the course and it will redirect to Details Page.
        4. Type Comment in the Comment Section Input.
        5. Click "Submit" or Press "Enter" to Add the Comments.
        6. the Comments are Visible in the Course Detail Page.
        7. Click "Edit" button and the popup will appear
        8. type edited Comment and Click "Submit" button.
    - Expected Result:
        - The Comment will be Edited and Displayed to Course Details Page.

### Delete Comments from the Courses
- Scenario 1: Successfully Delete Comments from Courses
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Click the course and it will redirect to Details Page.
        4. Type Comment in the Comment Section Input.
        5. Click "Submit" or Press "Enter" to Add the Comments.
        6. the Comments are Visible in the Course Detail Page.
        7. Click "Edit" button and the popup will appear
        8. type edited Comment and Click "Submit" button.
        9. Click "Delete" button to Delete a Particular Comment.
    - Expected Result:
        - The Comment will be Deleted and Removed from the Comment Section.

### Course Filter By Category
- Scenario 1: Successfully Filter Course By Categories
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. Courses are Filtered By Categories by free, cost, live, latest etc.
    - Expected Result:
        - The Courses are filtered by Categories.

### Search Filter
- Scenario 1: Successfully Search Courses By Categories or Name
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Courses page.
        3. You can Search Courses Simply by Name in the Search Bar.
    - Expected Result:
        - The Courses are filtered by Search Bar Option.




## Seller

### Create an account
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, age, profile_pic, gender, mobile_number, about_me, date-of-birth, email, and password.
        3. Click the "Create Account" button.
    - Expected Result:
        - The Seller is redirected to the login page.

### Create an account
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "login" button.
    - Expected Result:
        - The Seller is redirected to the Seller HomePage page.
        
        
### View account details
- Scenario 1: Successfully View account details
    - Steps:
        1. Log in as a seller.
        2. Click the Profile icon in top-right.
        3. Navigate to the Seller Profile page.
    - Expected Result:
        - The Seller can view his account details.

### Edit account details
- Scenario 1: Successfully edit account details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Seller Profile page.
        3. Click the "Edit" button.
        4. Update the account details.
        5. Click the "Done" button.
    - Expected Result:
        - The Seller's account details are updated.
        
        
### Delete account details
- Scenario 1: Successfully Delete account details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Seller Profile page.
        3. Click the "Delete" button.
        4. Accept the Alert Confirmation.
    - Expected Result:
        - The Seller's account details is Deleted.
        

### Create a new product to sell
- Scenario 1: Successfully create a new product to sell
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Create Course page.
        3. Enter the Course details such as name, description, price, 
           old_price, timing, language, videos etc.
        4. Upload Course image.
        5. Click the "Submit" button.
    - Expected Result:
        - The new Course is created and added to the seller's list of products.

### View list of Course
- Scenario 1: Successfully view list of Course
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Course page.
        3. View the list of Course.
    - Expected Result:
        - The seller can view their list of Course.

### Edit Course details
- Scenario 1: Successfully edit Course details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Course page.
        3. Select a Course to edit.
        4. Click the "Edit Course" button.
        5. Update the Course details.
        6. Click the "Submit" button.
    - Expected Result:
        - The Course details are updated.

### Delete list of Course
- Scenario 1: Successfully Delete list of Course
    - Steps:
        1. Log in as a seller.
        2. Navigate to the Course page.
        3. View the list of Courses.
        4. Click the "Delete" button.
    - Expected Result:
        - The seller can Delete the list of Courses.















