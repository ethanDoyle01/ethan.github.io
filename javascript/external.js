// // A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write("Hello, welcome "+ user_name +"!");
var webmaps =
    [
        ["Oil Spill Toolkit", "https://www.glo.texas.gov", 
        "The oil spill toolkit developed by Enterprise Technology Solutions is neat."],
        ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/", 
        "The Texas Parks and Wildlife's Landscape Ecology program is great."]
    ];

function welcome() {
    let a = "Please enter your name.";
    let b = "Type your name here.";
    // A prompt box is used to prompt users to input a value before entering a page.
    //user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}

document.write(welcome());

function webmap_table() {
    document.write("<table width='100%'>");
    for (var row = 0; row < webmaps.length; row++) {
        let col = 0;
        document.write("<tr>");
        document.write("<td>" + webmaps[row][col] + "</td>");
        document.write("<td>" + webmaps[row][++col] + "</td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td colspan='2'>" + webmaps[row][++col] + "</td>");
        document.write("</tr>");

        document.write("<tr><td colspan='2' style='height: 16px'></td></tr>");
    }
    document.write("</table>");
    return "";
}
