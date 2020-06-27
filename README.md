# 19-React - Employee Directory


## Description
This is a web application built with React. The data it access is in a local json file, so no external API or database here.  It's a simple list of "employeee" with their names, an image, phone number, email address and date of birth. The names be searched with the search box and they can be sorted with the button at the top of the list.

## User Story

As a person who wants to contact other users in my organization

I WANT to be able to access a directory with contact information of the other users in my organization

SO THAT I can search for contact information for specific users to contact them

GIVEN an employee directory powered by a json file
WHEN I start typing in the search bar
THEN the search results show only items that match what I've typed 
WHEN I click the Sort by Name button
THEN the search results are sorted in ascending order by name
WHEN I click Sort by Name a second time
THEN the search results are sorted in descending order by name, and it alternates every time the button is clicked

## Acceptance Criteria

DONE - Sorts the table by name email address. The buttons work to sort by Date of birth and phone number, but because they are stored as text, the sort is a little off. Future release could include converting those fields to their correct data types so the sort is correct.

DONE - The Search bar filters by the name - and does so as the user types each letter. Thank you React!


