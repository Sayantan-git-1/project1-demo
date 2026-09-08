function askAssistant() {

    const question =
        document.getElementById("question").value.toLowerCase();

    const answer =
        document.getElementById("answer");


    if (question.includes("library")) {

        answer.innerHTML =
            "📚 The library is located in Block A, Ground Floor.";

    }

    else if (question.includes("cse") ||
             question.includes("computer")) {

        answer.innerHTML =
            "💻 The CSE Lab is located in Block B, 2nd Floor.";

    }

    else if (question.includes("cafeteria") ||
             question.includes("food")) {

        answer.innerHTML =
            "🍴 The cafeteria is beside the main auditorium.";

    }

    else if (question.includes("event") ||
             question.includes("hackathon")) {

        answer.innerHTML =
            "🚀 Check the Events section for upcoming campus events.";

    }

    else {

        answer.innerHTML =
            "🤖 I don't have that information yet. Try asking about the library, CSE lab, cafeteria or events.";

    }

}