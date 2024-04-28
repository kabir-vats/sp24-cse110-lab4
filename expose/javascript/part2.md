1. 3 (i was delcared as var so it is accessible later in the function outside of the scope of the for loop)
2. 150 (finalPrice was delcared as var and most recently initialized to be the discounted price of the last object
3. 150 (discountedPrice was declared as var and its most recent value is thus accessible to print)
4. [50, 100, 150] (returns the array of discounted prices as it was procedurally pushed to be given the discounted prices)
5. Error (i is not defined within the scope)
6. Error (discountedPrice is not defined within the scope)
7. 150 (finalPrice was declared as let but this console log is within the scope and can access the most recent value of finalPrice)
8. [50, 100, 150] (values were pushed to discounted and was able to be modified and returned
9. Error (i defined with let outside of scope)
10. 3 (No errors and prints assigned length. No reassignments needed.)
11. [50,100,150] (despite const, being modified by methods and not reassigned so it changes)
12. 
    A. student.name 
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0];
13. 
    A. 32 (string concatenation)
    B. 1 (converts string to int b/c of type casting with subtraction and does subtraction)
    C. 3 (adds null which is cast to 0 to 3 so 3+0=3)
    D. 3null (string concatenation, casts null to 'null' and concats '3'+'null'='3null')
    E. 4 (casts true to 1 and adds 1+3=4)
    F. 0 (casts false to 0 and null to 0 and adds 0+0=0)
    G. 3undefined (casts undefined to string and concats '3'+'undefined'=3undefined)
    H. Nan (subtraction of non-numbers grants Nan value)
14.
    A. true (Casts '2' to 2 and does 2>1=true)
    B. false (compares strings by first character alphabetically and 2>1 alphabetically so '2'<'12 = false)
    C. true (Compares 2 and '2' after type conversions)
    D. false (Compares 2 and '2' before type conversions)
    E. false (Compares true and 2 and true casts to 1 which != 2 so false)
    F. true (2 is not 0 so it casts to true and = true so true)
15. == computes equality after time conversion, but === computes equality before type conversion
16. 
17. [2,4,6] (callback function that multiplies each value by 2 is passed to the modifyArray function and called on each index of input [1,2,3] and returned
18. 
19. 1...4...3...2 because 3 is delayed and 2 is delayed 
 
