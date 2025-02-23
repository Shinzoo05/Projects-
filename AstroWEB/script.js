const horoscopes = {
    aries: "Today,Don't try to mess with ur mum..else u may have to face the slippers 😚😚",
    taurus: "Focus on your work only!! Don't poke ur Nose in other people's matter 😑😑",
    gemini: "Do Communicate ur Emotions with ur partner he is'nt a god whom may known things in advance 🙄🙄",
    cancer: "Take time for self-care...Todayy, U need Yourself 🤗🤗",
    leo: "Your Partner Loves you the most..U should convey ur feelings to HIM/HER!! 💕💕",
    virgo: "Stay organized and productive..**Do Ur Work With Full of Energy** 😎😎",
    libra: "Seek balance in all things...Don't try to do all the things by yourself...U AREN'T A Super Human! 😏😏",
    scorpio: "Intense emotions may arise. Trust the process and let go...😩😩",
    sagittarius: "Feeling Motu...soo Go And Do Some Exercise Stupid..Staying at Home only, will make u more MOTU MOTU🥲🥲",
    capricorn: "Stay focused on your goals...Get Out of The Dreams of Fests😒😒",
    aquarius: "Think out of the box...So The Box Will brokeup And U will be Beaten By ur mom 😂🤣 Kidding Sorry..ACTUALLY so that, u will stand different from other people",
    pisces: "Your creativity is at its peak. You Will Become The New EINSTEIN Soon😅😅"
};

function showHoroscope() {
    const zodiac = document.getElementById("zodiac").value;
    const horoscopeMessage = horoscopes[zodiac] || "Please select a valid zodiac sign.";
    
    document.getElementById("horoscope").textContent = horoscopeMessage;
    // fade-in effect of horoscope box
    const box = document.getElementById("horoscope-box");
    box.style.display = "block";
    box.style.opacity = 1;
}

// Compatibility Calculator wala function

    function calculateCompatibility() {
        let boyName = document.getElementById("boyName").value.toLowerCase();
        let girlName = document.getElementById("girlName").value.toLowerCase();
        
        if (boyName === "" || girlName === "") {
            alert("Please enter both names!");
            return;
        }
    
        let combinedNames = boyName + girlName;
        let compatibilityScore = 0;
    
        // Matching Letters Calculation
        for (let i = 0; i < combinedNames.length; i++) {
            compatibilityScore += combinedNames.charCodeAt(i);
        }
    
        // Generate % from sum of character values
        let compatibilityPercentage = (compatibilityScore % 101); // Limit between 0-100
    
        // Set the percentage inside the heart
        document.getElementById("compatibilityPercent").innerText = compatibilityPercentage + "%";
    
        // Set the heart animation
        let heart = document.getElementById("heart");
        heart.classList.add("beating");
    
        // Determine Message Based on Percentage
        let message = "";
        if (compatibilityPercentage >= 90) {
            message = "💞 Perfect Match! A love written in the stars! Made For Each Other ✨";
        } else if (compatibilityPercentage >= 70) {
            message = "❤️ Great Compatibility! A strong and passionate bond. 🔥";
        } else if (compatibilityPercentage >= 50) {
            message = "💙 Good Compatibility! Work on your love and it will shine! 💫";
        } else {
            message = "💔 Less Compatible. But love can conquer all! 💕";
        }
    
        // Display the message
        document.getElementById("compatibilityText").innerText = message;
    
        // Show result box
        document.getElementById("resultBox").style.display = "block";
    }
/*(EXTRA) NOT NECESSARILY NEEDED............*/
    function clearResults() {
        // Hide the result box
        document.getElementById("resultBox").style.display = "none";
        
        // Clear input fields
        document.getElementById("boyName").value = "";
        document.getElementById("girlName").value = "";
        document.getElementById("boySign").selectedIndex = 0;
        document.getElementById("girlSign").selectedIndex = 0;
    
        // Clear stored data in local storage
        localStorage.removeItem("boyName");
        localStorage.removeItem("girlName");
        localStorage.removeItem("boySign");
        localStorage.removeItem("girlSign");
    
        // Clear displayed percentage and message
        document.getElementById("compatibilityPercent").innerText = "";
        document.getElementById("compatibilityText").innerText = "";
    
        alert("All data has been cleared! ✅");
    }

    document.getElementById("backButton").addEventListener("click", function() {
        window.location.href = "index.html"; // Go to first page 
    });
    
 
//href--> is a property that stores the URL of the p
//addEventListener----> is a method that listens for events (like clicks, key presses, etc.).
//"click"---> means we are listening for a click on the backButton.
//function() { ... }
//This is an anonymous function (a function with no name)........
//It gets executed only when the button is clicked...... 



/*......................................................Example for Explanation.............................................................
boyName = "Alex";
girlName = "Emma";
combinedNames = "AlexEmma"; 

##For Loop Used Here 
1)for → A loop that repeats a block of code multiple times.
2)let i = 0; → Starts the loop with i (index) set to 0.
3)i < combinedNames.length; → Runs the loop until every letter in combinedNames is processed.
4)i++ → Increases i by 1 after each loop iteration.

THIS-->>>>>>>>>compatibilityScore += combinedNames.charCodeAt(i);<<<<<<<<-------------
1)combinedNames.charCodeAt(i) → Gets the ASCII value of the character at index i.
2)+= → Adds this ASCII value to compatibilityScore.

SEEEEEEEEEEEEEEEEE Exampleeeeeeeeeeee babyiie gurl:---
"A" = 65
"l" = 108
"e" = 101
"x" = 120
"E" = 69
"m" = 109
"m" = 109
"a" = 97

(Total ASCII sum) = (65 + 108 + 101 + 120 + 69 + 109 + 109 + 97) = **(878)**
(compatibilityPercentage) = (878 % 101) = (70)% Ans.......


  1️⃣ Join the two names together (combinedNames = boyName + girlName).
  2️⃣ Initialize a compatibilityScore variable at 0.
  3️⃣ Loop through every letter in combinedNames and sum their ASCII values.
  4️⃣ Use % 101 to limit the percentage between 0-100.
  5️⃣ Insert the percentage into the heart element on the webpage.

*/

