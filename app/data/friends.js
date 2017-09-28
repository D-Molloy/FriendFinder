//friends.js stores the following seed data in friends array.  When users complete the survey, their information will be stored appended to the bottom of the array.
var friendsArray = [
    {
        "name": "Kimmy Schmidt",
        "photo": "https://images.hellogiggles.com/uploads/2017/01/12054107/GettyImages-631497168-700x525.jpg",
        "scores": [
        "5",
        "2",
        "1",
        "5",
        "3",
        "5",
        "2",
        "5",
        "1",
        "5"
        ]
    },
    {
        "name": "Donald J. Trump",
        "photo": "http://static4.businessinsider.com/image/56c640526e97c625048b822a-480/donald-trump.jpg",
        "scores": [
        "1",
        "5",
        "5",
        "5",
        "5",
        "1",
        "1",
        "1",
        "5",
        "1"
        ]
    },
    {
        "name": "Denis Molloy",
        "photo": "https://avatars2.githubusercontent.com/u/27693954?v=4&s=460",
        "scores": [
        "4",
        "1",
        "1",
        "3",
        "1",
        "1",
        "2",
        "5",
        "1",
        "5"
        ]
    }
];
//this file exports the firends array to apiRoutes.html for use in survey.html
module.exports = friendsArray;